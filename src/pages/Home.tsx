import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

interface SmoothieData{
  id:number;
  title:string;
  method:string;
  rating:number;
}

interface SmoothieCardProps{
  title:string;
  method:string;
  rating:number;
}


const Home = () => {
  const [errorState, setErrorState] = useState<string|null>(null);
  const [smoothies, setSmoothies] = useState<SmoothieData[]|null>(null);


  useEffect(()=>{
     const fetchSmoothies = async () => {
      const {data,error} = await supabase
        .from('tutorial_table')
        .select()
        
        if(error){
          setErrorState("Failed to fetch the data");
          setSmoothies(null);
        }
        if(data){
          setSmoothies(data);
          setErrorState(null);
        }
     }

     fetchSmoothies();
  },[]);

  return (
    <div>
     {errorState && (<p>Something went wrong. Fetch error</p>)}
     {smoothies &&(
      <div className="grid grid-cols-2 xl:w-[50%] mx-auto gap-4">
        {smoothies.map((sm)=>(
          <SmoothieCard 
            key={sm.id}
            title={sm.title}
            method={sm.method}
            rating={sm.rating}
          />
        ))}
      </div>
     )}
    </div>
  )
}

export default Home;

const SmoothieCard = ({title,method,rating}:SmoothieCardProps) => {
  return(
    <div className="border-2 border-teal-500 rounded-3xl shadow-md p-4 flex justify-between">
      <div className="">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-sm">{method}</p>
      </div>
      <div className="mr-2">
        Rating: {rating}
      </div>
  </div>
  )
}
