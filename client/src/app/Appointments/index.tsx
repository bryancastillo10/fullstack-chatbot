import { useState } from "react";
import { Input, CustomSelect, TextArea } from "../../reusables";

import { Cloud, BookOpen, Wrench } from "@phosphor-icons/react";
import { useGetServicesQuery } from "../../api/appointment";
import { GetServiceResponse } from "../../types/appointment";

const Appointments = () => {
  const {data:services } = useGetServicesQuery();

  const serviceOptions = services?.map((service: GetServiceResponse) => ({
    value: service.name, 
    label: service.name,
  })) || [];


  const [message,setMessage] = useState<string|undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              {/* Message : TextArea */}

              <TextArea 
                onChange={()=>setMessage(message)}
                id="message" 
                value={message!}
                label="Message" 
                icon={Wrench}
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
