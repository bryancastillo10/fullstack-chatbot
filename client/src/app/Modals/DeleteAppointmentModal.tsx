import {
  Clock,
  BookOpen,
  Leaf,
  ChatDots,
  HardHat,
} from "@phosphor-icons/react";
import { Modal, AppointmentRow } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { AppointmentModalProps } from "../../types/modal";
import {
  useGetServicesQuery,
  useGetConsultantsQuery,
} from "../../api/appointment";
// import { formatDate } from "../../utils/formatDate";

const DeleteAppointmentModal = ({
  selectedAppointment,
  handleCloseModal,
}: AppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const deleteModal = useAppSelector((state) => state.modal.modalType);
  const { data: services } = useGetServicesQuery();
  const { data: consultants } = useGetConsultantsQuery();

  const selectedService = services
    ? services.find(
        (service) => service.service_id === selectedAppointment?.service_id
      )?.name
    : "No services selected";

  // Date range view still needs to be fixed

  const selectedConsultant = consultants
    ? consultants.find(
        (consult) =>
          consult.consultant_id === selectedAppointment?.consultant_id
      )?.name
    : "No consultant selected";

  const handleSubmit = () => {
    dispatch(closeModal());
  };

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
      body={appointmentDetails}
    />
  );
};

export default DeleteAppointmentModal;
