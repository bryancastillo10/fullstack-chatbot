import { List } from "@phosphor-icons/react";

interface AppNavbarProps{
  toggleSidebar: () => void;
}

const AppNavbar = ({toggleSidebar}:AppNavbarProps) => {


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
        <span className="hidden md:block">Settings Here</span>
        <hr className="hidden md:block w-0 h-7 border border-solid mx-3"/>
        <p>Avatar</p>
      </div>
    </nav>
  )
}

export default AppNavbar;
