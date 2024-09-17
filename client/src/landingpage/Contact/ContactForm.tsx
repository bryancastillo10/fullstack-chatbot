import { Input,Button } from "../../reusables";
import { User,Envelope,ChatDots,PencilSimpleLine } from "@phosphor-icons/react";

const ContactForm = () => {
  return (
    <form className="flex flex-col" onSubmit={()=>{}}>
        <Input onChange={()=>{}} id="name" label="Name" icon={User} />
        <Input onChange={()=>{}} id="email" label="Email" icon={Envelope} />
        <Input onChange={()=>{}} id="subject" label="Subject" icon={ChatDots} />

        {/* TextArea */}
        <div className="relative w-full mt-8 mb-2">
            <textarea
                id="message"
                placeholder=" "
                className={`indent-2 text-lg resize-none h-[270px] peer w-full p-2 caret-light-secondary 
            border-2 rounded-xl outline-none transition bg-primary border-black
            disabled:opacity-50 disabled:cursor-not-allowed `}
            />
            <div className="absolute z-10 top-2 left-4 origin-[0] duration-150 flex items-center gap-2
            transform -translate-y-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
                <PencilSimpleLine size="24"/>
                <label className={` text-lg  font-semibold text-black`}>
                    Message
                </label>
            </div>
        </div>
        <Button type="submit" variant="primary">Submit</Button>
    </form>
  )
}

export default ContactForm;
