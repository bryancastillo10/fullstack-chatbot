import { useState, ChangeEvent } from "react";
import { Input,Button, TextArea } from "../../reusables";
import { User,Envelope,ChatDots,PencilSimpleLine } from "@phosphor-icons/react";

interface ContactFormProps{
    name:string;
    email:string;
    subject:string;
    message:string;
}

const ContactForm = () => {
    const [contactFormData, setContactFormData] = useState<ContactFormProps>({ 
        name:"",
        email:"",
        subject:"",
        message:""
    });

    const handleContactForm = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id,value} = e.target;
        setContactFormData((prev)=> ({
            ...prev,
            [id]: value
        }))
    };

    return (
    <form className="flex flex-col" onSubmit={()=>{}}>
        <Input 
            onChange={handleContactForm}  
            id="name"
            value={contactFormData.name} 
            label="Name"  
            icon={User} 
        />
        <Input 
            onChange={handleContactForm} 
            id="email" 
            value={contactFormData.email} 
            label="Email" 
            icon={Envelope} 
        />

        <Input 
            onChange={handleContactForm} 
            id="subject" 
            value={contactFormData.subject}
            label="Subject" 
            icon={ChatDots} 
        />

        <TextArea 
            onChange={handleContactForm}
            id="message" 
            value={contactFormData.message}
            label="Message" 
            icon={PencilSimpleLine}
        />

        <Button type="submit" variant="primary">Submit</Button>
    </form>
  )
}

export default ContactForm;
