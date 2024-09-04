import { useState } from "react";
import { Button, Linker } from "../../reusables";
import { NavbarMenuList } from "../../constants/navbarmenu";
import NavLogo from "/earth.png";
import { List, X } from "phosphor-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleNavMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="p-4 border sticky top-0 bg-primary text-black z-20">
      <section className="w-full lg:w-[90%] xl:w-[80%] mx-auto flex justify-between items-center">
        {/* Nav Logo */}
        <div className="flex items-center gap-1">
          <img src={NavLogo} alt="EnviroTech-logo" className="size-10" />
          <h1 className="font-semibold font-quicksand">EnviroTech</h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex justify-around gap-4">
          {NavbarMenuList.map((nav) => {
            const Icon = nav.icon;
            return (
              <Linker key={nav.id} href={nav.link}>
                <div className="group flex items-center gap-0.5">
                  <span className="md:hidden lg:block group-hover:scale-75 duration-1000 ease-out">
                    <Icon size="28" />
                  </span>
                  {nav.name}
                </div>
              </Linker>
            );
          })}
        </div>

        {/* Auth CTA */}
        <div className="hidden md:flex items-center gap-x-4 gap-y-2">
          <Button type="button" variant="primary">Log In</Button>
          <Linker href="#"><h1>Sign Up</h1></Linker>
        </div>

        {/* Mobile NavMenu */}
        <div className="relative md:hidden">
          {/* Menu Toggle Button */}
          <div onClick={toggleNavMenu} className="cursor-pointer">
            <List size="32"/>
          </div>

          {/* Overlay */}
          {showMenu && (
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px]  z-10"
              onClick={toggleNavMenu}/>
          )}

          {/* Mobile Menu */}
          <div className={`fixed top-0 right-0 w-[55%] h-full bg-primary transform 
          ${showMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-20 overflow-y-auto`}>
            <div className="p-4 flex flex-col items-center gap-6">
              <div onClick={toggleNavMenu} className="p-1 hover:scale-90 cursor-pointer self-end">
                <X size="28"/>
              </div>
              {NavbarMenuList.map((nav) => {
                const Icon = nav.icon;
                return (
                  <Linker key={nav.id} href={nav.link}>
                    <div className="group flex items-center gap-4">
                      <span className="group-hover:scale-75 duration-1000 ease-out"><Icon size="28" /></span>
                      {nav.name}
                    </div>
                  </Linker>
                );
              })}
              {/* Add Auth CTA in Mobile View */}
              <div className="mt-4 grid grid-cols-2 items-end gap-8">
                <Button type="button" variant="primary">Log In</Button>
                <Linker href="#"><h1>Sign Up</h1></Linker>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
