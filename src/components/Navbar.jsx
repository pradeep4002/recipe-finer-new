import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/40 backdrop-blur-none text-white p-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Recipe Finder</h1>
        <Link to="/" className="hover:underline text-2xl mr-2 font-bold">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
