import {
  Clock,
  BookOpen,
  Leaf,
  Calendar,
  ChatDots,
  HardHat,
} from "@phosphor-icons/react";
import { Modal, AppointmentRow, BigSpinner } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { AppointmentModalProps } from "../../types/modal";
import { useDeleteAppointmentMutation } from "../../api/appointment";
import { toast } from "sonner";
import useFormatAppointmentDetails from "../../hooks/appointment/useFormatAppointmentDetails";

const DeleteAppointmentModal = ({
  selectedAppointment,
  handleCloseModal,
  onAppointmentChange,
}: AppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const deleteModal = useAppSelector((state) => state.modal.modalType);
  const [deleteAppointment, { isError, isLoading }] =
    useDeleteAppointmentMutation();

  const { selectedService, selectedConsultant, viewDate } =
    useFormatAppointmentDetails({ selectedAppointment });

  const handleSubmit = async () => {
    await deleteAppointment({
      appointment_id: selectedAppointment?.appointment_id || "No id selected",
    });
    onAppointmentChange();
    dispatch(closeModal());
    toast.success("The appointment has been deleted");
  };

  if (isError) {
    toast.error("Failed to delete the selected appointment!");
    return;
  }

  const appointmentDetails = (
    <section className="w-full">
      <div className="flex flex-col">
        <AppointmentRow
          icon={BookOpen}
          label="Service"
          value={selectedService!}
        />
        <AppointmentRow
          icon={HardHat}
          label="Consultant"
          value={selectedConsultant!}
        />
        <AppointmentRow icon={Calendar} label="Date" value={viewDate} />

        <AppointmentRow
          icon={Clock}
          label="Time Slot"
          value={selectedAppointment?.appointmentTime || "NA"}
        />
        <AppointmentRow
          icon={Leaf}
          label="Topic"
          value={selectedAppointment?.topic || "NA"}
        />
        <div className="grid grid-cols-1 mt-4">
          <p className="flex items-center font-semibold gap-x-2">
            <ChatDots /> Message
          </p>
          <p className="mt-1  px-2 py-1 text-sm">
            {selectedAppointment?.message || "NA"}
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <Modal
      openModal={isModalOpen && deleteModal === "deleteAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Delete Appointment"
      actionLabel="Delete"
      secondaryAction={handleCloseModal}
      secondaryActionLabel="Cancel"
      body={
        isLoading ? (
          <div className="flex justify-center">
            <BigSpinner />
          </div>
        ) : (
          appointmentDetails
        )
      }
    />
  );
};

export default DeleteAppointmentModal;
