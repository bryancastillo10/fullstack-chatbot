import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

import { User, CalendarCheck, HardHat, Gear } from "@phosphor-icons/react";
interface SidebarProps{
  isSidebarCollapsed:boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({toggleSidebar,isSidebarCollapsed}:SidebarProps) => {
  return (
    <section className={`fixed flex flex-col transition-all duration-500 
    overflow-hidden h-full shadow-md z-40 bg-cream text-black
    ${isSidebarCollapsed ? 'w-0 md:w-16':'w-72 md:w-64'}
    `}>

        <div className="">
          <SidebarHeader isSidebarCollapsed={isSidebarCollapsed} toggle={toggleSidebar}/>
        </div>
        <div className={`flex-grow mt-8 ${isSidebarCollapsed ? "px-0":"px-8"}`}>
          <SidebarMenu id="/user" name="Home" icon={User} isSidebarCollapsed={isSidebarCollapsed}  />
          <SidebarMenu id="/user/appointments" name="Appointments" icon={CalendarCheck} isSidebarCollapsed={isSidebarCollapsed}  />
          <SidebarMenu id="/user/consultants" name="Consultants" icon={HardHat} isSidebarCollapsed={isSidebarCollapsed}  />
          <SidebarMenu id="/user/settings" name="Settings" icon={Gear} isSidebarCollapsed={isSidebarCollapsed}  />
        </div>
    </section>
  )
}

export default Sidebar;
