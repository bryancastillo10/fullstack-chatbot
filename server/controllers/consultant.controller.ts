import {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getConsultants = async (req:Request, res:Response) => {
    res.send("Get Consultant Endpoint");
};