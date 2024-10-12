import { Modal } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { CreateGetAppointment } from "../../types/appointment";

interface DeleteAppointmentModalProps {
  selectedAppointment: CreateGetAppointment;
  handleCloseModal: () => void;
}

const DeleteAppointmentModal = ({
  selectedAppointment,
  handleCloseModal,
}: DeleteAppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const deleteModal = useAppSelector((state) => state.modal.modalType);

  console.log(selectedAppointment);

  const handleSubmit = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      openModal={isModalOpen && deleteModal === "deleteAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Delete Appointment"
      actionLabel="Delete"
      secondaryAction={handleCloseModal}
      secondaryActionLabel="Cancel"
      body={<p>Test Body</p>}
    />
  );
};

export default DeleteAppointmentModal;
