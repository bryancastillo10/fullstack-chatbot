import { SectionContainer, SectionSubHeader } from "../../reusables";
import { HardHat } from "@phosphor-icons/react";

const Services = () => {
  return (
    <section className="mt-[-10px] bg-secondary text-primary">
      <SectionContainer>
        <SectionSubHeader title="Services Offered" caption="Expert guidance for compliance, innovation, and growth"/>
        <div className="">
          <div className="w-[330px] h-[240px] flex flex-col justify-center items-center bg-black">
            <HardHat width={80} height={70} weight="fill"/>
            <h1 className="mt-[10px] text-[20px]  font-semibold font-quicksand">Environmental Planning</h1>
            <p className="mt-4 mb-8 max-w-[64%] text-center text-xs leading-tight">Navigate regulations and design sustainable projects with our 
              expert environmental planning services.
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Services;
