import WaveDown from "../../assets/WaveDown";
import { SectionContainer,SectionSubHeader } from "../../reusables";
import { Wind, Share } from "phosphor-react";

const Technology = () => {
  return (
    <section className="mt-[-5px]">
        <div className="w-full pb-14">
            <WaveDown/>
        </div>
        <SectionContainer>
            <SectionSubHeader title="Technologies" caption="Get to know the latest trends in the industry"/>
            
            {/* Individual Card */}
            <div className="w-[240px] h-[360px] rounded-2xl border border-secondary  mb-4">
              <div className="px-5 pt-[30px]">
                <img src="https://placehold.co/200x150" alt="sample-card-pic" />
              </div>
              <article className="m-5">
                <div className="flex items-center mb-2 gap-1">
                  <Wind size="20"/>
                  <h1 className="font-semibold">Technology Name</h1>
                </div>
                <div className="bg-secondary px-3 py-1 rounded-3xl w-fit">
                  <h1 className="font-light text-primary text-sm">Envi. Category</h1>
                </div>
                <div className="mt-2 text-xs ">
                  <p className="text-balance line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque ea doloribus error dolor illum nihil, pariatur commodi voluptas atque tenetur quos cupiditate quod possimus 
                    ipsa ipsam voluptatem dolorem iste illo?
                  </p>
                  <p className="mt-3 mb-6 flex items-center gap-2">Read More <span><Share size="14"/></span></p>
                </div>

              </article>
            </div>
        </SectionContainer>
    </section>
  )
}

export default Technology;
