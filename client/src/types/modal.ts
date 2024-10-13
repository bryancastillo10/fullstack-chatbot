import { CreateGetAppointment } from "./appointment";

export interface AppointmentModalProps {
  selectedAppointment: CreateGetAppointment;
  handleCloseModal: () => void;
  onAppointmentChange: () => void;
}
