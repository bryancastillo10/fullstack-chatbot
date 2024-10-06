import { useState, useEffect, useCallback } from "react";
import { RangeKeyDict } from "react-date-range";
import { AppointmentRequest } from "../../types/appointment";
import { useAppSelector } from "../../redux/Provider";
import { useCreateAppointmentMutation } from "../../api/appointment";
import { toast } from "sonner";

const useCreateAppointment = () => {
  const currentUser = useAppSelector((state) => state.global.user);
  const [createAppointment, { isLoading, isError }] =
    useCreateAppointmentMutation();

  const [appointmentForm, setAppointmentForm] = useState<AppointmentRequest>({
    topic: "",
    message: "",
    user_id: "",
    service_id: "",
    consultant_id: "",
    appointmentTime: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  // Input Field
  const handleFormStateChange = useCallback(
    (key: keyof typeof appointmentForm, value: string | never) => {
      setAppointmentForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  useEffect(() => {
    if (currentUser?.id) {
      setAppointmentForm((prev) => ({
        ...prev,
        user_id: currentUser?.id,
      }));
    }
  }, [currentUser]);

  // Service and Consultant ID
  const setService = useCallback(
    (service_id: string | null) => {
      handleFormStateChange("service_id", service_id!);
    },
    [handleFormStateChange]
  );

  const setConsultant = useCallback(
    (consultant_id: string | null) => {
      handleFormStateChange("consultant_id", consultant_id!);
    },
    [handleFormStateChange]
  );

  // Time Slot
  const setTimeSlot = useCallback(
    (timeSlot: string) => {
      handleFormStateChange("appointmentTime", timeSlot);
    },
    [handleFormStateChange]
  );

  const handleDateChange = useCallback((ranges: RangeKeyDict) => {
    const { selectedDate } = ranges;
    setAppointmentForm((prev) => ({
      ...prev,
      startDate: selectedDate.startDate as Date,
      endDate: selectedDate.endDate as Date,
    }));
  }, []);

  const handleSubmit = async () => {
    try {
      await createAppointment(appointmentForm);
      toast.success("Appointment has been booked successfully");
    } catch (error) {
      toast.error("Failed to submit the appointment");
      console.error(error);
    }
  };

  return {
    appointmentForm,
    setService,
    setConsultant,
    setTimeSlot,
    handleFormStateChange,
    handleDateChange,
    handleSubmit,
    isLoading,
    isError,
  };
};

export default useCreateAppointment;
