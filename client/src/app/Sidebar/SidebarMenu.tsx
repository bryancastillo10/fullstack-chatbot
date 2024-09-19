import { Icon } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";


interface SidebarMenuProps{
    id:string;
    icon: Icon;
    name:string;
    isSidebarCollapsed:boolean;
}


const SidebarMenu = ({id,icon:Icon, name, isSidebarCollapsed}:SidebarMenuProps) => {
    const location = useLocation();

    const isActive = location.pathname === id || (location.pathname === "/" && id === "/home");
  return (
    <Link to={id}>
        <div className={`cursor-pointe p-4 flex items-center gap-3 
        rounded-3xl hover:rounded-xl duration-500 ease-in-out hover:bg-secondary hover:text-cream
        ${isSidebarCollapsed ? "justify-center":"justify-start"}
        ${isActive ? "bg-secondary text-primary":""}
        `}>
            <Icon className="size-6"/>
            <span className={`font-semibold text-lg tracking-wide 
            ${isSidebarCollapsed ? "hidden":"block"}
            `}          
            >{name}</span>
        </div>
    </Link>
  )
}

export default SidebarMenu;
