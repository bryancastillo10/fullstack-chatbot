import {
  useGetServicesQuery,
  useGetConsultantsQuery,
} from "../../api/appointment";
import { CreateGetAppointment } from "../../types/appointment";
import { formatDate } from "../../utils/formatDate";

interface useFormatAppointmentProps {
  selectedAppointment: CreateGetAppointment;
}

const useFormatAppointmentDetails = ({
  selectedAppointment,
}: useFormatAppointmentProps) => {
  const { data: services } = useGetServicesQuery();
  const { data: consultants } = useGetConsultantsQuery();

  const selectedService = services
    ? services.find(
        (service) => service.service_id === selectedAppointment?.service_id
      )?.name
    : "No services selected";

  const startDate = selectedAppointment?.startDate
    ? new Date(selectedAppointment.startDate)
    : null;
  const endDate = selectedAppointment?.endDate
    ? new Date(selectedAppointment.endDate)
    : null;

  const viewDate =
    startDate && endDate
      ? `${formatDate(startDate.toISOString())} to ${formatDate(
          endDate.toISOString()
        )}`
      : "No date selected";

  const selectedConsultant = consultants
    ? consultants.find(
        (consult) =>
          consult.consultant_id === selectedAppointment?.consultant_id
      )?.name
    : "No consultant selected";

  return { selectedService, selectedConsultant, viewDate };
};

export default useFormatAppointmentDetails;
