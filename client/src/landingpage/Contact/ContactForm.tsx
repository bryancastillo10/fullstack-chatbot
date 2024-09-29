import { Input,Button, TextArea } from "../../reusables";
import { User,Envelope,ChatDots,PencilSimpleLine } from "@phosphor-icons/react";

const ContactForm = () => {
  return (
    <form className="flex flex-col" onSubmit={()=>{}}>
        <Input 
            onChange={()=>{}}  
            id="name" 
            label="Name"  
            icon={User} 
        />
        <Input 
            onChange={()=>{}} 
            id="email" 
            label="Email" 
            icon={Envelope} 
        />

        <Input 
            onChange={()=>{}} 
            id="subject" 
            label="Subject" 
            icon={ChatDots} 
        />

        <TextArea 
            onChange={()=>{}}
            id="message" 
            value=""
            label="Message" 
            icon={PencilSimpleLine}
        />

        <Button type="submit" variant="primary">Submit</Button>
    </form>
  )
}

export default ContactForm;
