import { Request, Response } from "express";


export const getServices = async (req:Request, res:Response) => {
    res.send("Get Services Endpoint");
};