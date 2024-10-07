import { Request } from "express";

export interface CustomGetAppointmentRequest extends Request {
  user?: {
    user_id: string;
    username: string;
  };
}

export interface updateProfileProps {
  username: string;
  email: string;
  password: string;
}
