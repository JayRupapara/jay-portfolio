import { useState } from "react";
import { Link } from "react-scroll";

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-11/12 lg:w-4/5 px-4 py-2 lg:px-6 lg:py-3 mx-auto text-white bg-black border border-white shadow-lg rounded-xl">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo with Your Name */}
        <div className="text-xl sm:text-2xl font-bold text-white">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-gray-500 cursor-pointer"
          >
            Portfolio
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden sm:flex items-center lg:space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500 cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500 cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white transition duration-300 rounded-xl hover:text-gray-500 cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"} transition-transform transform duration-300`}
      >
        <div className="flex flex-col items-center bg-black rounded-lg py-4 space-y-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white hover:text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white hover:text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white hover:text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-4 py-2 font-medium text-white hover:text-gray-500 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
