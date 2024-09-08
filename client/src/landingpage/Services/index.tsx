import { SectionContainer, SectionSubHeader } from "../../reusables";
import ServiceCard from "./ServiceCard";
import { servicesoffered } from "../../constants/servicesoffered";

const Services = () => {
  return (
    <section className="mt-[-10px] bg-secondary text-primary">
      <SectionContainer>
        <SectionSubHeader title="Services Offered" caption="Expert guidance for compliance, innovation, and growth"/>
        <div className="grid grid-cols-2 xl:grid-cols-3 place-items-center">
         {servicesoffered.map((serve)=>{
          const icon = serve.icon;
          return (
            <ServiceCard
            key ={serve.id}
            title={serve.title}
            description={serve.description}
            icon={icon}
            />
          )
         })}
        </div>
      </SectionContainer>
    </section>
  )
}

export default Services;
