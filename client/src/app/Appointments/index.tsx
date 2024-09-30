import { useState, useEffect, useMemo } from "react";
import { Input, CustomSelect, TextArea, Button } from "../../reusables";

import { Cloud, BookOpen, ChatDots, HardHat } from "@phosphor-icons/react";
import { useGetServicesQuery, useGetConsultantsQuery } from "../../api/appointment";
import { GetConsultantsResponse, GetServiceResponse } from "../../types/appointment";
import Calendar from "react-calendar";
import TimeSelector from "../../reusables/TimeSelector";

const Appointments = () => {
  const [message,setMessage] = useState<string|undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedConsultant, setSelectedConsultant] = useState<string|null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const timeSlots = [
    "9:00 am to 10:00 am",
    "10:00 am to 11:00 am",
    "11:00 am to 12:00 pm",
    "1:00 pm to 2:00 pm",
    "2:00 pm to 3:00 pm",
    "3:00 pm to 4:00 pm",
  ];

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
    <section className="w-full p-4">
          <h1 className="font-semibold text-2xl my-2">Book an Appointment</h1>
          <form action="" onSubmit={()=>{}}>
            <div className="grid grid-cols-1 xl:grid-cols-2 items-start gap-4">
              <div className="">
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

                <CustomSelect<string>
                  label="Services Offered"
                  icon={BookOpen}
                  value={selectedService}
                  option={serviceOptions}
                  onChange={(value:string|null)=>{setSelectedService(value)}}
                  validationMessage="Test message to describe select component"
                />

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
                </div>

                <div>
                    <div className="my-4 flex flex-col items-center">
                      <h1 className="font-semibold">Schedule</h1>
                      <Calendar 
                        className="calendar"
                        tileClassName="calendar-tiles"
                        tileContent=""
                        value={new Date()}
                      />
                    </div>
                    <div className="my-4">
                      <h1 className="font-semibold">Time Slot</h1>
                      <TimeSelector
                          timeSlots={timeSlots}
                          selectedSlot={selectedTimeSlot}
                          onSelect={setSelectedTimeSlot}
                        />
                    </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Button type="submit" width="w-[90%] xl:w-[70%] mx-auto" variant="primary">
                  Create Appointment
                </Button>
              </div>            
          </form>
    </section>
  )
}

export default Appointments;
