import {
  Clock,
  BookOpen,
  Calendar,
  Leaf,
  ChatDots,
  HardHat,
} from "@phosphor-icons/react";
import { BigSpinner, Modal, AppointmentRow } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { toast } from "sonner";
import { AppointmentRequest } from "../../types/appointment";
import {
  useGetServicesQuery,
  useGetConsultantsQuery,
} from "../../api/appointment";
import { formatDate } from "../../utils/formatDate";
interface ConfirmAppointmentModalProps {
  appointmentData: AppointmentRequest;
  isError: boolean;
  isLoading: boolean;
  handleSubmit: () => void;
}

const ConfirmAppointmentModal = ({
  appointmentData,
  handleSubmit,
  isError,
  isLoading,
}: ConfirmAppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const confirmModal = useAppSelector((state) => state.modal.modalType);

  const { data: services } = useGetServicesQuery();
  const { data: consultants } = useGetConsultantsQuery();

  const selectedService = services
    ? services.find(
        (service) => service.service_id === appointmentData.service_id
      )?.name
    : "No services selected";

  const selectedConsultant = consultants
    ? consultants.find(
        (consult) => consult.consultant_id === appointmentData.consultant_id
      )?.name
    : "No consultant selected";

  const viewDate = `${formatDate(
    appointmentData?.startDate.toISOString()
  )} to ${formatDate(appointmentData?.endDate.toISOString())}`;
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const appointmentDetails = (
    <section className="grid grid-cols-2 ">
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
      <AppointmentRow icon={Calendar} label="Selected Date" value={viewDate} />
      <AppointmentRow
        icon={Clock}
        label="Time Slot"
        value={appointmentData?.appointmentTime}
      />
      <AppointmentRow
        icon={Leaf}
        label="Topic"
        value={appointmentData?.topic}
      />

      <div className="grid grid-cols-1 mt-4">
        <p className="flex items-center font-semibold gap-x-2">
          <ChatDots /> Message
        </p>
        <p className="mt-1  px-2 py-1 text-sm">{appointmentData.message}</p>
      </div>
    </section>
  );

  if (isError) {
    toast.error("Failed to create the appointment, check the required fields");
  }

  return (
    <Modal
      openModal={isModalOpen && confirmModal === "confirmAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Verify your appointment"
      actionLabel="Confirm"
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

export default ConfirmAppointmentModal;
