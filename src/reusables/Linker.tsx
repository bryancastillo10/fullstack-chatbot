import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkerProps{
    href:string;
    children:ReactNode;
}

const Linker = ({href,children}:LinkerProps) => {
  return (
    <Link to={href}>
        <div className="text-hover-link">
            {children}
        </div>
    </Link>
  )
}

export default Linker;

