// NavbarLandingPage.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-4/5 px-6 py-3 mx-auto text-white bg-black border border-white shadow-lg rounded-xl">
    <div className="container flex items-center justify-between mx-auto">
      {/* Logo with Your Name */}
      <div className="text-2xl font-bold text-white">
        <a href="#home" className="hover:text-gray-500">
          Portfolio
        </a>
      </div>

      {/* Right side - Links */}
      <div className="flex items-center space-x-6">
        <a
          href="#home"
          className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
