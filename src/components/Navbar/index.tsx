import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-teal-500 flex justify-between items-center">
        <div className="">
            <h1>Logo</h1>
        </div>
        <ul className="flex justify-around gap-2 ">
            <Link to="/"><li className="Home">Home</li></Link>
            <Link to="/create"><li className="Create">Create</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar;
