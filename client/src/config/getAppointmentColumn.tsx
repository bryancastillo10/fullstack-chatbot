import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { CreateGetAppointment } from "../types/appointment";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

const getAppointmentColumn = (
  handleUpdate: () => void,
  handleDelete: () => void
): GridColDef[] => [
  {
    field: "createdAt",
    headerName: "Date Appointed",
    flex: 1,
    minWidth: 110,
  },
  {
    field: "consultant",
    headerName: "Consultant",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "service",
    headerName: "Service",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "topic",
    headerName: "Topic",
    flex: 1,
    minWidth: 100,
    renderCell: (params: GridRenderCellParams<CreateGetAppointment>) => {
      const topic = params.value as string;
      return topic.length > 10 ? `${topic.slice(0, 10)}...` : topic;
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    minWidth: 90,
    sortable: false,
    renderCell: () => (
      <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
        <PencilSimple
          size={18}
          weight="fill"
          className="cursor-pointer hover:text-secondary"
          onClick={() => handleUpdate()}
        />
        <TrashSimple
          size={18}
          weight="fill"
          className="cursor-pointer hover:text-secondary"
          onClick={() => handleDelete()}
        />
      </div>
    ),
  },
];

export default getAppointmentColumn;
