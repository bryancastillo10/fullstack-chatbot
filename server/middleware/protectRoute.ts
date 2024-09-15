import jwt from "jsonwebtoken";
import { Response, NextFunction} from "express";
import { CustomRequest } from "./type";
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const protectRoute = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            res
            .status(401)
            .json({error:"No token provided. Unauthorized access"});
        }

        const decrypt = jwt.verify(token, process.env.JWT_SECRET) as {userId:string};

        const userId = decrypt.userId;
        if(!userId){
            res
            .status(401)
            .json({error:"Invalid token. Unauthorized access"});
        }

        const user = await prisma.user.findUnique({
            where: { user_id: userId },
            select: {
              user_id: true,
              username: true,
              email: true,
              createdAt: true,
              updatedAt: true,
            },
          });

        if(!user){
            res.status(401).json({error:"User not Found"});
        }

        req.user = user;
        next();
    }
    catch(error){
        console.error("Error at the protectRoute middleware", error.message);
        res.status(500).json({error:"Internal server error"});
    }
};

export default protectRoute;