import {Request,Response} from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import generateTokenAndSetCookie from "../utils/generateToken";

const prisma = new PrismaClient();

// Sign In
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

        const existingUser = await prisma.user.findUnique({
            where: { username },
          });

        if(existingUser){
            res.status(400).json({error:"Username already exist"});
            return;
        }

        const existingEmail = await prisma.user.findUnique({
            where: {email},
        })

        if(existingEmail){
            res.status(400).json({error:"Email already exist"});
            return;
        }


        const cryptSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,cryptSalt);

        const newUser = await prisma.user.create({
            data: {
              username,
              email,
              password: hashedPassword,
              profilePicture: "/assets/defaultprofilepic.png",
            },
          });

        if(newUser){
            generateTokenAndSetCookie(newUser.user_id, res);
            res.status(201).json({message:"User sign up is successful", user: newUser});
        }
    }
    catch(error){
        console.error("Error at sign up controller", error.message);
        res.status(500).json({error:"Something went wrong"});
    }
};

// Sign Up
export const userSignUp= async (req: Request, res: Response): Promise<void> => {
    try{
        const {username,password} = req.body;
        const user = await prisma.user.findUnique({where:{username}})

        if(!user){
            res.status(400).json({error:"Invalid username. Please try again."});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            res.status(401).json({error:"Invalid password. Please try again."});
        }

        generateTokenAndSetCookie(user.user_id,res);
        res.status(200).json({
            id: user.user_id,
            username:user.username,
            email: user.email,
            profilePicture:user.profilePicture
        })
    }
    catch(error){
        console.error("Error at SignIn controller", error.message);
        res.status(500).json({error:"Something went wrong"});
    }
};


// Log Out
export const userLogOut = async (req: Request, res: Response): Promise<void> =>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"You have been logged out successfully"});
    }
    catch(error){
        console.error("Error LogOut controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};