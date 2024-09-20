import { FC, ReactNode,useState } from "react";
import { Icon } from "@phosphor-icons/react";

type MessageBox = FC<{content:string}>;

interface NavIconProps{
    MenuIcon: Icon;
    MenuContent:ReactNode | MessageBox;
    pointerPos?:string;
    bodyPos:string;
}

const NavIcons = ({
    pointerPos="left-1 top-9",
    bodyPos,
    MenuIcon, 
    MenuContent
}:NavIconProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenuOpen = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <li className="relative text-primary">
        <MenuIcon onClick={toggleMenuOpen} 
        className={`cursor-pointer ${isMenuOpen ? "scale-90 text-black":"scale-100"}
        hover:text-cream duration-500 ease-out `}size={30} weight="fill"/>
            {/* Menu Pointer */}
            <div className={`absolute ${pointerPos} ${isMenuOpen ? "block":"hidden"} size-4 bg-black
            transform rotate-45 rounded`}/>

            {/* Menu Body */}
            <div className={`absolute p-2 w-[200px] rounded bg-black
            ${bodyPos} ${isMenuOpen ? "block":"hidden"}
            `}>
                {typeof MenuContent === 'function' 
                    ? MenuContent({content:'test'}): MenuContent}
            </div>
    </li>
  )
}

export default NavIcons;
