import { useState, useEffect } from "react";
import { getImageUrl } from "../../config/api";

const Sponsor = () => {
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
    },[]);


  return (
    <section className="mt-10">
        <h1 className="text-center font-semibold text-2xl">Building a Greener Future with Trusted Partners</h1>
        <div className="flex justify-center items-center gap-28 mt-5 bg-black h-[140px] overflow-x-hidden">
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
