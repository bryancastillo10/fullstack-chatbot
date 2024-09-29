import { useState, useEffect } from "react";
import { getImageUrl } from "../../api/imageUrl";

interface SponsorProps{
    header:string;
    backgroundClass:string;
}

const Sponsor = ({header,backgroundClass}:SponsorProps) => {
    const [companyLogo, setCompanyLogo] = useState<(string|undefined)[]>([]);

    const imageFilePaths = [
        "sponsor-logo/NVDIA.svg",
        "sponsor-logo/BMW.svg",
        "sponsor-logo/Tesla.svg",
        "sponsor-logo/Shell.svg",
        "sponsor-logo/Bitcoin.svg",
        "sponsor-logo/AmericanAirlines.svg",
        "sponsor-logo/GoogleAndroid.svg",
    ]

    useEffect(()=>{
        const fetchImages = async () => {
            const url = await Promise.all(imageFilePaths.map((path)=> getImageUrl("project-assets",path)));
            setCompanyLogo(url);
        }

        fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


  return (
    <section className="mt-10">
        <h1 className="w-[90%] mx-auto md:w-full text-center font-semibold text-xl lg:text-2xl">
            {header}
        </h1>
        <div className={`flex justify-center items-center gap-28 mt-5 h-[140px] overflow-x-hidden ${backgroundClass}`}>
            {companyLogo.map((logo,index)=> (
                <img key={index} 
                 src={logo}
                 alt="sponsor-logo" />
            ))}
        </div>
    </section>
  )
}

export default Sponsor;
