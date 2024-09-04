import { SectionContainer, Button } from "../../reusables";

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: `url(/images/HeroMainBg.png)`,
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
  
  return (
    <section className="pt-24 w-full min-h-screen" style={backgroundStyle}>
       <SectionContainer>
            <div className="mt-10 xl:mt-24 text-primary text-center xl:text-left xl:max-w-[40%] flex flex-col gap-5">
                <h1 className="font-semibold text-[48px] leading-none tracking-wider">
                    We deliver consultation with ease to conserve our natural habitat
                </h1>
                <p className="font-semibold">
                    Learn about the most recent advancements in treatment technologies and acquire 
                    knowledge from our team of environmental engineering specialists promoting 
                    sustainable growth
                </p>
                <Button type="button" width="w-full xl:w-[40%]" variant="primary">Get Started</Button>
            </div>
       </SectionContainer>
    </section>
  )
}

export default Hero;
