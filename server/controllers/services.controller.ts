import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServices = async (req:Request, res:Response) => {
        try{
            const services = await prisma.service.findMany({
            }); 
            
            if(!services){
                res.status(404).json("No services information found");
                return;
            }

            res.status(200).json(services);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred at getServices controller'});
        }
};

export const getServicesName = async(req:Request, res:Response) => {
    try{
        const servicesName = await prisma.service.findMany({
            select:{
                service_id: true,
                name:true
            }
        });

        if(!servicesName){
            res.status(404).json("No services name found");
            return;
        }

        res.status(200).json(servicesName);

    } catch(error){
        res.status(500).json({ error: 'An error occurred at getServicesName controller'});
    };
}; 