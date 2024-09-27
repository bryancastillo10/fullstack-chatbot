import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getConsultants = async (req: Request, res: Response) => {
  try {
    const service = req.query.services as string;

    if (!service) {
      return res.status(400).json({ error: 'No service provided for filtering' });
    }

    const consultants = await prisma.consultant.findMany({
      include: {
        consultantServices: {
          include: {
            service: true,
          },
        },
      },
    });

    const filteredConsultants = consultants.filter(consultant => 
      consultant.expertise.some(expertise => 
        expertise.toLowerCase()
        .includes(service.toLowerCase()))
    );

    const formattedConsultants = filteredConsultants.map(consultant => ({
      ...consultant,
      services: consultant.consultantServices.map(cs => cs.service),
      consultantServices: undefined,
    }));

    res.json(formattedConsultants);
  } catch (error) {
    console.error("Error at getConsultants controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};