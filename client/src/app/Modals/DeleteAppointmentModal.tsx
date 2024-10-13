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
import {
  useGetServicesQuery,
  useGetConsultantsQuery,
  useDeleteAppointmentMutation,
} from "../../api/appointment";
import { formatDate } from "../../utils/formatDate";
import { toast } from "sonner";

const DeleteAppointmentModal = ({
  selectedAppointment,
  handleCloseModal,
  onAppointmentChange,
}: AppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const deleteModal = useAppSelector((state) => state.modal.modalType);
  const { data: services } = useGetServicesQuery();
  const { data: consultants } = useGetConsultantsQuery();
  const [deleteAppointment, { isError, isLoading }] =
    useDeleteAppointmentMutation();

  const selectedService = services
    ? services.find(
        (service) => service.service_id === selectedAppointment?.service_id
      )?.name
    : "No services selected";

  const startDate = selectedAppointment?.startDate
    ? new Date(selectedAppointment.startDate)
    : null;
  const endDate = selectedAppointment?.endDate
    ? new Date(selectedAppointment.endDate)
    : null;

  const viewDate =
    startDate && endDate
      ? `${formatDate(startDate.toISOString())} to ${formatDate(
          endDate.toISOString()
        )}`
      : "No date selected";

  const selectedConsultant = consultants
    ? consultants.find(
        (consult) =>
          consult.consultant_id === selectedAppointment?.consultant_id
      )?.name
    : "No consultant selected";

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
