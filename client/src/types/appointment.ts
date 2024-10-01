export interface GetServiceResponse {
    service_id:string;
    name:string;
}

type ServiceProps = {
    service_id:string;
    name:string;
    description:string;
    price:number;
    duration:number;
}
export interface GetConsultantsResponse {
    consultant_id:string;
    name:string;
    position:string;
    expertise:string[];
    profilePicture:string;
    email:string;
    rating:number;
    services?:ServiceProps
}

type AppointmentDataProps = {
    appointment_id:string;
    user_id:string;
    consultant_id:string;
    service_id:string;
    topic:string;
    message:string;
    createdAt:Date;
    startDate:Date;
    endDate:Date;
    appointmentTime:string;
    status:string;
}
export interface AppointmentRequest{
    user_id:string;
    consultant_id:string;
    service_id:string;
    topic:string;
    message:string;
    startDate:Date;
    endDate:Date;
    appointmentTime:string;
}

export interface CreateGetAppointment extends AppointmentDataProps{
    consultant?: { name: string; }
    service?: {name:string }
} 

export interface UpdateDeleteAppointment<T> {
    message:string;
    updatedAppointment: T;
}

export type UpdateAppointment = UpdateDeleteAppointment<AppointmentDataProps>;
export type DeleteAppointment = UpdateDeleteAppointment<AppointmentDataProps>;