import { ChangeEvent } from "react";
import { Icon } from "@phosphor-icons/react";
interface TextAreaProps{
    id:string;
    icon: Icon;
    label:string;
    value:string;
    onChange:(e: ChangeEvent<HTMLTextAreaElement>)=>void;
}

const TextArea = ({
    id,
    icon:Icon,
    label,
    value,
    onChange,
}:TextAreaProps) => {
  return (
    <div className="relative w-full mt-8 mb-2">
        <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder=" "
                className={`indent-2 text-lg resize-none h-[270px] peer w-full p-2 caret-secondary 
            rounded-xl outline-none transition bg-primary border border-black focus:border-secondary
            disabled:opacity-50 disabled:cursor-not-allowed `}
            />
            <div className="absolute z-10 top-2 left-4 origin-[0] duration-150 flex items-center gap-2
            transform -translate-y-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
                <Icon size="24"/>
                <label className={` text-lg  font-semibold text-black`}>
                    {label}
                </label>
            </div>
      
    </div>
  )
}

export default TextArea;
