import { useGetAppointmentQuery } from "../../api/appointment";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { CreateGetAppointment } from "../../types/appointment";

const AppointmentTable = () => {
  const { data: appointments } = useGetAppointmentQuery();

  const reducedAppointment: CreateGetAppointment[] = 
  Array.isArray(appointments) ? appointments.map((appointment) => ({
      ...appointment,
      consultant: appointment.consultant?.name ?? "",
      service: appointment.service?.name ?? ""       
    }))
  : [];

   const appointmentColumn: GridColDef[] = [
    {
      field: 'createdAt',
      headerName: "Date Appointed",
      flex: 1,
      valueFormatter: ({ value }) => new Date(value as string).toLocaleDateString()
    },
    {
      field: 'consultant',
      headerName: 'Consultant',
      flex: 1,
    },
    {
      field: 'service',
      headerName: 'Service',
      flex: 1,
    },
    {
      field: 'topic',
      headerName: 'Topic',
      flex: 2,
      renderCell: (params: GridRenderCellParams<CreateGetAppointment>) => {
        const topic = params.value as string;
        return topic.length > 10 ? `${topic.slice(0, 10)}...` : topic;
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams<CreateGetAppointment>) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <PencilSimple size={24} style={{ cursor: 'pointer' }} onClick={() => handleEdit(params.row)} />
          <TrashSimple size={24} style={{ cursor: 'pointer' }} onClick={() => handleDelete(params.row)} />
        </div>
      ),
    },
  ];

  const handleEdit = (appointment: CreateGetAppointment) => {
    console.log('Edit appointment', appointment);
  };

  const handleDelete = (appointment: CreateGetAppointment) => {
    console.log('Delete appointment', appointment);
  };


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={reducedAppointment}
        columns={appointmentColumn}
        getRowId={(row) => row.appointment_id}
      />
    </div>
  );
}

export default AppointmentTable;