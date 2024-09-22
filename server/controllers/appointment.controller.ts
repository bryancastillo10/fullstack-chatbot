import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CustomGetAppointmentRequest } from "./type";

const prisma = new PrismaClient();

// Create Appointment
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
      console.error("Error at addAppointment controller",error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

// Get Appointment by User
export const getAppointment = async (req: CustomGetAppointmentRequest, res: Response) => {
  try {
    const user_id = req.user?.user_id;

    if (!user_id) {
      res.status(401).json({ error: 'Unauthorized access.' });
      return;
    }

    const appointments = await prisma.appointment.findMany({
      where: { user_id },
      include: {
        consultant: {
          select:{name:true}
        },
        service:{
          select:{name:true},
        },
      },
    });

    if (appointments.length === 0) {
      res.status(200).json({ message: 'No appointments found.' });
      return;
    }

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error at the getAppointment controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update Appointment
export const updateAppointment = async (req: Request, res:Response) => {
    try{
      const {id} = req.params;

      const {topic, message, startDate, endDate, appointmentTime,status} = req.body;

      const existingAppointment = await  prisma.appointment.findUnique({
        where: { appointment_id: id },
      });

      if (!existingAppointment) {
        res.status(404).json({ error: 'Appointment not found.' });
        return;
      }

      const updatedAppointment = await prisma.appointment.update({
        where: { appointment_id: id },
        data: {
          topic,
          message,
          startDate: startDate ? new Date(startDate) : undefined,
          endDate: endDate ? new Date(endDate) : undefined,
          appointmentTime,
          status,
        },
      });

      res.status(200).json(updatedAppointment);

    } catch(error){
      console.error("Error at updateAppointment controller",error.message);
      res.status(500).json({error:"Internal server error"});
    }
}

// Delete Appointment
export const deleteAppointment = async(req: Request, res: Response) => {
    res.send("Delete Appointment endpoint");
}