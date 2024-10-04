import { ChangeEvent, useEffect, useState } from "react";
import {  DropSimple, Wind, MagnifyingGlass, Icon } from "@phosphor-icons/react";
import useWeatherAPI from "../../api/weather";
import { BigSpinner } from "../../reusables";

interface WeatherParameterProps{
  icon: Icon;
  parameterName:string;
  parameterValue:number;
  unit:string;
}

const WeatherParameter = ({icon:Icon, parameterName, parameterValue, unit}:WeatherParameterProps) => {
  return (
    <div className="flex gap-x-2 w-[95%] mx-auto items-center px-2 py-3">
      <Icon size={30}/>
      <div className="grid grid-cols-1">
        <h1 className="text-xl font-semibold">{parameterValue} <span className="font-base text-sm">{unit}</span></h1>
        <p className="text-xs text-nowrap">{parameterName}</p>
      </div>
    </div>
  )
};

const Weather = () => {
  const [city, setCity] = useState<string>("Manila");

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
  };

  const {weatherAPI, weatherData, loading} = useWeatherAPI();

  
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    weatherAPI(city);

  };
  
  useEffect(()=> {
    weatherAPI(city);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  if(loading){
    <div className="flex justify-center items-center">
      <BigSpinner/>
    </div>
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full bg-secondary text-primary p-2 rounded-t-lg shadow-md">
        {weatherData ?(
          <>
          <div className="grid grid-cols-2 items-center">
              <weatherData.icon size={64} weight="fill" />
              <div className="w-full">
                <h1 className="text-2xl">{weatherData.temperature} &deg;C</h1>
              </div>
            </div>
            <form onSubmit={handleSubmitSearch} className="grid grid-cols-1 w-fit items-center gap-4">
                <div className="relative w-[100%]">
                  <input
                    className="bg-primary text-sm px-2 py-1 w-full
                     text-black border-2 border-black outline-none rounded-lg focus:border-accent"
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="Search City"
                  />
                  <button className="absolute right-0 p-2 text-black hover:scale-110">
                      <MagnifyingGlass size={18} />
                  </button>
                </div>
              </form>
            <WeatherParameter 
              icon={DropSimple} 
              parameterName="Humidity" 
              parameterValue={weatherData.humidity} 
              unit="%" 
            />
            <WeatherParameter 
              icon={Wind}  
              parameterName="Wind Speed" 
              parameterValue={weatherData.windSpeed} 
              unit="km/hr" 
            />
          </>
        ):
          <div className="font-semibold text-center my-10"> 
            Failed to retrieve the weather data, reload th page to try again.
          </div>
      }
    </div>
  );
};

export default Weather;
