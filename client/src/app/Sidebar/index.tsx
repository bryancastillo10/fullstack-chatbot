import SidebarHeader from "./SidebarHeader";
interface SidebarProps{
  isSidebarCollapsed:boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({toggleSidebar,isSidebarCollapsed}:SidebarProps) => {
  console.log(isSidebarCollapsed);
  return (
    <section className={`fixed flex flex-col transition-all duration-500 
    overflow-hidden h-full shadow-md z-40 bg-cream text-black
    ${isSidebarCollapsed ? 'w-0 md:w-16':'w-72 md:w-64'}
    `}>

        <div className="">
          <SidebarHeader isSidebarCollapsed={isSidebarCollapsed} toggle={toggleSidebar}/>
        </div>
        <div className="">
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Appointments</li>
                <li>Consultants</li>
                <li>Settings</li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar;
