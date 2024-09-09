import { Link } from "react-router-dom"

const listClassName="ml-4 mt-2 space-y-2";

const WaterMenu = (
    <ul className={listClassName}>
        <li className='hover:underline'><Link to={`/tech/2`}>FBC</Link></li>
        <li className='hover:underline'><Link to={`/tech/5`}>Aerobic Treatment</Link></li>
    </ul>
)

const AirMenu = (
    <ul className={listClassName}>
        <li className='hover:underline'><Link to={`/tech/1`}>Air Scrubber</Link></li>
        <li className='hover:underline'><Link to={`/tech/6`}>IOT for Monitoring</Link></li>
    </ul>
);

const SolidWasteMenu = (
    <ul className={listClassName}>
        <li className='hover:underline'><Link to={`/tech/3`}>E-waste Kiosk</Link></li>
        <li className='hover:underline'><Link to={`/tech/4`}>Anaerobic Digester</Link></li>
    </ul>
);

export {WaterMenu, AirMenu, SolidWasteMenu};