import { Request } from "express";
import { Multer } from "multer";
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

export interface FileUploadRequest extends Request {
  file?: Multer.file;
}

export interface SupabaseUploadResponse {
  data?: {
    publicUrl?: string;
  };
  error?: {
    message: string;
  };
}
