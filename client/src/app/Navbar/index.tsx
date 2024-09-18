import { List } from "@phosphor-icons/react";

const AppNavbar = () => {
  return (
    <nav className="px-2 py-4 flex justify-between items-center sticky top-0 z-20 bg-black text-primary">
        <div className="flex justify-between items-center gap-5">
          <div
          className="p-3.5 cursor-pointer bg-primary text-black rounded-full hover:bg-cream"
          onClick={()=>{}}
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
