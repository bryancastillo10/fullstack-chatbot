import WaveDown from "../../assets/WaveDown";
import { SectionContainer, SectionSubHeader } from "../../reusables";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="mt-[-5px]">
        <div className="w-full pb-14">
            <WaveDown/>
        </div>
        <SectionContainer>
            <SectionSubHeader title="Contact Us" caption="We're here to help with your environmental challenges. Reach out today!"/>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-8">
              <ContactForm/>
              <div className="w-[80%] h-[550px] bg-black"/>
            </div>
        </SectionContainer>

    </section>
  )
}

export default Contact;
