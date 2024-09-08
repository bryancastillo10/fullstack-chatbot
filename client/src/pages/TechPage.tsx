import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { List, X, ArrowLeft, CaretDown } from '@phosphor-icons/react';
import { envitechlist } from '../constants/envitechnology';
import NavLogo from "/earth.png";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import style from '../config/markdown-styles.module.css';

const TechPage = () => {
  const {id} = useParams<{id:string}>();
  const  location = useLocation();

  const {name, tag, imageUrl, efficiency} = location.state || "";

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
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

    if(tech){
      renderMarkdown(tech.mdPath);
    }
  },[id]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
              <h1 className='font-semibold text-2xl'>{name}</h1>
              <p className='my-4 bg-black text-primary px-3 py-1 w-fit rounded-2xl shadow-md text-center'>{tag}</p>
              <p>Tech. Efficiency: <span className='font-semibold text-secondary'>{efficiency}</span></p>
            </div>
            <img src={imageUrl} alt="tech-card-img" />
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
            <ul className="space-y-4">
            <li>
                <button onClick={toggleDropdown} className="flex justify-between items-center w-full text-left">
                  Water
                    <span
                      className={`transform transition-transform duration-300 ${
                        dropdownOpen ? '-rotate-180' : 'rotate-0'
                      }`}
                    >
                      <CaretDown size={20} />
                    </span>
                </button>
                {dropdownOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    <li className='hover:underline'><Link to={`/tech/2`}>FBC</Link></li>
                    <li className='hover:underline'><Link to={`/tech/5`}>Aerobic Treatment</Link></li>
                  </ul>
                )}
              </li>
              <li>Wastewater</li>
              <li>Air/Atmosphere</li>
              <li>Solid Waste</li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default TechPage;