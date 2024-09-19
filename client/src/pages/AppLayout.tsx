import AppNavbar from "../app/Navbar";
import Sidebar from "../app/Sidebar";
import { Outlet } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../redux/Provider";
import { setSidebarCollapsed } from "../redux/reducer";

const AppLayout = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
     dispatch(setSidebarCollapsed(!isSidebarCollapsed));
  }

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar isSidebarCollapsed={isSidebarCollapsed}  toggleSidebar={toggleSidebar}/>
      <main className={`flex flex-col w-full h-full pb-4 ${isSidebarCollapsed ? 'md:pl-10': 'md:pl-64'}`}>
      <section 
                onClick={toggleSidebar}
                className={`${isSidebarCollapsed ? 'hidden': 'fixed '} inset-0 z-30 bg-teal-main 
                bg-transparent backdrop-blur-[2px]`}/>
        <AppNavbar toggleSidebar={toggleSidebar}/>
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLayout;

