import { ReactNode } from "react";


interface ButtonProps {
    children:ReactNode;
    variant?:string;
    action?:()=> void;
    type: "submit"|"reset"|"button"|undefined;
    loading?:boolean;
    width?:string;
    layout?:boolean;
}

const Button = ({children,variant,action,loading,type,width = "fit"}:ButtonProps) => {
    const getBtnStyle = (variant:string) => {
        switch(variant){
            case 'primary':
                return "bg-secondary text-primary hover:bg-secondary/80";
            case 'outline':
                return "border-[2px] text-secondary border-secondary  hover:bg-secondary hover:text-primary" 
            default:
                return "bg-sky-600 text-slate-100  hover:bg-teal-main p-0";
        }
    }
    return (
        <button
        onClick={action}
        type={type}
        className={`${width} min-w-fit font-semibold px-3 py-1 rounded-2xl
        duration-500 ease-in-out
        ${getBtnStyle(variant!)}`}>
                {loading ? (
                <div className="flex justify-center items-center gap-0.5">
                    <svg
                        className="animate-spin size-4 mr-2 border-white border-t-outline border-2 rounded-full"
                        viewBox="0 0 24 24"
                         />
                    <span className="font-semibold text-base">Loading . . .</span>
                </div>       

                ) : children}
        </button>
  )
}

export default Button;