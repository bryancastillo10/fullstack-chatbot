import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const AppLayout = () => {
  return (
    <section>
      <div className="w-full">
        <Outlet/>
      </div>
      <Footer/>
    </section>
  )
}

export default AppLayout;
