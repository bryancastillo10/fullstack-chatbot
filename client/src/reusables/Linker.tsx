import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

interface LinkerProps{
    href:string;
    children:ReactNode;
    isScroll?:boolean;
    offset?:number;
}

const Linker = ({href,children, offset=50, isScroll=false}:LinkerProps) => {
  return isScroll ? (
    <ScrollLink smooth={true} offset={offset} to={href}>
        <div className="cursor-pointer text-hover-link">
            {children}
        </div>
    </ScrollLink>
  ) :
  <RouterLink to={href}>
        <div className="cursor-pointer text-hover-link">
            {children}
        </div>
    </RouterLink>
}

export default Linker;

