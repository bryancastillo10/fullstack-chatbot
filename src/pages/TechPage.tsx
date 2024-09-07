import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {  List, ArrowLeft } from '@phosphor-icons/react';
import ReactMarkdown from 'react-markdown';
import { envitechlist } from '../constants/envitechnology';



const TechPage = () => {
  const {id} = useParams<{id:string}>();
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
  },[id])

  return (
    <div className="flex flex-col min-h-screen">

      <nav className="border-black border p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-hover-link">
          <ArrowLeft/> <span className='ml-2'> Back to Home</span>
        </Link>
        <List size={24} />
      </nav>

      <main className="flex-grow flex">

        <div className="p-8">
          <ReactMarkdown children={markdownContent} />
        </div>

        <div className="fixed right-0 top-auto h-full  bg-secondary text-white w-64 p-8">
          <nav>
            <ul className="space-y-4">
              <li>Water</li>
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