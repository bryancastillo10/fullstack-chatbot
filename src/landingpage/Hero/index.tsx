import { SectionContainer, Button } from "../../reusables";
import WaveUp from "../../assets/WaveUp";

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(/images/HeroMainBg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
  
  return (
    <section className="pt-20 w-full min-h-screen" style={backgroundStyle}>
       <SectionContainer>
            <div className="mt-0 lg:mt-20 text-primary text-center xl:text-left xl:max-w-[50%] flex flex-col gap-10 xl:gap-5">
                <h1 className="font-semibold text-[40px] md:text-[44px] xl:text-[48px] leading-none tracking-wider">
                    We deliver consultation with ease to conserve our natural habitat
                </h1>
                <p className="font-semibold bg-black/40 xl:bg-transparent  rounded-xl p-4 xl:p-1">
                    Learn about the most recent advancements in treatment technologies and acquire 
                    knowledge from our team of environmental engineering specialists promoting 
                    sustainable growth
                </p>
                <div className="text-center xl:text-left">
                    <Button type="button" width="w-full md:w-[80%] lg:w-[40%]" variant="primary">
                        Get Started
                    </Button>
                </div>
            </div>
       </SectionContainer>
       <div className="mt-56">
        <WaveUp/>
        </div>
    </section>
  )
}

export default Hero;
