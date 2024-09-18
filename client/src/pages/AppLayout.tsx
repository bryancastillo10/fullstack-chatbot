import AppNavbar from "../app/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex w-full min-h-screen">
      Sidebar
      <main className="flex flex-col w-full h-full pb-4">
        <AppNavbar/>
       
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLayout

