import { Icon } from "@phosphor-icons/react";

interface InputProps{
    id:string;
    type?:string;
    label:string;
    disabled?:boolean;
    required?:boolean;
    icon?:Icon;
}


const Input = ({id,type="text",label, disabled,required,icon:Icon}:InputProps) => {
  return (
    <div className="relative my-8">
    <input
        id={id}
        type={type}
        disabled={disabled}
        required={required}
        placeholder=" "
        className={`peer w-full p-2 caret-light-secondary border-2  rounded-xl outline-none transition 
        disabled:opacity-50 disabled:cursor-not-allowed indent-2 bg-primary text-black border-black
        `}
        />
    <div className="absolute z-10 top-2 left-4 origin-[0] duration-150 flex items-center gap-2
    transform -translate-y-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
        {Icon && <Icon size="24"/>}
        <label className={` text-lg  font-semibold text-black`}>
            {label}
        </label>
    </div>
</div>
  )
}

export default Input;
