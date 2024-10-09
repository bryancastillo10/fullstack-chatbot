import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import fs from "fs";
import supabase from "../utils/supabaseClient";
import { updateProfileProps, FileUploadRequest } from "./type";

const prisma = new PrismaClient();

// Update Profile Information
export const updateUserProfile = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  const userData: updateProfileProps = req.body;

  try {
    if (userData.password) {
      const cryptSalt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, cryptSalt);
      userData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { user_id },
      data: userData,
    });

    res
      .status(200)
      .json({ message: "User Profile has been updated", user: updatedUser });
  } catch (error) {
    console.error("Error at the updatedUserProfile controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update by Uploading Profile Picture
export const updateProfilePicture = async (
  req: FileUploadRequest,
  res: Response
) => {
  const { user_id } = req.params;

  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file has been uploaded" });
  }

  try {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("profile-pictures")
      .upload(`public/${user_id}/${file.originalname}`, file.buffer);

    if (uploadError) {
      throw new Error(`Supabase upload error: ${uploadError.message}`);
    }

    const relativeFilePath = `public/${user_id}/${file.originalname}`;

    const updatedUser = await prisma.user.update({
      where: { user_id },
      data: { profilePicture: relativeFilePath },
    });

    if (file.path) {
      await fs.promises.unlink(file.path);
    }

    res.json({
      message: "Profile picture has been updated successfully",
      profilePicture: relativeFilePath,
      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "Error at the updateProfilePicture controller:",
      error.message
    );
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get Profile Picture (by Supabase URL)
export const getProfilePicture = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  try {
    const userProfile = await prisma.user.findUnique({
      where: { user_id: user_id },
      select: { profilePicture: true },
    });

    if (!userProfile || !userProfile.profilePicture) {
      return res.status(404).json({ error: "Profile picture path not found" });
    }
    const bucketName = "profile-pictures";
    const profilePictureUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucketName}/${userProfile.profilePicture}`;

    res.status(200).json({
      message: "Profile picture path has been successfully retrieved",
      profilePicture: profilePictureUrl,
    });
  } catch (error) {
    console.error("Error at the getProfilePicture controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete Account
export const deleteProfile = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  try {
    // Appointment Schema
    await prisma.appointment.deleteMany({
      where: { user_id },
    });

    // NewsFeed Schema
    await prisma.newsFeed.deleteMany({
      where: { user_id },
    });

    // Profile Picture from Supabase Storage
    const userProfile = await prisma.user.findUnique({
      where: { user_id },
      select: { profilePicture: true },
    });

    if (!userProfile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    if (userProfile.profilePicture) {
      const { error: deleteError } = await supabase.storage
        .from("profile-pictures")
        .remove([userProfile.profilePicture]);

      if (deleteError) {
        throw new Error(
          `Failed to delete the profile picture from storage ${deleteError.message}`
        );
      }
    }

    const deletedProfile = await prisma.user.delete({
      where: { user_id },
    });

    res.status(200).json({
      message: "User account has been successfully deleted",
      deletedProfile,
    });
  } catch (error) {
    console.error("Error at the deleteProfile controller", error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
