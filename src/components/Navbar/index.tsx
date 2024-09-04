import { Button,Linker } from "../../reusables";
import { NavbarMenuList } from "../../constants/navbarmenu";
import NavLogo from "/earth.png";


const Navbar = () => {
  return (
    <nav className="p-4 border sticky top-0 bg-primary text-black">
      <section className="w-[80%] mx-auto flex justify-between items-center">
        {/* Nav Logo */}
        <div className="flex items-center gap-1">
            <img src={NavLogo} alt="EnviroTech-logo" className="size-10" />
            <h1 className="font-semibold font-quicksand">EnviroTech</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex justify-around gap-4">
          {NavbarMenuList.map((nav)=> {
            const Icon = nav.icon;
            return (
              <Linker key={nav.id} href={nav.link}>
                <div className="group flex items-center gap-0.5">
                  <span className="group-hover:scale-75 duration-1000 ease-out"><Icon size="28"/></span>
                  {nav.name}
                </div>
              </Linker>          
            )
          })}
        </div>

        {/* Auth CTA */}
        <div className="flex items-center gap-x-4 gap-y-2">
        <Button type="button" variant="primary">Log In</Button>
          <Linker href="#"><h1>Sign Up</h1></Linker>
        </div>
      </section>
    </nav>
  )
}

export default Navbar;
