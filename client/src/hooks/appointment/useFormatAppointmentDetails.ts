import {
  useGetServicesQuery,
  useGetConsultantsQuery,
} from "../../api/appointment";
import { AppointmentRequest } from "../../types/appointment";
import { formatDate } from "../../utils/formatDate";

interface useFormatAppointmentProps {
  appointmentData: AppointmentRequest;
}

const useFormatAppointmentDetails = ({
  appointmentData,
}: useFormatAppointmentProps) => {
  const { data: services } = useGetServicesQuery();
  const { data: consultants } = useGetConsultantsQuery();

  const selectedService = services
    ? services.find(
        (service) => service.service_id === appointmentData.service_id
      )?.name
    : "No services selected";

  const selectedConsultant = consultants
    ? consultants.find(
        (consult) => consult.consultant_id === appointmentData.consultant_id
      )?.name
    : "No consultant selected";

  const viewDate = `${formatDate(
    appointmentData?.startDate.toISOString()
  )} to ${formatDate(appointmentData?.endDate.toISOString())}`;

  return { selectedService, selectedConsultant, viewDate };
};

export default useFormatAppointmentDetails;
