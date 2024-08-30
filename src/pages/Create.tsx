import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export interface FormDataProps{
  title:string;
  method:string;
  rating:number | null;
}


export const initialSmoothieData = {
  title:"", method:"", rating:null
}

const Create = () => {
  const [formData, setFormData] = useState(initialSmoothieData as FormDataProps);
  const [formError,setFormError] = useState<string|null>(null);
  const [formSuccess, setFormSuccess] = useState<string|null>(null);

  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
      const {id, value, type} = e.target;

      setFormData({
        ...formData,
        [id]: type === "number" ? Number(value): value
      })
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form Validation
    if(!formData.title || !formData.method || !formData.rating){
        setFormError("Please fill in all the fields");
        setFormSuccess(null);
        return;
    };

    // Supabase POST request
    const {data, error} = await supabase
    .from('tutorial_table')
    .insert([formData])

    if(error){
      setFormError(error.message);
      setFormSuccess(null);
      return;
    }
    else if(data){
      setFormError(null);
      setFormData(initialSmoothieData);
    }
    setFormSuccess("Form has been submitted successfully");

  };


  useEffect(()=> {
    if(formError || formSuccess){
      const timer = setTimeout(()=> {
          setFormError(null);
          setFormSuccess(null);
      },2500);

      return () => clearTimeout(timer);
    }

  },[formSuccess, formError])  

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-3 mx-auto w-[80%] gap-5">
        <div className="flex gap-2 items-center">
          <label htmlFor="title">Title:</label>
          <input 
          id="title"
          type="text" 
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none"
          value={formData.title}
          onChange={handleChangeInput}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="method">Method:</label>
          <input 
          id="method"
          type="text"
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none" 
          value={formData.method}
          onChange={handleChangeInput}
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="rating">Rating:</label>
          <input 
          id="rating"
          type="number" 
          className="rounded-2xl border border-teal-500 indent-2 focus:outline-none"
          value={formData.rating! || 0}
          onChange={handleChangeInput}
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-teal-500 text-white rounded-2xl w-fit  px-4 py-2 hover:bg-teal-400">
          Submit
          </button>
        </div>
      </form>
      {formError && <p className="mt-4 text-center text-rose-500">{formError}**</p>}
      {formSuccess && <p className="mt-4 text-center text-teal-500">{formSuccess}</p>}
    </div>
  )
}

export default Create;
