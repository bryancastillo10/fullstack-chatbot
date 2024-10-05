import { Modal } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { AppointmentRequest } from "../../types/appointment";

interface ConfirmAppointmentModalProps {
  appointmentData: AppointmentRequest;
}

const ConfirmAppointmentModal = ({
  appointmentData,
}: ConfirmAppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const confirmModal = useAppSelector((state) => state.modal.modalType);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    dispatch(closeModal());
  };

  const appointmentDetails = (
    <div>
      <p>Appointment Shown Here</p>
      <p>{appointmentData.topic}</p>
    </div>
  );

  return (
    <Modal
      openModal={isModalOpen && confirmModal === "confirmAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Verify your appointment"
      actionLabel="Confirm"
      secondaryAction={handleCloseModal}
      secondaryActionLabel="Cancel"
      body={appointmentDetails}
    />
  );
};

export default ConfirmAppointmentModal;
