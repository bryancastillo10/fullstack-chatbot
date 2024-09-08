import { Icon } from "@phosphor-icons/react";

interface ServiceCardProps{
    title:string;
    description:string;
    icon: Icon;
}

const ServiceCard = ({icon:Icon, title, description}:ServiceCardProps) => {
  return (
    <div className="w-full h-[200px] xl:h-[240px] flex flex-col justify-center items-center bg-black">
    <Icon className="w-14 h-12 xl:w-20 xl:h-[70px]" weight="fill"/>
    <div className="mt-[10px]  w-[80%] mx-auto xl:w-full">
        <h1 className="text-base lg:text-[20px] text-center font-semibold font-quicksand">
            {title}
        </h1>
        <p className="hidden md:block mt-4 mb-8 xl:max-w-[64%] mx-auto text-center text-xs leading-tight">
            {description}
        </p>
    </div>
  </div>
  )
}

export default ServiceCard;
