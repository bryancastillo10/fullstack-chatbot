import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { List, X, ArrowLeft } from '@phosphor-icons/react';
import ReactMarkdown from 'react-markdown';


import { envitechlist } from '../constants/envitechnology';
import { getImageUrl } from '../config/api';
import DropDown from '../reusables/DropDown';
import { AirMenu, WaterMenu, SolidWasteMenu } from '../reusables/ui-elements/DropDownSubMenu';

import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import NavLogo from "/earth.png";
import style from '../config/markdown-styles.module.css';

type TechDataType = {
  name:string;
  tag:string;
  efficiency:string;
}

const TechPage = () => {
  const {id} = useParams<{id:string}>();

  const [techData, setTechData] = useState<TechDataType|null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const renderMarkdown = async (mdPath:string) =>{
    try{
      const res = await fetch(mdPath);
      if(!res.ok){
        throw new Error(`HTTP Request Failed: ${res.status}`);
      }
      const markdownText = await res.text();
      setMarkdownContent(markdownText);
    }
    catch(error){
      console.error("Failed to fetch the envi tech information in markdown format", error);
      setMarkdownContent("Failed to fetch the markdown conent. Please reload the page.")
    }
  };



  useEffect(()=>{
    const tech = envitechlist.find((tech) => tech.id === Number(id));
    
    const fetchImageUrl = async () => {
      const url = await getImageUrl("project-assets",tech?.imgPath!);
      setImageUrl(url);
    }

    if(tech){
      renderMarkdown(tech.mdPath);
      setTechData(
        {
          name: tech.techname!,
          tag: tech.tag!,
          efficiency:tech.efficiency!
        }
      )
      fetchImageUrl();
    }
  },[id]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }


  return (
    <div className="flex flex-col min-h-screen">

      <nav className="border-black sticky top-0 border bg-primary p-4 flex justify-between items-center">
        <div className='flex items-center gap-10'>
          <Link to="/" className="flex flex-col items-center text-hover-link">
            <ArrowLeft size={20}/> <span className='text-xs ml-2'> Back to Home</span>
          </Link>
          <div className="flex items-center gap-1">
            <img src={NavLogo} alt="EnviroTech-logo" className="size-10" />
            <h1 className="font-semibold font-quicksand">EnviroTech</h1>
          </div>
        </div>
        <div onClick={toggleMenu} className="p-1 cursor-pointer mr-2 xl:mr-4">
          {openMenu ? <X size={32}/> : <List size={32} />}
        </div>
      </nav>

      <main className="flex flex-grow ">
        <div className="p-8 m-2 border w-[95%] xl:w-[80%] flex flex-col items-center mx-auto border-black">
          <div className="flex justify-evenly gap-10 items-center">
            <div className="">
              <h1 className='font-semibold text-2xl'>{techData?.name}</h1>
              <p className='my-4 bg-black text-primary px-3 py-1 w-fit rounded-2xl shadow-md text-center'>{techData?.tag}</p>
              <p>Tech. Efficiency: <span className='font-semibold text-secondary'>{techData?.efficiency}</span></p>
            </div>
            <img src={imageUrl!} alt="tech-card-img" />
          </div>
          <div className="mt-10">
            <ReactMarkdown 
              children={markdownContent} 
              className={style.reactMarkDown}
              rehypePlugins={[rehypeRaw,rehypeSanitize]}
            />
          </div>
        </div>
        
        <div className={`fixed z-20 right-0 top-18 h-full bg-secondary text-white w-64 p-8 transform transition-transform duration-500 ease-in-out ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}>
          <nav>
            <ul className="mt-10 space-y-4">
              <DropDown menuName="Water & Wastewater"  subMenu={WaterMenu} />
              <DropDown menuName="Air/Atmosphere"  subMenu={AirMenu} />
              <DropDown menuName="Solid Waste"  subMenu={SolidWasteMenu} />
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default TechPage;