import { Request } from "express";

export interface CustomGetAppointmentRequest extends Request{
    user?:{
        user_id:string;
        username:string;
    }
}