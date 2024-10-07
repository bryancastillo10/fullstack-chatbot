import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { updateProfileProps } from "./type";

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

export const updateProfilePicture = async (req: Request, res: Response) => {
  res.send("Update Profile Picture Endpoint");
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
