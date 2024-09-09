import { ReactNode, useState} from "react";
import { CaretDown } from "@phosphor-icons/react";

interface DropDownProps{
    menuName:string;
    subMenu: ReactNode;
}

const DropDown = ({menuName, subMenu}:DropDownProps) => {

    const [dropdownOpen, setDropDownOpen] = useState<boolean>(false);

    const toggleDropDown = () => {
        setDropDownOpen(!dropdownOpen)
    }
  return (
    <li>
    <button onClick={toggleDropDown} className="flex justify-between items-center w-full text-left">
      {menuName}
        <span
          className={`transform transition-transform duration-300 ${
            dropdownOpen ? '-rotate-180' : 'rotate-0'
          }`}
        >
          <CaretDown size={20} />
        </span>
    </button>
    {dropdownOpen && subMenu}
  </li>
  )
}

export default DropDown;
