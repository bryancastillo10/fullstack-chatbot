import { useState, useCallback } from "react";
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
        endDate: new Date()
    });

    // Input Field
    const handleFormStateChange = useCallback((key: keyof typeof appointmentForm, value: string | never) => {
        setAppointmentForm((prev)=> ({
            ...prev,
            [key]:value
        }));
    },[])

    // Service and Consultant ID
    const setService = useCallback((service_id:string | null) => {
        handleFormStateChange('service_id',service_id!);
    },[handleFormStateChange]);

    const setConsultant = useCallback((consultant_id:string | null) => {
        handleFormStateChange('consultant_id',consultant_id!);
    },[handleFormStateChange]);

    // Time Slot
    const setTimeSlot = useCallback((timeSlot: string) => {
        handleFormStateChange('appointmentTime',timeSlot)
    },[handleFormStateChange]);
    
    const handleDateChange = useCallback((ranges:RangeKeyDict) => {
        const {selectedDate} = ranges;
        setAppointmentForm((prev)=> ({
            ...prev,
            startDate: selectedDate.startDate as Date,
            endDate: selectedDate.endDate as Date
        }))
    }
    ,[])

    return {
        appointmentForm,
        setService,
        setConsultant,
        setTimeSlot,
        handleFormStateChange, 
        handleDateChange};
};

export default useCreateAppointment;