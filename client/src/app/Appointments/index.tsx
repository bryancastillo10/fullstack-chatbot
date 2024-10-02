import { useEffect, useMemo } from "react";
import { Input, CustomSelect, TextArea, Button, Calendar } from "../../reusables";
import { Cloud, BookOpen, ChatDots, HardHat } from "@phosphor-icons/react";
import { useGetServicesQuery, useGetConsultantsQuery } from "../../api/appointment";
import { GetConsultantsResponse, GetServiceResponse } from "../../types/appointment";
import TimeSelector from "./TimeSelector";
import useCreateAppointment from "../../hooks/useCreateAppointment";

const Appointments = () => {
  const {
    appointmentForm,
    setService,
    setConsultant,
    setTimeSlot,
    handleFormStateChange,
    handleDateChange
  } = useCreateAppointment();

  const timeSlots = [
    "9:00 am to 10:00 am",
    "10:00 am to 11:00 am",
    "11:00 am to 12:00 pm",
    "1:00 pm to 2:00 pm",
    "2:00 pm to 3:00 pm",
    "3:00 pm to 4:00 pm",
  ];


  const queryTerm = useMemo(() => {
    return appointmentForm.service_id ? appointmentForm.service_id.split(' ')[0] : undefined;
  }, [appointmentForm.service_id]);

  const {data:services } = useGetServicesQuery();
  const { data: consultants, isLoading: isConsultantsLoading} = useGetConsultantsQuery(queryTerm|| undefined, {
    skip: !queryTerm
  });

  const serviceOptions = services?.map((service: GetServiceResponse) => ({
    value: service.service_id, 
    label: service.name,
  })) || [];

  const consultantOptions = consultants?.map((consultant: GetConsultantsResponse)=>({
      value: consultant.consultant_id,
      label:consultant.name
  }))|| [];

  const dateRange = {
    startDate: appointmentForm.startDate,
    endDate: appointmentForm.endDate
  }

  useEffect(()=>{
    setConsultant("");
  }, [appointmentForm.service_id, setConsultant])

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
                  value={appointmentForm.topic}
                  onChange={(e)=> handleFormStateChange('topic', e.target.value)} 
                  />

                <TextArea 
                  id="message" 
                  value={appointmentForm.message}
                  onChange={(e)=> handleFormStateChange('message',e.target.value)}
                  label="Message" 
                  icon={ChatDots}
                />

                <CustomSelect<string>
                  label="Services Offered"
                  icon={BookOpen}
                  value={appointmentForm.service_id}
                  option={serviceOptions}
                  onChange={setService}
                  validationMessage="Test message to describe select component"
                />

                <CustomSelect<string>
                  label="Consultants"
                  icon={HardHat}
                  value={appointmentForm.consultant_id}
                  option={consultantOptions}
                  onChange={setConsultant}
                  validationMessage="Please select a consultant"
                  isLoading={isConsultantsLoading}
                  disabled={!appointmentForm.service_id}
                />
                </div>

                <div>
                    <div className="my-4 flex flex-col items-center xl:items-start">
                      <h1 className="pl-2 font-semibold text-lg mb-2">Select Schedule</h1>
                      <div className="w-fit">
                        <Calendar
                          value={dateRange} 
                          onChange={handleDateChange} 
                          disabledDates={[new Date(2024, 0, 1)]} 
                        />
                      </div>
                    </div>
                    <div className="my-8">
                      <h1 className="pl-2 font-semibold text-lg">Select Time Slot</h1>
                      <TimeSelector
                          timeSlots={timeSlots}
                          selectedSlot={appointmentForm.appointmentTime}
                          onSelect={setTimeSlot}
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
