import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const PORT = 3000;

app.get("/", (req,res)=> {
    res.send("EnviroTech Server is Ready");
});

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