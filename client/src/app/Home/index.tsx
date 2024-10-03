import { useState } from "react";
import Weather from "./Weather";
import { useAppSelector } from "../../redux/Provider";
import { RangeKeyDict, Range } from 'react-date-range';
import Calendar from '../../reusables/Calendar';
import AppointmentTable from "./AppointmentTable";

const HomePage = () => {
    const currentUser = useAppSelector((state)=>state.global.user);
    
    const initialDateRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    };

    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    
    const handleDateChange = (ranges: RangeKeyDict) => {
        const selection = ranges.selection;
        setDateRange(selection as Range);
      };

  return (
    <section className="grid grid-cols-3">
        <main className="col-span-2">
            <div className="flex items-center gap-4 text-4xl mb-2">
            <h1 className="font-semibold  text-secondary">Welcome!</h1>
            <p>{currentUser?.username} 👋</p>
            </div>
            <div className="w-full grid grid-cols-2">
                <AppointmentTable/>
                <div className="flex flex-col place-content-center">
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
            <div className="h-[100%] bg-teal-500">
                News Feed
            </div>
       </main>
       <aside className="w-fit  flex flex-col h-full">
        <Weather/>
        <div className="bg-slate-500 text-primary h-[8%]">
            Clock
        </div>
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
    </section>
  )
}

export default HomePage;
