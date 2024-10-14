import { Leaf, Clock } from "@phosphor-icons/react";
import { Modal, Input, CustomSelect } from "../../reusables";
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

  const statusOptions = [
    {
      value: "scheduled",
      label: "Scheduled",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "completed",
      label: "Completed",
    },
  ];

  const updateAppointmentForm = (
    <section className="w-full flex flex-col">
      <Input
        id="topic"
        type="text"
        label="Topic"
        icon={Leaf}
        value={selectedAppointment?.topic}
        onChange={() => {}}
        validationMessage="Short title about your environmental concern"
      />
      <CustomSelect<string>
        label="Appointment Status"
        icon={Clock}
        value={selectedAppointment?.status}
        option={statusOptions}
        onChange={() => {}}
        validationMessage="Select the current status of the appointment"
      />
    </section>
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
