import Weather from "./Weather";
import { useAppSelector } from "../../redux/Provider";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const HomePage = () => {
    const currentUser = useAppSelector((state)=>state.global.user);
  return (
    <section className="grid grid-cols-3">
        <main className="col-span-2 h-screen">
            <div className="flex items-center gap-4 text-4xl mb-2">
            <h1 className="font-semibold  text-secondary">Welcome!</h1>
            <p>{currentUser?.username} 👋</p>
            </div>
            <div className="w-full h-[50%] grid grid-cols-2">
                <div className="bg-blue-500">Table Here</div>
                <div className="bg-indigo-500 flex place-content-center">
                    <Calendar 
                    className="calendar"
                    tileClassName="calendar-tiles"
                    tileContent=""
                    value={new Date()}
                    />
                </div>
            </div>
            <div className="bg-stone-500 h-[10%]">Categories</div>
            <div className="h-[100%] bg-teal-500">
                News Feed
            </div>
       </main>
       <aside className="flex flex-col h-full">
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
