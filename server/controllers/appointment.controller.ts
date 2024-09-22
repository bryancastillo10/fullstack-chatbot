import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addAppointment = async (req: Request, res: Response) => {
    try {
      const { user_id, consultant_id, service_id, topic, message, startDate, endDate, appointmentTime } = req.body;

      if (!user_id || !consultant_id || !service_id || !topic || !message || !startDate || !endDate || !appointmentTime) {
        res.status(400).json({ error: 'All fields are required.' });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { user_id },
      });
      if (!user) {
        res.status(404).json({ error: 'User not found.'});
        return;
      }

      const consultant = await prisma.consultant.findUnique({
        where: { consultant_id },
      });
      if (!consultant) {
        res.status(404).json({ error: 'Consultant not found.'});
        return;
      }

      const service = await prisma.service.findUnique({
        where: { service_id },
      });
      if (!service) {
        res.status(404).json({ error: 'Service not found.'});
        return;
      }
  
      const existingAppointment = await prisma.appointment.findFirst({
        where: {
          consultant_id,
          AND: [
            {
              startDate: { lte: new Date(endDate) },
            },
            {
              endDate: { gte: new Date(startDate) },
            },
          ],
        },
      });
  
      if (existingAppointment) {
        res.status(400).json({ error: 'Appointment already reserved. Try another date or time.' });
        return;
      }
  
      // Create the new appointment
      const newAppointment = await prisma.appointment.create({
        data: {
          user_id,
          consultant_id,
          service_id,
          topic,
          message,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          appointmentTime,
          status: 'Pending', 
        },
      });

      res.status(201).json(newAppointment);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error.' });
    }
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