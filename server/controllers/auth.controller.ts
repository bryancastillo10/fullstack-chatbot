import {Request,Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSignIn = async (req: Request, res: Response): Promise<void> => {
    res.send("Working Endpoint");
}