import { useEffect, useState } from "react";
import { Sun, Cloud, CloudFog, CloudRain, Snowflake, Moon, CloudSun, CloudMoon, DropSimple, Wind, Icon } from "@phosphor-icons/react";

interface WeatherParameterProps{
  icon: Icon;
  parameterName:string;
  parameterValue:number;
  unit:string;
}

interface WeatherData{
  temperature:number;
  humidity:number;
  windSpeed:number;
  location:string;
  icon:Icon;
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
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData| null>(null);
  const [city, setCity] = useState<string>("Manila");

  const weatherIcons: Record<string,Icon> = {
    "01d": Sun,
    "01n": Moon,
    "02d": CloudSun,
    "02n": CloudMoon,
    "03d": CloudSun,
    "03n": CloudMoon,
    "04d": CloudFog,
    "04n": CloudFog,
    "09d": CloudRain,
    "09n": CloudRain,
    "10d": CloudRain,
    "10n": CloudRain,
    "13d": Snowflake,
    "13n": Snowflake
  }
  
  const searchCity = async (city:string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
    try{
      setLoading(true);
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Failed to fetch the weather data");
      }
      const data = await response.json();
      const iconMap = weatherIcons[data.weather[0].icon] || Cloud;
      setWeatherData({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: iconMap
      });
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        throw new Error("An unknown error occured");
      }
    }finally{
      setLoading(false);
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCity(city);
  };
  
  useEffect(()=> {
    searchCity(city);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  if(loading){
    <div>Loading ...</div>
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full bg-secondary text-primary p-2 rounded-t-lg shadow-md">
        {weatherData && (
          <>
          <div className="grid grid-cols-2 items-center">
              <weatherData.icon size={64} />
              <div className="w-full">
                <h1 className="text-2xl">{weatherData.temperature} &deg;C</h1>
              </div>
            </div>
            <form onSubmit={handleSearch} className="grid grid-cols-1 w-fit items-center gap-4">
                <input
                  className="bg-primary text-sm px-2 py-1 text-black border border-black outline-none rounded-lg focus:border-secondary"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Search City"
                />
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
        )}

    </div>
  );
};

export default Weather;
