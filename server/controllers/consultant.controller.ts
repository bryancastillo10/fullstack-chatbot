import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getConsultants = async (req: Request, res: Response) => {
  try {
    const service = req.query.services as string | undefined;

    const consultants = await prisma.consultant.findMany({
      where: service
        ? {
            consultantServices: {
              some: {
                service: {
                  name: {
                    contains: service, 
                    mode: "insensitive", 
                  },
                },
              },
            },
          }
        : {}, 
      include: {
        consultantServices: {
          include: {
            service: true,
          },
        },
      },
    });

    const formattedConsultants = consultants.map(consultant => ({
      ...consultant,
      services: consultant.consultantServices.map(consult => consult.service),
      consultantServices: undefined, 
    }));

    return res.status(200).json(formattedConsultants);
  } catch (error) {
    console.error("Error at getConsultants controller", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
