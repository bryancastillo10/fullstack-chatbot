import { ChangeEvent, FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react"; 
import { Link, useParams, useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient";
import { FormDataProps } from "./Create";

const Update = () => {
  const [smoothieData, setSmoothieData] = useState<FormDataProps|null>(null);
  const [formError,setFormError] = useState<string|null>(null);
  const [formSuccess, setFormSuccess] = useState<string|null>(null);

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchSmoothie = async () => {
      const {data,error} = await supabase
      .from('tutorial_table')
      .select()
      .eq('id',id)
      .single()

      if(error){
        navigate('/',{replace:true})
      }

      if(data){
        setSmoothieData(data);
      }
    };

    fetchSmoothie();

  },[id, navigate]);

  // Update Button
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(!smoothieData?.title || !smoothieData?.method || !smoothieData?.rating){
        setFormError("Please fill in all the fields");
        setFormSuccess(null);
        return;
    };

    const {data,error} = await supabase
    .from('tutorial_table')
    .update({ title: smoothieData.title,
              method: smoothieData.method,
              rating:smoothieData.rating,
            })
    .eq('id',id)
    .select()

    if(error){
      setFormError(error.message);
    }
    if(data){
      setFormError(null);
      setFormSuccess("Data has been updated")
    }
  }

  useEffect(()=> {
    if(formError || formSuccess){
      const timer = setTimeout(()=> {
          setFormError(null);
          setFormSuccess(null);
      },2500);

      return () => clearTimeout(timer);
    }

  },[formSuccess, formError])  


  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    const {id, value, type} = e.target;
    if(smoothieData){
      setSmoothieData({
        ...smoothieData,
        [id]: type === "number" ? Number(value): value
      })
    }
  }

  return (
    <div className="">
      <div className="">
        <Link to="/"><ArrowLeft/></Link>
      </div>
      <div className="mt-6 w-fit mx-auto p-4 bg-teal-500/40 text-teal-700 rounded-3xl shadow-md border py-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-3 gap-5">
        <div className="flex gap-2 items-center">
          <label htmlFor="title">Title:</label>
          <input 
          id="title"
          type="text" 
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none"
          value={smoothieData?.title}
          onChange={handleChangeInput}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="method">Method:</label>
          <input 
          id="method"
          type="text"
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none" 
          value={smoothieData?.method}
          onChange={handleChangeInput}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="rating">Rating:</label>
          <input 
          id="rating"
          type="number" 
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none"
          value={smoothieData?.rating || 0}
          onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-teal-500 text-white rounded-2xl w-fit  px-4 py-2 hover:bg-teal-400">
          Update
          </button>
        </div>
      </form>
      </div>
      {formError && <p className="mt-4 text-center text-rose-500">{formError}**</p>}
      {formSuccess && <p className="mt-4 text-center text-teal-500">{formSuccess}</p>}
    </div>
  )
}

export default Update
