import { useState } from "react";
import { Link } from "react-router-dom";
import { List, ChatCircle, Gear, Bell } from "@phosphor-icons/react";
import NavIcons from "./NavIcons";
interface AppNavbarProps{
  toggleSidebar: () => void;
}

const AppNavbar = ({toggleSidebar}:AppNavbarProps) => {
  const settingsMenu = (
    <>
      Go to Settings
      <hr className=" my-1"/>
      Logout
    </>
  )

  const notifcationMenu = (
    <>
      <span>Notfications Here</span>
    </>
  )

  const avatarMenu = (
    <>
      <span className="hover:text-accent">
        <Link to="settings">Edit your Profile</Link>
      </span>
      <hr className="my-1"/>
      <span className="hover:text-accent">
      <Link to="appointments">Set your Appointment</Link>
      </span>
      <hr className="my-1"/>
      <span>Logout</span>
   </>
  )

  // Toggle Menu State
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
 
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
            isMenuOpen={openMenuIndex === 1}
            toggle={()=>toggleMenu(1)}
          />

          <NavIcons
            MenuIcon={ChatCircle}
            MenuContent={settingsMenu}
            pointerPos="left-0 top-9"
            bodyPos="right-0 top-10"
            isMenuOpen={openMenuIndex === 2}
            toggle={()=>toggleMenu(2)}
          />
     
          
          <NavIcons
            MenuIcon={Bell}
            MenuContent={notifcationMenu}
            pointerPos="left-0 top-9"
            bodyPos="right-2 top-10"
            isMenuOpen={openMenuIndex === 3}
            toggle={()=>toggleMenu(3)}
          />
          <NavIcons
            MenuContent={avatarMenu}
            pointerPos="top-12 right-3"
            bodyPos="top-[50px] right-[5px]"
            isMenuOpen={openMenuIndex === 4}
            toggle={()=>toggleMenu(4)}
          />
        </ul>
      </div>
    </nav>
  )
}

export default AppNavbar;

// Pointer: top-[75px] right-20
// Body: top-20 right-[75px]