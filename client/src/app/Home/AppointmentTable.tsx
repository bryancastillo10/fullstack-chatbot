import { useGetAppointmentQuery } from "../../api/appointment";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { CreateGetAppointment } from "../../types/appointment";
import { formatDate } from "../../utils/formatDate";

const AppointmentTable = () => {
  const { data: appointments } = useGetAppointmentQuery();

  const reducedAppointment: CreateGetAppointment[] = 
  Array.isArray(appointments) ? appointments.map((appointment) => ({
      ...appointment,
      consultant: appointment.consultant?.name ?? "",
      service: appointment.service?.name ?? "",
      createdAt: formatDate(appointment.createdAt)
    }))
  : [];

   const appointmentColumn: GridColDef[] = [
    {
      field: 'createdAt',
      headerName: "Date Appointed",
      flex: 1,
      minWidth: 110,
    },
    {
      field: 'consultant',
      headerName: 'Consultant',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'service',
      headerName: 'Service',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'topic',
      headerName: 'Topic',
      flex: 1,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams<CreateGetAppointment>) => {
        const topic = params.value as string;
        return topic.length > 10 ? `${topic.slice(0, 10)}...` : topic;
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      minWidth:100,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth:90,
      sortable: false,
      renderCell: (params: GridRenderCellParams<CreateGetAppointment>) => (
        <div style={{ display: 'flex', gap: '10px', marginTop:'12px' }}>
          <PencilSimple size={20} className="cursor-pointer hover:text-secondary" onClick={() => handleEdit(params.row)} />
          <TrashSimple size={20} className="cursor-pointer hover:text-secondary" onClick={() => handleDelete(params.row)} />
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
    <div className="w-full h-fit overflow-auto">
      <h1 className="mb-2">Your Appointments</h1>
      <DataGrid
        rows={reducedAppointment}
        columns={appointmentColumn}
        getRowId={(row) => row.appointment_id}
        classes={{
          root: 'border border-gray-300',         
          columnHeader: 'custom-header',          
          cell: 'custom-cell',                    
          row: 'custom-hover-row',               
        }}
      />
    </div>
  );
}

export default AppointmentTable;