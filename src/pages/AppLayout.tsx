import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AppLayout = () => {
  return (
    <section>
      <Navbar/>
      <div className="p-4">
        <Outlet/>
      </div>
      <Footer/>
    </section>
  )
}

export default AppLayout;
