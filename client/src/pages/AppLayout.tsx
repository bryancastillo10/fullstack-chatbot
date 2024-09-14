import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div className="flex w-full min-h-screen">
      Sidebar
      <main>
        Navbar
        <Outlet/>
      </main>
    </div>
  )
}

export default AppLayout

