import { useAppDispatch } from "../../redux/Provider";
import { openModal } from "../../redux/modal";

const useAppointmentModal = () => {
  const dispatch = useAppDispatch();
  const handleUpdate = () => {
    dispatch(openModal("updateAppointment"));
  };

  const handleDelete = () => {
    dispatch(openModal("deleteAppointment"));
  };

  return { handleUpdate, handleDelete };
};

export default useAppointmentModal;
