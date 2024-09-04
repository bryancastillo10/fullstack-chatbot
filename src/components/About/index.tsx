import { useState,useEffect } from "react";
import { SectionContainer } from "../../reusables";
import { getImageUrl } from "../../config/api";

const About = () => {
  
  const bucket = "project-assets";

  const imageFilePaths = [
    "about/MeetingImg.png",
    "about/PlanningImg.png",
    "about/WaterWorksImg.png"
  ];

  const [aboutImages,setAboutImages] = useState<(string | undefined)[]>([]);

  useEffect(()=> {
      const fetchAboutImages = async () => {
        const url = await Promise.all(imageFilePaths.map((path)=> getImageUrl(bucket,path)));
        setAboutImages(url);
      }

      fetchAboutImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section className="mt-[-5px]  bg-secondary text-primary">
        <SectionContainer>
        
        <h1 className="py-10">Hello World</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, exercitationem?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, laboriosam.</p>
        <div className="flex items-center gap-4">
          {aboutImages.map((img,index)=>(
            <img key={index} src={img} alt={`${img}-path`}/>
          ))}
        </div>
        </SectionContainer>
    </section>
  )
}

export default About;
