import { useEffect } from "react";
import {
  Input,
  CustomSelect,
  TextArea,
  Button,
  Calendar,
} from "../../reusables";
import { Cloud, BookOpen, ChatDots, HardHat } from "@phosphor-icons/react";
import TimeSelector from "./TimeSelector";
import useCreateAppointment from "../../hooks/appointment/useCreateAppointment";
import useAppointmentForm from "../../hooks/appointment/useAppointmentForm";
import { formatCurrency } from "../../utils/formatPrice";
import ConfirmAppointmentModal from "../Modals/ConfirmAppointmentModal";

const Appointments = () => {
  const {
    appointmentForm,
    setService,
    setConsultant,
    setTimeSlot,
    handleFormStateChange,
    handleDateChange,
  } = useCreateAppointment();

  const dateRange = {
    startDate: appointmentForm.startDate,
    endDate: appointmentForm.endDate,
    key: "selectedDate",
  };

  const {
    timeSlots,
    serviceOptions,
    consultantOptions,
    isConsultantsLoading,
    servicePrice,
    totalPrice,
    handleCreateAppointment,
  } = useAppointmentForm({ appointmentForm, dateRange });

  useEffect(() => {
    setConsultant("");
  }, [appointmentForm.service_id, setConsultant]);

  const noServiceTag = (
    <span className="text-xs bg-secondary text-primary px-2 py-1 rounded-2xl shadow-md">
      No services selected
    </span>
  );

  const priceTag = (price: number) => {
    return (
      <span className="font-semibold text-xl">{formatCurrency(price)}</span>
    );
  };

  return (
    <section className="w-full p-4">
      <h1 className="font-semibold text-2xl my-2">Book an Appointment</h1>
      <form action="" onSubmit={handleCreateAppointment}>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-start gap-4">
          <div className="flex flex-col">
            <Input
              id="topic"
              type="text"
              label="Topic"
              icon={Cloud}
              value={appointmentForm.topic}
              onChange={(e) => handleFormStateChange("topic", e.target.value)}
              validationMessage="Short title about your environmental concern"
            />

            <TextArea
              id="message"
              value={appointmentForm.message}
              onChange={(e) => handleFormStateChange("message", e.target.value)}
              label="Message"
              icon={ChatDots}
            />

            <CustomSelect<string>
              label="Services Offered"
              icon={BookOpen}
              value={appointmentForm.service_id}
              option={serviceOptions}
              onChange={setService}
              validationMessage="Select the relevant service category offered"
            />

            <CustomSelect<string>
              label="Consultants"
              icon={HardHat}
              value={appointmentForm.consultant_id}
              option={consultantOptions}
              onChange={setConsultant}
              validationMessage="Please select from our lists of experts"
              isLoading={isConsultantsLoading}
              disabled={!appointmentForm.service_id}
            />
          </div>
          <div>
            <div className="my-4 ">
              <h1 className="pl-2 font-semibold text-lg mb-2">
                Select Schedule
              </h1>
              <div className="w-fit flex flex-col xl:flex-row gap-4">
                <Calendar
                  value={dateRange}
                  onChange={handleDateChange}
                  disabledDates={[new Date(2024, 0, 1)]}
                />
                <div className="mt-4 xl:mt-2 flex items-center h-fit gap-4">
                  <div className="grid grid-cols-1 items-center">
                    <p>Session Price:</p>
                    <p className="ml-8 mb-4">
                      {servicePrice ? priceTag(servicePrice) : noServiceTag}
                    </p>
                    <p>Total Price:</p>
                    <p className="ml-8 mb-4">
                      {totalPrice ? priceTag(totalPrice) : noServiceTag}
                    </p>
                  </div>
                </div>
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
          <Button
            type="submit"
            width="w-[90%] xl:w-[70%] mx-auto"
            variant="primary"
          >
            Create Appointment
          </Button>
        </div>
      </form>
      <ConfirmAppointmentModal appointmentData={appointmentForm} />
    </section>
  );
};

export default Appointments;
