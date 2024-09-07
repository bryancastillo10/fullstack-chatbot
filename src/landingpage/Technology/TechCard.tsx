import {  useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Share, Icon } from "@phosphor-icons/react";
import { getImageUrl } from "../../config/api";

interface TechCardProps{
    id:number;
    name:string;
    imgPath:string;
    enviMedia: Icon;
    tag:string;
    description:string;
    efficiency:string;
}


const TechCard = ({
    id,
    name,
    imgPath,
    enviMedia:EnviMedia,
    tag,
    description,
}:TechCardProps) => {

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
      const fetchImageUrl = async () => {
        const url = await getImageUrl("project-assets", imgPath);
        setImageUrl(url);
      };
  
      fetchImageUrl();
    }, [imgPath]);
  return (
    <div className="w-[240px] h-[360px] rounded-2xl shadow-md border border-secondary hover:scale-110 duration-500 ease-out">
        <div className="px-5 pt-[30px]">
            <img src={imageUrl} alt="sample-card-pic" />
        </div>
        <article className="m-5">
            <div className="flex items-center mb-2 gap-1">
                <EnviMedia/>
                <h1 className="font-semibold">{name}</h1>
            </div>
            <div className="bg-secondary px-3 py-1 rounded-3xl w-fit">
                <h1 className="font-light text-primary text-sm">{tag}</h1>
            </div>
            <div className="mt-2 text-xs ">
                <p className="text-balance line-clamp-3">
                {description}
                </p>
                <Link to={`/tech/${id}`}>
                    <p className="mt-3 mb-6 flex w-fit items-center gap-2 text-hover-link">Read More                        
                        <span>
                            <Share size="14"/>
                        </span>                  
                    </p>
                </Link>
            </div>
        </article>
    </div>
  )
}

export default TechCard;
