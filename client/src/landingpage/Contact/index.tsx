import WaveDown from "../../assets/WaveDown";
import { SectionContainer, SectionSubHeader } from "../../reusables";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className="mt-[-5px]">
        <div className="w-full pb-14">
            <WaveDown/>
        </div>
        <SectionContainer>
            <SectionSubHeader title="Contact Us" caption="We're here to help with your environmental challenges. Reach out today!"/>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 my-8">
              <ContactForm/>
              <ContactInfo/>
            </div>
        </SectionContainer>

    </section>
  )
}

export default Contact;
