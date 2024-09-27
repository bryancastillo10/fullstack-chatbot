import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getConsultants = async (req: Request, res: Response) => {
  try {
    const services = req.query.services;

    if (!services) {
      return res.status(400).json({ error: 'No services provided for filtering' });
    }

    let serviceNames: string[];

    if (typeof services === 'string') {
      serviceNames = services.split(',').map(s => s.trim());
    } else if (Array.isArray(services)) {
      serviceNames = services.map(s => s.toString().trim());
    } else {
      return res.status(400).json({ error: 'Invalid services format' });
    }

    if (serviceNames.length === 0) {
      return res.status(400).json({ error: 'No valid services provided for filtering' });
    }

    const consultants = await prisma.consultant.findMany({
      where: {
        OR: serviceNames.map(serviceName => ({
          expertise: {
            has: serviceName
          }
        }))
      },
      include: {
        consultantServices: {
          include: {
            service: true
          }
        }
      }
    });

    const formattedConsultants = consultants.map(consultant => ({
      ...consultant,
      services: consultant.consultantServices.map(cs => cs.service),
      consultantServices: undefined
    }));

    res.json(formattedConsultants);
  } catch (error) {
    console.error("Error at getConsultants controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};