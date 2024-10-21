// NavbarLandingPage.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg mx-auto w-4/5 rounded-xl px-6 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Your Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Right side - Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-white font-medium px-4 py-2 rounded-xl hover:text-gray-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-white font-medium px-4 py-2 rounded-xl hover:text-gray-500 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-white font-medium px-4 py-2 rounded-xl hover:text-gray-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium px-4 py-2 rounded-xl hover:text-gray-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
