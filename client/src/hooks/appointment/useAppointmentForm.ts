import {useState, useEffect, useMemo} from "react";
import { differenceInCalendarDays } from "date-fns";
import { useGetServicesQuery,useGetConsultantsQuery } from "../../api/appointment";
import { AppointmentRequest } from '../../types/appointment';
import { GetServiceResponse, GetConsultantsResponse } from "../../types/appointment";
import { Range } from "react-date-range";

interface useAppointmentFormProps{
    appointmentForm: AppointmentRequest;
    dateRange:Range;
}

const useAppointmentForm = ({appointmentForm,dateRange}:useAppointmentFormProps) => {

    const timeSlots = [
        "9:00 am to 10:00 am",
        "10:00 am to 11:00 am",
        "11:00 am to 12:00 pm",
        "1:00 pm to 2:00 pm",
        "2:00 pm to 3:00 pm",
        "3:00 pm to 4:00 pm",
      ];

    const { data: services } = useGetServicesQuery();
    const selectedService = useMemo(() => {
        return appointmentForm.service_id 
          ? services?.find(serve => serve.service_id === appointmentForm.service_id)?.name 
          : undefined;
      }, [appointmentForm.service_id, services]);
    
    const servicePrice = services ? services.find((serve) => serve.service_id === appointmentForm.service_id)?.price : undefined;
    const [totalPrice, setTotalPrice] = useState<number|undefined>(servicePrice);
    
    
    useEffect(()=>{
        if(dateRange.startDate && dateRange.endDate){
          const dayCount = differenceInCalendarDays(
            dateRange.endDate,
            dateRange.startDate
          )
          if (dayCount && totalPrice){
            setTotalPrice(dayCount * servicePrice!);
          }
          else{
            setTotalPrice(servicePrice)
          }
        }
     },[dateRange,totalPrice, servicePrice]);

    
    const { data: consultants, isLoading: isConsultantsLoading } = useGetConsultantsQuery(selectedService || undefined, {
        skip: !selectedService
      });
    
      const serviceOptions = services?.map((service: GetServiceResponse) => ({
        value: service.service_id, 
        label: service.name,
      })) || [];
    
      const consultantOptions = consultants?.map((consultant: GetConsultantsResponse)=>({
          value: consultant.consultant_id,
          label:consultant.name
      }))|| [];
    
    
    return {
        timeSlots,
        serviceOptions,
        consultantOptions,
        isConsultantsLoading,
        servicePrice,       
        totalPrice,
    };
};

export default useAppointmentForm;