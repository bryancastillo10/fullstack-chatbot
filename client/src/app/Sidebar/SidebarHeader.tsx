import Logo from "/earth.png";
import { X } from "@phosphor-icons/react";

interface SidebarHeaderProps{
    isSidebarCollapsed:boolean;
    toggle:() => void;
}

const SidebarHeader = ({isSidebarCollapsed,toggle}:SidebarHeaderProps) => {
  return (
    <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-2':'px-8'}`}>
      <div className="grid grid-cols-[1fr_2fr] items-center gap-3">
        <div className="relative size-12">
            <img src={Logo} alt="company-logo" className="size-12" />
        </div>
      <h1 className={`${isSidebarCollapsed ? 'hidden':'block'} text-center md:text-left tracking-wide font-semibold`}>EnviroTech Inc.</h1>
      </div>
      <div className="cursor-pointer p-3 duration-500 ease-out
       md:hidden rounded-full  text-secondary bg-primary hover:bg-secondary/80 hover:text-accent hover:scale-90" onClick={toggle}>
        <X className="font-semibold size-4"/>
      </div>
    </div>
  )
}

export default SidebarHeader
