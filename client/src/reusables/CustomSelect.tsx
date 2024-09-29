import Select from "react-select";
import selectStyles from "../config/selectStyle";
import { Icon } from "@phosphor-icons/react";

interface CustomSelectProps{
  icon: Icon;
  label:string;
  validationMessage:string;
  value:string;
  option:{value:string; label:string}[];
  onChange:()=>void;
}

const CustomSelect = ({
  icon:Icon,
  label,
  validationMessage,
  value,
  option,
  onChange
}:CustomSelectProps) => {

    return (
    <div className="relative my-8">
          <div className="flex items-center gap-2 pl-2 mb-1"> 
            <Icon size="24"/>
            <label className={`text-lg font-semibold text-black`}>
                {label}
            </label> 
        </div>
        <Select
            className={`peer w-full caret-secondary rounded-xl outline-none transition 
              disabled:opacity-50 disabled:cursor-not-allowed indent-2 bg-primary text-black 
              `}
            placeholder=" "
            value={value}
            onChange={onChange}
            options={option}
            styles={selectStyles}
        />
        <div className="mt-1">
          <p className="indent-2 text-xs">{validationMessage}</p>
        </div>
    </div>
  )
}

export default CustomSelect;
