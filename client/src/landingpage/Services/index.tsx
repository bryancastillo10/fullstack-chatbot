import { SectionContainer, SectionSubHeader } from "../../reusables";
import ServiceCard from "./ServiceCard";
import { servicesoffered } from "../../constants/servicesoffered";
import QuoteBlock from "./QuoteBlock";
import CompanyStatistics from "./CompanyStatistics";

const Services = () => {
  return (
    <section className="mt-[-10px] bg-secondary text-primary">
      <SectionContainer>
        <SectionSubHeader title="Services Offered" caption="Expert guidance for compliance, innovation, and growth"/>
        <div className="grid grid-cols-2 xl:grid-cols-3 md:w-[85%] mx-auto place-items-center">
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
        <div className="mt-10 pb-8 xl:pb-0 flex flex-col xl:flex-row justify-center items-center">
          <QuoteBlock/>
          <hr className="hidden xl:block w-0 h-[350px] border border-solid border-black mr-8"/>
          <div className="flex flex-col gap-4">
            <CompanyStatistics 
              figures="19" 
              upperCaption="years" 
              lowerCaption="of service" 
              description="Delivering sustainable solutions for over a decade"
              />
            <CompanyStatistics 
              figures="500+" 
              upperCaption="projects" 
              lowerCaption="accomplished" 
              description="Over 500 environmental projects completed worldwide"
              />
            <CompanyStatistics 
              figures="24" 
              upperCaption="partner" 
              lowerCaption="organizations" 
              description="Collaborating with international companies to achieve sustainable development"
              />            
          </div>
        </div>
        </SectionContainer>
        
    </section>
  )
}

export default Services;