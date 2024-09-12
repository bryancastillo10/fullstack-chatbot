import {Request,Response} from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSignIn = async (req: Request, res: Response): Promise<void> => {
    try{
        const { username, email, password, confirmPassword} = req.body;

        if(!username || !email || !password || !confirmPassword){
            res.status(400).json({error: "All fields are required"});
            return;
        }

        if(password !== confirmPassword){
            res.status(400).json({error:"Passwords doesn't match"});
            return;
        }

        const existingUser = await prisma.users.findUnique({
            where: { username },
          });

        if(existingUser){
            res.status(400).json({error:"Username already exist"});
            return;
        }

        const existingEmail = await prisma.users.findUnique({
            where: {email},
        })

        if(existingEmail){
            res.status(400).json({error:"Email already exist"});
            return;
        }


        const cryptSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,cryptSalt);

        const newUser = await prisma.users.create({
            data: {
              username,
              email,
              password: hashedPassword,
              profilePicture: "/assets/defaultprofilepic.png",
            },
          });

        res.status(201).json({message:"User sign up is successful", user: newUser});
    }
    catch(error){
        console.error("Error at sign up controller", error.message);
        res.status(500).json({error:"Something went wrong"});
    }
}