import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { PrismaClient } from '@prisma/client';

import authRoutes from "./routes/auth.routes";
import appointmentRoutes from "./routes/appointment.routes";

const app = express();
const prisma = new PrismaClient();

dotenv.config();
const PORT = 3000;

app.get("/", (req,res)=> {
    res.send("EnviroTech Server is Ready");
});

// Middleware
app.use(express.json());
app.use("/assets", express.static("assets"));
app.use(cookieParser());

// Routes
app.use("/auth",authRoutes);
app.use("/appointments",appointmentRoutes);


// Activate Server
app.listen(PORT, async ()=> {
    try{
        await prisma.$connect();
        console.log('Connected to PostgreSQL Database by Prisma ORM');
    }
    catch(error){
        console.error('Failed to connect to PostgreSQL',error.message);
        process.exit(1);
    }
    console.log(`Server is listening on port ${PORT}`)
});