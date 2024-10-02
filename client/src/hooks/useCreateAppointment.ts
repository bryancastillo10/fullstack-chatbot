import { useState } from "react";
import {  RangeKeyDict } from "react-date-range";
import { AppointmentRequest } from "../types/appointment";

const useCreateAppointment = () => {
    const [appointmentForm, setAppointmentForm] = useState<AppointmentRequest>({
        topic: "",
        message: "",
        user_id:"",
        service_id: "",
        consultant_id: "",
        appointmentTime:"",
        startDate: new Date(),
        endDate: new Date(),
    });

    // Input Field
    const handleFormStateChange = (key: keyof typeof appointmentForm, value: string | never) => {
        setAppointmentForm((prev)=> ({
            ...prev,
            [key]:value
        }));
    }

    // Service and Consultant ID
    const setService = (service_id:string) => {
        handleFormStateChange('service_id',service_id);
    };

    const setConsultant = (consultant_id:string) => {
        handleFormStateChange('consultant_id',consultant_id);
    };

    // Time Slot
    const setTimeSlot = (timeSlot: string) => {
        handleFormStateChange('appointmentTime',timeSlot)
    };
    
    const handleDateChange = (ranges: RangeKeyDict) => {
        const selection = ranges.selection;
        setAppointmentForm((prev)=> ({
            ...prev,
            startDate: selection.startDate as Date,
            endDate: selection.endDate as Date
        }))
      };
    

    return {
        appointmentForm,
        setService,
        setConsultant,
        setTimeSlot,
        handleFormStateChange, 
        handleDateChange};
};

export default useCreateAppointment;