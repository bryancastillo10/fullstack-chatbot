import { Sun } from "@phosphor-icons/react";

const Weather = () => {
  return (
    <div className="flex px-10 flex-col items-end gap-2 bg-amber-500 w-full h-[25%]">
        <div className="flex items-center gap-4">
        <Sun size={60}/>
            <div className="">
                <h1 className="text-2xl">24 &deg;C</h1>
                <p>Taipei</p>
            </div>
        </div>
        <div className="grid grid-cols-2">
            <h1>Humidity</h1>
            <h1>Wind Speed</h1>
        </div>
    </div>
  )
}

export default Weather;
