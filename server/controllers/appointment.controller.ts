import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Appointment
export const addAppointment = async (req: Request, res: Response) => {
    res.send("Create Appointment endpoint");
};

export const getAppointment = async (req: Request, res: Response) =>{
    res.send("Get Appointment endpoint");
}

export const updateAppointment = async (req: Request, res:Response) => {
    res.send("Update Appointment endpoint");
}

export const deleteAppointment = async(req: Request, res: Response) => {
    res.send("Delete Appointment endpoint");
}