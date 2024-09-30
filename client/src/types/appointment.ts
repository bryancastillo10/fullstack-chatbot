export interface GetServiceResponse {
    service_id:string;
    name:string;
}

interface ServiceProps{
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