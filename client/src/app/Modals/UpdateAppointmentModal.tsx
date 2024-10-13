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

  const handleSubmit = () => {
    dispatch(closeModal());
  };

  const updateAppointmentForm = (
    <div className="grid grid-cols-2 items-center">
      {selectedAppointment?.topic}
    </div>
  );
  return (
    <Modal
      openModal={isModalOpen && updateModal === "updateAppointment"}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Update Appointment"
      actionLabel="Update"
      secondaryAction={handleCloseModal}
      secondaryActionLabel="Cancel"
      body={updateAppointmentForm}
    />
  );
};

export default UpdateAppointmentModal;
