import { List, ChatCircle, Gear, Bell } from "@phosphor-icons/react";
import { useAppSelector } from "../../redux/Provider";
import NavIcons from "./NavIcons";
interface AppNavbarProps{
  toggleSidebar: () => void;
}

const AppNavbar = ({toggleSidebar}:AppNavbarProps) => {
  const currentUser = useAppSelector((state)=> state.global.user);
  const BASE_API = import.meta.env.VITE_REACT_BASE_API_URL;

  const settingsMenu = (
    <>
     Go to Settings
     <hr className=" my-1"/>
     Logout
    </>
  )

  
  return (
    <nav className="flex justify-between items-center px-12 py-4 sticky top-0 z-20 bg-secondary text-primary">
        <div className="flex justify-between items-center gap-5">
          <div
          className="p-3.5 cursor-pointer bg-primary text-black rounded-full hover:bg-cream"
          onClick={toggleSidebar}
          >            
           <List className="size-5" /> 
          </div>
          
      </div>
      <div className="flex justify-between items-center pr-4">
        <ul className="hidden md:flex items-center gap-5">
          <NavIcons
            MenuIcon={Gear}
            MenuContent={settingsMenu}
            bodyPos="-left-[10px] top-10"
          />

          

          <li className=""><ChatCircle size={30} weight="fill"/></li>
          <li className=""><Bell size={30} weight="fill"/></li>
        </ul>
        <div className="ml-5">
          <img src={`${BASE_API}${currentUser?.profilePicture}`} className="size-10" alt="avatar-pic" />
        </div>
      </div>
    </nav>
  )
}

export default AppNavbar;
