import NavLogo from "/earth.png";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


const AuthNavbar = () => {
  return (
    <nav className="p-4 border border-black bg-primary text-black z-20"
    >
       <div className='flex justify-between xl:px-4 items-center gap-10'>
          <Link to="/" className="flex flex-col items-center text-hover-link">
            <ArrowLeft size={20}/> <span className='text-xs ml-2'> Back to Home</span>
          </Link>
          <div className="flex items-center gap-1">
            <img src={NavLogo} alt="EnviroTech-logo" className="size-10" />
            <h1 className="font-semibold font-quicksand">EnviroTech</h1>
          </div>
        </div>
    </nav>
  )
}

export default AuthNavbar
