import { useState,useEffect } from "react";
import { SectionContainer } from "../../reusables";
import { getImageUrl } from "../../config/api";
import ImageGrid from "./ImageGrid";

const About = () => {
  const [aboutImages,setAboutImages] = useState<(string | undefined)[]>([]);
  const bucket = "project-assets";

  const imageFilePaths = [
    "about/MeetingImg.png",
    "about/PlanningImg.png",
    "about/WaterWorksImg.png"
  ];

  

  useEffect(()=> {
      const fetchAboutImages = async () => {
        const url = await Promise.all(imageFilePaths.map((path)=> getImageUrl(bucket,path)));
        setAboutImages(url);
      }

      fetchAboutImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section className="mt-[-5px] bg-secondary text-primary">
        <SectionContainer>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className=" xl:order-1 order-2">
              <h1 className="font-comfortaa font-semibold mt-2 text-center lg:text-left">Our Story</h1>
              <div className="mt-6 xl:mt-10 mb-6">
                <p className="font-semibold tracking-wider text-[20px] xl:text-[25px] text-center lg:text-left">
                  Providing clients with excellent consultation services in environmental compliances & 
                  management for sustainable development
                </p>
              </div>
              <div className="space-y-4 text-center lg:text-justify pt-1 pb-4">
                <p className="indent-2 leading-normal">  Envirotech was first established in 2005 as a small machine parts store that supplied pipes, valves, and materials to industrial 
                companies. In order to assure the quality and effectiveness of the products, the company's creative founders and fellow angel investors grew it into the design of 
                water treatment technologies and employed specialists in this area. As time passes by, the company's peak business division—the consultation division—was established.</p>
                <p className="indent-2 leading-normal">  Today, Envirotech is a leading environmental consulting firm, recognized for its <span className="text-accent">innovative solutions</span> in water and
                 wastewater management, pollution control, and sustainable development. With a multidisciplinary team of engineers, scientists, and industry experts, we provide 
                 comprehensive environmental services that help businesses comply with regulations, reduce their environmental footprint, and <span className="text-accent">achieve sustainability goals</span>.</p>
              </div>
            </div>
            <ImageGrid images={aboutImages}/>
          </div>       
        </SectionContainer>
    </section>
  )
}

export default About;
