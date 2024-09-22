import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateUserProfile  = async(req: Request, res: Response) => {
        res.send("Update User Profile Endpoint");
};

export const updateProfilePicture = async(req: Request, res: Response) => {
    res.send("Update Profile Picture Endpoint");
};

export const deleteProfile = async(req: Request, res: Response) => {
    res.send("Delete Profile Endpoint")
}