import { CreateGetAppointment } from "./appointment";

export interface AppointmentModalProps {
  selectedAppointment: CreateGetAppointment | null;
  handleCloseModal: () => void;
}
