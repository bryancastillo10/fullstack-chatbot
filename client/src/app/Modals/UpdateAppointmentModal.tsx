import { Modal } from "../../reusables";
import { useAppSelector, useAppDispatch } from "../../redux/Provider";
import { closeModal } from "../../redux/modal";
import { AppointmentModalProps } from "../../types/modal";

const UpdateAppointmentModal = ({
  selectedAppointment,
  handleCloseModal,
}: AppointmentModalProps) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const updateModal = useAppSelector((state) => state.modal.modalType);

  console.log(selectedAppointment);

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
      secondaryAction={handleCloseModal}
      secondaryActionLabel="Cancel"
      body={<p>Test Body</p>}
    />
  );
};

export default UpdateAppointmentModal;
