import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

interface LinkerProps{
    href:string;
    children:ReactNode;
    isScroll?:boolean;
}

const Linker = ({href,children, isScroll=false}:LinkerProps) => {
  return isScroll ? (
    <ScrollLink to={href}>
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

