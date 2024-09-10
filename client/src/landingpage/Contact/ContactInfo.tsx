import Logo from "/earth.png";
import Map from "/images/MNLMap.png";
import { MapPin,Clock, PaperPlaneTilt, Phone, UsersThree, Icon} from "@phosphor-icons/react";
import { FacebookLogo, XLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Button } from "../../reusables";

interface ContactInfoHeaderProps{
    icon:Icon;
    text:string
}

interface EmailAddressesProps{
    email:string;
    section:string;
}

const ContactInfoHeader = ({icon:Icon, text}:ContactInfoHeaderProps) => {
    return (
        <div className="flex gap-2 items-center">
            <Icon className="size-8"/>
            <h1 className="font-light font-comfortaa text-sm">{text}</h1>
        </div>
    )
}


const EmailAddresses = ({email,section}:EmailAddressesProps) => {
    return (
        <div className="flex flex-col items-center my-2">
            <h1 className="font-semibold text-sm ">{email}</h1>
            <p className="text-[11px] font-light">{section}</p>
        </div>
    )
}

const ContactInfo = () => {
  return (
    <section className="">
        {/* Upper Section */}
        <article className="grid grid-cols-1 xl:grid-cols-[2fr_1fr]  border border-black border-b-0 shadow-md">
            {/* Map */}
            <div className="mb-4 xl:mb-0 h-full">
                <img className="object-cover" src={Map} alt="mnl-map" />
            </div>
            <div className="grid grid-cols-1 p-3 xl:p-0 justify-between items-center">
                {/* Contact Info */}
                <div className="flex flex-col justify-center items-center gap-2">
                    <img src={Logo} alt="EnviroTech-logo" className="size-10" />
                    <h1 className="font-semibold font-quicksand">EnviroTech</h1>
                </div>
                <div className="grid grid-cols-2 xl:mr-4">
                    <MapPin className="size-[30px] xl:size-[50px] place-self-center"/>
                    <p className="text-xs text-balance ">1230 Taft Avenue, Ermita, Manila, 1000, Metro Manila, Philippines</p>
                </div>        
                <div className="grid grid-cols-2 xl:mr-4">
                    <Clock className="size-[30px] xl:size-[50px] place-self-center"/>
                    <p className="text-xs text-left text-balance">Mon to Fri 9am to 6pm (GMT +8)</p>
                </div>  
            </div>
        </article>
        {/* Lower Section */}
        <article className="grid grid-cols-1 xl:grid-cols-[1fr_1fr]">
            <div className="grid grid-cols-1 px-12 xl:px-4 mx-auto lg:mx-0 border border-black shadow-md">
                {/* Lower Left Section */}
                <div className="text-center xl:text-left my-4">
                    <h1 className="text-base w-fit leading-none">Located near Rizal Park, just a 5-minute walk from the Manila Ocean Park</h1>
                </div>
                <div>
                    <div className="text-center xl:text-left space-y-2 my-4">
                        <p className="text-xs text-balance">Curious about the latest technologies for the environment?</p>
                        <Button type="button" variant="primary">Read More</Button>
                    </div>
                    <div className="text-center xl:text-left space-y-2 my-4">
                        <p className="text-xs text-balance">Need a consultation on your environmental concerns?</p>
                        <Button type="button" variant="primary">Get Started</Button>
                        <p className="text-xs text-justify leading-none max-w-[80%] w-fit pt-4">Book a free consultation with our experts today</p>
                    </div>
                </div>
            </div>
            {/* Lower Right Section */}
            <div className="xl:w-max bg-black text-primary p-4 xl:p-1">
                <div className="p-2">
                    <ContactInfoHeader icon={PaperPlaneTilt} text="E-mail addresses"/>
                    <div className="grid grid-cols-2 gap-x-4 mr-2">
                        <EmailAddresses email="info@envirotech.com" section="General Information"/>
                        <EmailAddresses email="support@envirotech.com" section="Technical Support"/>
                        <EmailAddresses email="sales@envirotech.com" section="Marketing and Sales Dept."/>
                        <EmailAddresses email="careers@envirotech.com" section="Human Resources Dept."/>
                    </div>
                </div>
                <div className="p-2 grid grid-cols-1 space-y-2">
                    <ContactInfoHeader icon={Phone} text="Contact Numbers"/>
                    <div className="ml-2 flex items-center gap-2 place-content-center xl:place-content-start">
                        <p className="text-xs font-light">Mobile</p>
                        <p className="font-semibold">+63 (2) 1234-5678 </p>
                    </div>
                    <div className="ml-2 flex items-center gap-2 place-content-center xl:place-content-start">
                        <p className="text-xs font-light">Landline</p>
                        <p className="font-semibold">+63 (2) 8765-4321 </p>
                    </div>
                </div>
                <div className="p-2 my-4">
                    <ContactInfoHeader icon={UsersThree} text="Social Media Links"/>
                    <div className="grid grid-cols-4 w-fit gap-3 mx-auto xl:mx-0">
                        <FacebookLogo className="size-[25px] hover:rotate-45 duration-500"/>
                        <XLogo className="size-[25px] hover:rotate-45 duration-500"/>
                        <InstagramLogo className="size-[25px] hover:rotate-45 duration-500"/>
                        <LinkedinLogo className="size-[25px] hover:rotate-45 duration-500"/>
                    </div>
                </div>
            </div>
        </article>
    </section>
  )
}

export default ContactInfo;
