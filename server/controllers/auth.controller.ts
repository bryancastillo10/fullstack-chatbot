import {Request,Response} from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import generateTokenAndSetCookie from "../utils/generateToken";

const prisma = new PrismaClient();

// Sign Up
export const userSignUp = async (req: Request, res: Response): Promise<void> => {
    try{
        const { user_id, username, email, password, confirmPassword} = req.body;

        // Missing Fields Validation
        if(!username || !email || !password || !confirmPassword){
            res.status(400).json({error: "All fields are required"});
            return;
        }

        // Username Validation
        const usernameRegex = /^[a-zA-Z0-9 ]{5,}$/;
        if (!usernameRegex.test(username)) {
            res.status(400).json({ error: "Username must be greater than 5 alphanumeric characters." });
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ error: "Invalid email address. Please provide a valid email." });
            return;
        }

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
        if (!passwordRegex.test(password)) {
            res.status(400).json({ error: "Password must contain at least one uppercase letter, one lowercase letter, and one numeric character." });
            return;
        }

        // Password and ConfirmPassword Comparison
        if(password !== confirmPassword){
            res.status(400).json({error:"Passwords doesn't match"});
            return;
        }

        // Existing User Validation
        const existingUser = await prisma.user.findUnique({
            where: { username },
          });

        if(existingUser){
            res.status(400).json({error:"Username already exist"});
            return;
        }

        // Existing Email Validation
        const existingEmail = await prisma.user.findUnique({
            where: {email},
        })

        if(existingEmail){
            res.status(400).json({error:"Email already exist"});
            return;
        }

        // Password Hashing
        const cryptSalt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,cryptSalt);

        // Adding a new user to the Database
        const newUser = await prisma.user.create({
            data: {
            user_id: user_id,
              username,
              email,
              password: hashedPassword,
              profilePicture: "/assets/defaultprofilepic.png",
            },
          });

        //   Setting up a JWT Token and Cookie
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

// Sign In
export const userSignIn= async (req: Request, res: Response): Promise<void> => {
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
        const authUser = {
            id: user.user_id,
            username:user.username,
            email: user.email,
            profilePicture:user.profilePicture
        }
        
        generateTokenAndSetCookie(user.user_id,res);
        res.status(200).json({message:"User just logged in successfully", user: authUser})
    }
    catch(error){
        console.error("Error at sign in controller", error.message);
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