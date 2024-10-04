import { useState } from "react";
import { Icon, Cloud } from "@phosphor-icons/react";
import { toast } from "sonner";
import { weatherCode } from "../utils/weatherCode";

const BASE_API = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

interface WeatherData{
    temperature:number;
    humidity:number;
    windSpeed:number;
    location:string;
    icon:Icon;
  }
  

const useWeatherAPI = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [weatherData, setWeatherData] = useState<WeatherData| null>(null);
 
    const weatherAPI = async (city:string) => {
        try{
            setLoading(true);
            const url = `${BASE_API}?q=${city}&units=metric&appid=${API_KEY}`;
            const res = await fetch(url);
    
            if(!res.ok){
                toast.error("Failed to fetch the weather data");
                return;
            }
    
            const data = await res.json();
            const iconMap = weatherCode[data.weather[0].icon] || Cloud;
            setWeatherData({
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                location: data.name,
                icon: iconMap
            })
    
        }
        catch(error:unknown){
            if(error instanceof Error){
                console.error(error.message);
            }else{
                throw new Error("An unknown error occured");
            }
        }finally{
            setLoading(false);
        };
    };
    

    return {weatherAPI, weatherData, loading};
};

export default useWeatherAPI;
