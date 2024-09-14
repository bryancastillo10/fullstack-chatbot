import WaveUp from "../../assets/WaveUp";
import WaveDown from "../../assets/WaveDown";
import { SectionContainer,SectionSubHeader } from "../../reusables";
import { envitechlist } from "../../constants/envitechnology";
import TechCard from "./TechCard";

const Technology = () => {
  return (
    <section className="mt-[-5px]">
        <div className="w-full pb-14">
            <WaveDown/>
        </div>
        <SectionContainer>
            <SectionSubHeader title="Technologies" caption="Get to know the latest trends in the industry"/>
            <div id="/techcards" className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-y-12">
              {envitechlist.map((tech)=>{
                const media = tech.enviMedia;
                return (
                  <TechCard 
                    key={tech.id}
                    id={tech.id}
                    name={tech.techname}
                    imgPath={tech.imgPath}
                    enviMedia={media}
                    tag={tech.tag}
                    description={tech.description}
                />
                )
              })}
            </div>
        </SectionContainer>
        <div className="mt-10 h-auto">
          <WaveUp/>
        </div>
    </section>
  )
}

export default Technology;
