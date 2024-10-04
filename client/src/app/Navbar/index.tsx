import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChatCircle, Gear, Bell, CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";

// Children Components
import NavIcons from "./NavIcons";
import MessageBox from "./MessageBox";
import NotificationBox from "./NotificationBox";

// State Management
import { useSignOutMutation } from "../../api/auth";
import { useAppDispatch } from "../../redux/Provider";
import { clearCurrentUser } from "../../redux/global";
import { toast } from "sonner";

interface AppNavbarProps{
  isSidebarCollapsed:boolean;
  toggleSidebar: () => void;
}

// AppNavbar Component
const AppNavbar = ({isSidebarCollapsed,toggleSidebar}:AppNavbarProps) => {
  // Hooks
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Handle Logout
  const handleLogout = async () => {
    try{
        await signOut().unwrap();
        dispatch(clearCurrentUser());
        navigate("/");
        toast.success("You have been logged out successfully");
    }
    catch(error){
      console.error('Failed to log out:',error)
    }
};

  // JSX Elements
  const settingsMenu = (
    <>
      <span className="hover:text-accent">
        <Link to="settings">Go to settings</Link>
      </span>
      <hr className="my-1"/>
      <span className="hover:text-accent">
        <Link to="/user">Home</Link>
      </span>
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
      <span className="hover:text-accent cursor-pointer" 
        onClick={handleLogout}>Logout</span>
   </>
  );

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
           {isSidebarCollapsed ? <CaretDoubleRight size={20} />:<CaretDoubleLeft size={20} />}
          </div>
          
      </div>
      
      <div className="flex justify-between items-center pr-4">
          <div className="md:hidden">
            <NavIcons
                MenuContent={avatarMenu}
                pointerPos="top-12 right-3"
                bodyPos="top-[50px] right-[5px]"
                isMenuOpen={openMenuIndex === 4}
                toggle={()=>toggleMenu(4)}
              />
          </div>
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
            MenuContent={<MessageBox/>}
            pointerPos="left-0 top-9"
            bodyPos="right-0 top-10"
            isMenuOpen={openMenuIndex === 2}
            toggle={()=>toggleMenu(2)}
          />

          <NavIcons
            MenuIcon={Bell}
            MenuContent={<NotificationBox/>}
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