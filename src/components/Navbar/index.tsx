import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-primary flex justify-between items-center">
        <div className="">
            <h1 className="font-semibold font-quicksand">EnviroTech</h1>
        </div>
        <ul className="flex justify-around gap-2 ">
            <Link to="/"><li className="">Home</li></Link>
            <li className="">About</li>
            <li className="">Technologies</li>
            <li className="">Services</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar;
