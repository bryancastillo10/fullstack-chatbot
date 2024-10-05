import { Modal } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";

const DeleteAppointmentModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const deleteModal = useAppSelector((state) => state.modal.modalType);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

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
