import { useGetAppointmentQuery } from "../../api/appointment";
import useAppointmentModal from "../../hooks/appointment/useAppointmentModal";
import { DataGrid } from "@mui/x-data-grid";

import { CreateGetAppointment } from "../../types/appointment";
import { formatDate } from "../../utils/formatDate";

import getAppointmentColumn from "../../config/getAppointmentColumn";
const AppointmentTable = () => {
  const { data: appointments } = useGetAppointmentQuery();

  // Column Configuration
  const { handleUpdate, handleDelete } = useAppointmentModal();
  const appointmentColumn = getAppointmentColumn(handleUpdate, handleDelete);

  // Data Row Configuration
  const reducedAppointment: CreateGetAppointment[] = Array.isArray(appointments)
    ? appointments.map((appointment) => ({
        ...appointment,
        consultant: appointment.consultant?.name ?? "",
        service: appointment.service?.name ?? "",
        createdAt: formatDate(appointment.createdAt),
      }))
    : [];

  return (
    <div className="w-full h-fit overflow-auto">
      <h1 className="mb-2">Your Appointments</h1>
      <DataGrid
        rows={reducedAppointment}
        columns={appointmentColumn}
        getRowId={(row) => row.appointment_id}
        classes={{
          root: "border border-gray-300",
          columnHeader: "custom-header",
          cell: "custom-cell",
          row: "custom-hover-row",
        }}
      />
    </div>
  );
};

export default AppointmentTable;
