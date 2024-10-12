import { useState } from "react";
import { useAppDispatch } from "../../redux/Provider";
import { openModal, closeModal } from "../../redux/modal";
import { CreateGetAppointment } from "../../types/appointment";

interface UseAppointmentProps {
  appointmentData: CreateGetAppointment[];
}

const useAppointmentModal = ({ appointmentData }: UseAppointmentProps) => {
  const dispatch = useAppDispatch();
  const [selectedAppointment, setSelectedAppointment] =
    useState<CreateGetAppointment | null>(null);

  const handleUpdate = (selectedId: string) => {
    dispatch(openModal("updateAppointment"));
    const appoinmentToUpdate = appointmentData.find(
      (appoint) => appoint.appointment_id === selectedId
    );
    setSelectedAppointment(appoinmentToUpdate!);
  };

  const handleDelete = (selectedId: string) => {
    dispatch(openModal("deleteAppointment"));
    const appointmentToDelete = appointmentData.find(
      (appoint) => appoint.appointment_id === selectedId
    );
    setSelectedAppointment(appointmentToDelete!);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setSelectedAppointment(null);
  };

  return {
    handleUpdate,
    handleDelete,
    handleCloseModal,
    selectedAppointment,
  };
};

export default useAppointmentModal;
