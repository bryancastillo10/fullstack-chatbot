import Select from "react-select";
import selectStyles from "../config/selectStyle";
import { Icon } from "@phosphor-icons/react";

interface CustomSelectProps<T> {
  icon: Icon;
  label: string;
  validationMessage: string;
  value: T | null;
  option: { value: T; label: string }[];
  onChange: (value: T | null) => void;
  isLoading?:boolean;
  disabled?:boolean;
}


const CustomSelect = <T,>({
  icon:Icon,
  label,
  validationMessage,
  value,
  option,
  onChange,
  isLoading = false,
  disabled = false,
}:CustomSelectProps<T>) => {

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
            options={option}
            value={option.find(opt => opt.value === value) || null}
            onChange={(newValue) => onChange(newValue ? (newValue as { value: T }).value : null)}
            styles={selectStyles}
            isLoading={isLoading}
            isDisabled={disabled || isLoading}
        />
        <div className="mt-1">
          <p className="indent-2 text-xs">{validationMessage}</p>
        </div>
    </div>
  )
}

export default CustomSelect;
