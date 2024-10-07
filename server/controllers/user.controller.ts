import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import supabase from "../utils/supabaseClient";
import {
  updateProfileProps,
  FileUploadRequest,
  SupabaseUploadResponse,
} from "./type";

const prisma = new PrismaClient();

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

export const updateProfilePicture = async (
  req: FileUploadRequest,
  res: Response
) => {
  const { user_id } = req.params;

  const file = req.file;
  if (!file) {
    res.status(404).json({ error: "No file has been uploaded" });
    return;
  }

  try {
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("profile-pictures")
      .upload(`public/${user_id}/${file.originalname}`, file.buffer);

    if (uploadError) {
      throw new Error(`Supabase upload error: ${uploadError.message}`);
    }

    const { data: publicURLData, error: urlError }: SupabaseUploadResponse =
      supabase.storage
        .from("profile-pictures")
        .getPublicUrl(`public/${user_id}/${file.originalname}`);

    if (urlError || !publicURLData?.publicUrl) {
      throw new Error("Failed to retrieve the public image URL");
    }

    const publicURL = publicURLData.publicUrl;

    const updatedUser = await prisma.user.update({
      where: { user_id },
      data: { profilePicture: publicURL },
    });

    res.json({
      message: "Profile picture has been changed successfully",
      profilePicture: publicURL,
      user: updatedUser,
    });
  } catch (error) {
    console.error(
      "Error at the updateProfilePicture controller",
      error.message
    );
    res.status(500).json({ error: "Something went wrong" });
  }
};

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
