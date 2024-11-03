import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarLandingPage";
import img from "../assets/profilePic.png";
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [0, 1, 2, 3]; // Adjusted sections to exclude About section
  const [isScrolling, setIsScrolling] = useState(false); // Track scrolling state

  const handleScroll = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    if (isScrolling) return; // Prevent additional scrolling during transition

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      // Scroll down
      setCurrentSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      // Scroll up
      setCurrentSection((prev) => prev - 1);
    }

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 700); // Delay to control scroll frequency
  };

  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A brief description of Project 1.",
      previewImage: "link_to_preview_image_1", // Replace with the image URL or import statement
      liveLink: "https://project1.com", // Replace with the actual project link
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "A brief description of Project 2.",
      previewImage: "link_to_preview_image_2",
      liveLink: "https://project2.com",
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A brief description of Project 3.",
      previewImage: "link_to_preview_image_3",
      liveLink: "https://project3.com",
    }
    // Add more projects as needed
  ];
  
  

  useEffect(() => {
    // Prevent scrollbar from appearing
    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on unmount
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="flex flex-col justify-center h-screen bg-white">
      <div className="absolute w-full top-10">
        <Navbar />
      </div>
      <AnimatePresence mode="wait">
        {/* Hero Section */}
        {currentSection === 0 && (
          <motion.section
            key="hero-section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center h-screen"
          >
            <section className="flex flex-col w-5/6 mx-auto mt-20 lg:flex-row">
              <div className="relative flex flex-col items-center w-full mb-8 lg:w-5/12 lg:mb-0">
                <img
                  src={img}
                  alt="Professional Work"
                  className="w-10/12 top-[2rem] sm:top-0 left-0"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start justify-center w-full text-center lg:w-7/12 lg:text-left">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                  Jay Rupapara: <br />
                  Frontend Developer
                </h2>
                <p className="mb-8 text-lg text-gray-700 md:text-xl">
                  Currently pursuing 3rd year B.Tech in Computer Engineering
                  with a passion for crafting responsive and optimized user
                  interfaces.
                </p>
                <a
                  href="YOUR_GOOGLE_DRIVE_LINK_HERE" // Replace with your Google Drive link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-white bg-black rounded-2xl hover:bg-gray-800"
                >
                  Download CV
                </a>
              </div>
            </section>
          </motion.section>
        )}

        {/* Skills & Knowledge Section */}
        {currentSection === 1 && (
          <motion.section
            key="skills-section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-screen text-white bg-black"
          >
            <section className="max-w-6xl px-6 mx-auto text-center  mt-20">
              <h3 className="mb-10 text-3xl font-bold md:text-4xl ">
                Skills & Knowledge
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {/* HTML Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white bg-white text-black border shadow-md rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-orange-500 text-5xl">
                    <FaHtml5 /> {/* HTML Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">HTML</h4>
                  <p>Structuring web content with semantic elements.</p>
                </motion.div>

                {/* CSS Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white border shadow-md bg-white text-black rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-blue-500 text-5xl">
                    <FaCss3Alt /> {/* CSS Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">CSS</h4>
                  <p>Styling web pages with layouts and animations.</p>
                </motion.div>

                {/* JavaScript Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white border shadow-md bg-white text-black rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-yellow-400 text-5xl">
                    <FaJs /> {/* JavaScript Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">
                    JavaScript (ES6+)
                  </h4>
                  <p>Strong JS fundamentals and modern practices.</p>
                </motion.div>

                {/* React Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white border shadow-md bg-white text-black rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-blue-500 text-5xl">
                    <FaReact /> {/* React Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">React.js</h4>
                  <p>Creating dynamic and reactive web apps.</p>
                </motion.div>

                {/* TailwindCSS Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white border shadow-md bg-white text-black rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-teal-400 text-5xl">
                    <SiTailwindcss /> {/* TailwindCSS Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">TailwindCSS</h4>
                  <p>Building fast, responsive UI components.</p>
                </motion.div>

                {/* Framer Motion Skill */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border-white border shadow-md bg-white text-black rounded-2xl hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4 text-pink-500 text-5xl">
                    <SiFramer /> {/* Framer Motion Icon */}
                  </div>
                  <h4 className="mb-2 text-2xl font-semibold">Framer Motion</h4>
                  <p>Creating smooth animations and transitions.</p>
                </motion.div>
              </div>
            </section>
          </motion.section>
        )}

{/* Projects Section */}
{currentSection === 2 && (
  <motion.section
    key="projects-section"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.6 }}
    className="flex items-center justify-center h-screen text-black bg-white "
  >
    <section className="max-w-6xl px-6 mx-auto text-center">
      <div className="mb-6">
      <h3 className="text-3xl font-bold md:text-4xl mb-3">Projects</h3>
      <p className="text-lg leading-relaxed md:text-xl">
        Explore some of the projects I&#39;ve worked on, ranging from
        frontend web applications to full-stack systems.
      </p>

      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-black text-white rounded-lg shadow-lg">
            <img 
              src={project.previewImage} 
              alt={`${project.title} preview`} 
              className="w-full h-48 mb-4 rounded-lg object-cover"
            />
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-black bg-white rounded-xl hover:bg-gray-300"
            >
              View Site
            </a>
          </div>
        ))}
      </div>
    </section>
  </motion.section>
)}


        {/* Contact Section */}
        {currentSection === 3 && (
          <motion.section
            key="contact-section"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center h-screen text-white bg-black"
          >
            <section className="max-w-4xl px-6 mx-auto text-center">
              <h3 className="mb-10 text-3xl font-bold md:text-4xl">
                Contact Me
              </h3>
              <p className="mb-6 text-lg md:text-xl">
                Interested in collaborating or have any questions? Feel free to
                reach out!
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 text-black bg-white rounded-2xl hover:bg-gray-800"
              >
                Get in Touch
              </button>
            </section>
          </motion.section>
        )}
      </AnimatePresence>

      {currentSection === 3 && (
        <footer className="py-4 text-black bg-white">
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Jay Rupapara. All Rights
              Reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default LandingPage;
