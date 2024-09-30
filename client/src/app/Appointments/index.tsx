import { useState, useEffect, useMemo } from "react";
import { Input, CustomSelect, TextArea } from "../../reusables";

import { Cloud, BookOpen, ChatDots, HardHat } from "@phosphor-icons/react";
import { useGetServicesQuery, useGetConsultantsQuery } from "../../api/appointment";
import { GetConsultantsResponse, GetServiceResponse } from "../../types/appointment";

const Appointments = () => {
  const [message,setMessage] = useState<string|undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedConsultant, setSelectedConsultant] = useState<string|null>(null);

  const queryTerm = useMemo(() => {
    return selectedService ? selectedService.split(' ')[0] : undefined;
  }, [selectedService]);

  const {data:services } = useGetServicesQuery();
  const { data: consultants, isLoading: isConsultantsLoading} = useGetConsultantsQuery(queryTerm|| undefined, {
    skip: !queryTerm
  });

  const serviceOptions = services?.map((service: GetServiceResponse) => ({
    value: service.name, 
    label: service.name,
  })) || [];

  const consultantOptions = consultants?.map((consultant: GetConsultantsResponse)=>({
      value: consultant.consultant_id,
      label:consultant.name
  }))|| [];


  useEffect(()=>{
    setSelectedConsultant(null);
  }, [selectedService])

  return (
    <section className="grid grid-cols-2">
        <div className="border border-black">
          <h1 className="font-semibold text-2xl my-2">Book an Appointment</h1>
          <form action="">
            <Input 
              id="topic" 
              type="text"
              label="Topic" 
              icon={Cloud}
              onChange={()=>{}} 
              />
              
              <TextArea 
                onChange={()=>setMessage(message)}
                id="message" 
                value={message!}
                label="Message" 
                icon={ChatDots}
              />
              {/* Service : Select */}
              <CustomSelect<string>
                label="Services Offered"
                icon={BookOpen}
                value={selectedService}
                option={serviceOptions}
                onChange={(value:string|null)=>{setSelectedService(value)}}
                validationMessage="Test message to describe select component"
              />

              {/* Consultant: Select */}
              <CustomSelect<string>
                label="Consultants"
                icon={HardHat}
                value={selectedConsultant}
                option={consultantOptions}
                onChange={(value: string | null) => setSelectedConsultant(value)}
                validationMessage="Please select a consultant"
                isLoading={isConsultantsLoading}

                disabled={!selectedService}
              />

              {/* Appointment Time */}
              <div className="m-4 border border-black bg-secondary text-primary
              w-fit px-3 py-2 shadow-md rounded-2xl">
                10:00 am to 11:00 am
              </div>
          </form>
        </div>
        <div className="">
          <h1>Aside section</h1>
        </div>
    </section>
  )
}

export default Appointments;
