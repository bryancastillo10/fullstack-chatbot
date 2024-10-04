import { Modal } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";

const UpdateAppointmentModal = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const updateModal = useAppSelector((state) => state.modal.modalType);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      openModal={isModalOpen && updateModal === "updateAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Update Appointment"
      actionLabel="Update"
      body={<p>Test Body</p>}
    />
  );
};

export default UpdateAppointmentModal;
