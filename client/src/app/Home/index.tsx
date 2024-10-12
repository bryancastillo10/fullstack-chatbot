import { useState } from "react";
import Weather from "./Weather";
import { useAppSelector } from "../../redux/Provider";
import { useGetAppointmentQuery } from "../../api/appointment";
import { CreateGetAppointment } from "../../types/appointment";
import { formatDate } from "../../utils/formatDate";
import { RangeKeyDict, Range } from "react-date-range";
import Calendar from "../../reusables/Calendar";

import AppointmentTable from "./AppointmentTable";
import UpdateAppointmentModal from "../Modals/UpdateAppointmentModal";
import DeleteAppointmentModal from "../Modals/DeleteAppointmentModal";
import useAppointmentModal from "../../hooks/appointment/useAppointmentModal";

const HomePage = () => {
  const currentUser = useAppSelector((state) => state.global.user);
  const { data: appointments, isError } = useGetAppointmentQuery();

  // Data Row Configuration
  const reducedAppointment: CreateGetAppointment[] = Array.isArray(appointments)
    ? appointments.map((appointment) => ({
        ...appointment,
        consultant: appointment.consultant?.name ?? "",
        service: appointment.service?.name ?? "",
        createdAt: formatDate(appointment.createdAt),
      }))
    : [];

  // appointment modal hook
  const { selectedAppointment, handleUpdate, handleDelete, handleCloseModal } =
    useAppointmentModal({ appointmentData: reducedAppointment });

  // date range
  const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const handleDateChange = (ranges: RangeKeyDict) => {
    const selection = ranges.selection;
    setDateRange(selection as Range);
  };

  return (
    <section className="grid grid-cols-2 xl:grid-cols-[2fr_1fr_0.5fr] gap-x-4 ">
      <main className="col-span-2">
        <div className="flex items-center gap-4 text-4xl mb-2">
          <h1 className="font-semibold  text-secondary">Welcome!</h1>
          <p>{currentUser?.username} 👋</p>
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-x-4 ">
          <AppointmentTable
            appointmentData={reducedAppointment}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            isError={isError}
          />
          <div className="flex flex-col gap-y-2 w-fit place-content-center">
            <Calendar
              value={dateRange}
              onChange={handleDateChange}
              disabledDates={[new Date(2024, 0, 1)]}
            />
            <p>Start Date: {dateRange.startDate?.toLocaleDateString()}</p>
            <p>End Date: {dateRange.endDate?.toLocaleDateString()}</p>
          </div>
        </div>
        <div className="bg-stone-500 h-[10%]">Categories</div>
        <div className="h-[100%] bg-teal-500">News Feed</div>
      </main>
      <aside className="w-fit  flex flex-col h-full">
        <Weather />
        <div className="bg-slate-500 text-primary h-[8%]">Clock</div>
        <div className="bg-lime-600 h-full">
          <div className="bg-sky-500">
            <h1>Search User Input</h1>
          </div>
          <h1>User List</h1>
        </div>
        <div className="bg-rose-500 h-[12%]">
          <h1>Icons and Badges</h1>
        </div>
      </aside>
      <UpdateAppointmentModal />
      <DeleteAppointmentModal
        selectedAppointment={selectedAppointment!}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default HomePage;
