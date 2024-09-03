import { Link } from "react-router-dom";
import { House,Info,Leaf,Phone, HandPalm } from "phosphor-react";
import NavLogo from "/earth.png";

const NavbarMenuList = [
  {
    id:1,
    name:"Home",
    link:"/",
    icon:House
  },
  {
    id:2,
    name:"About",
    link:"/about",
    icon:Info
  },
  {
    id:3,
    name:"Technologies",
    link:"/tech",
    icon:Leaf
  },
  {
    id:4,
    name:"Services",
    link:"/service",
    icon:HandPalm
  },
  {
    id:5,
    name:"Contact",
    link:"/contact",
    icon:Phone
  }
]



const Navbar = () => {
  return (
    <nav className="p-4 border border-black bg-primary flex justify-between items-center">
        <div className="flex items-center gap-1">
            <img src={NavLogo} alt="EnviroTech-logo" className="size-10" />
            <h1 className="font-semibold font-quicksand">EnviroTech</h1>
        </div>
        <ul className="flex justify-around gap-4">
          {NavbarMenuList.map((nav)=> {
            const Icon = nav.icon;
            return (
              <Link key={nav.id} to={nav.link}>
                <li className="flex items-center gap-0.5">
                  <span className=""><Icon size="28"/></span>
                  {nav.name}
                </li>
              </Link>
            )
          })}
        </ul>
        <div className="flex items-center gap-x-4 gap-y-2">
          <button className="bg-secondary text-primary font-semibold
          px-3 py-1 rounded-2xl hover:bg-secondary/80">
            Login
          </button>
          <h1>Sign Up</h1>
        </div>
    </nav>
  )
}

export default Navbar;
