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
                bg-transparent backdrop-blur-[1px]`}/>
        <AppNavbar isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar}/>
        <section className="my-4 mx-4 xl:mx-10">
          <Outlet/>
        </section>
      </main>
    </div>
  )
}

export default AppLayout;

