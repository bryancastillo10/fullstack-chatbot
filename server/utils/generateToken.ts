import { Response } from "express";
import jwt from "jsonwebtoken"; 


const generateTokenAndSetCookie = (userId:string, res:Response) =>{
    const token = jwt.sign(
        {userId}, 
        process.env.JWT_SECRET,
        {expiresIn: "5h"})
        res.cookie("jwt", token, 
        {
            maxAge: 5 * 60 * 60 * 1000,
            httpOnly:true,
            sameSite:"strict",
            secure: process.env.NODE_ENV !== "development"
        });
    };

export default generateTokenAndSetCookie;