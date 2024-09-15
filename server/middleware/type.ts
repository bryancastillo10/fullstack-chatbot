import { Request } from "express";
interface SafeUser {
    user_id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface CustomRequest extends Request {
    user?: SafeUser;
}
