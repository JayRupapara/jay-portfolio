import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarLandingPage";
import img from "../assets/profilePic.png";
import { FaReact, FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { Element, scroller } from "react-scroll"; // Import scroller from react-scroll

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [0, 1, 2, 3];
  const [isScrolling, setIsScrolling] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A brief description of Project 1.",
      previewImage: "link_to_preview_image_1",
      liveLink: "https://project1.com",
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
    },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 700);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isScrolling, sections.length]);

  const scrollToSection = (section) => {
    switch (section) {
      case "contact":
        setCurrentSection(3);
        break;
      case "projects":
        setCurrentSection(2);
        break;
      case "skills":
        setCurrentSection(1);
        break;
      case "home":
        setCurrentSection(0);
        break;
      default:
        setCurrentSection(0);
        break;
    }
    // scroller.scrollTo(section, {
    //   duration: 800,
    //   delay: 0,
    //   smooth: "easeInOutQuart",
    // });
  };

  return (
    <div className="flex flex-col w-full justify-center h-screen bg-white">
      <div className="absolute w-full top-6 md:top-10 z-10">
        <Navbar scrollToSection={scrollToSection} />
      </div>
      <AnimatePresence>
        {/* Hero Section */}
        <Element name="home">
          {currentSection === 0 && (
            <motion.section
              key="hero-section"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6 }}
              className="flex w-full flex-col justify-center h-screen"
            >
              <section className="flex flex-col w-full lg:w-5/6 mx-auto mt-[5rem] md:mt-[6rem] lg:mt-20 lg:flex-row">
                <div className="relative flex flex-col items-center w-full lg:w-5/12">
                  <img
                    src={img}
                    alt="Professional Work"
                    className="w-8/12 md:w-5/12 lg:w-11/12 lg:top-[2rem] left-0"
                  />
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center w-full text-center lg:w-7/12 lg:text-left">
                  <h2 className="my-2 lg:mb-4 text-3xl font-bold md:text-4xl xl:text-6xl">
                    <p> Jay Rupapara:</p>
                    <p> Frontend Developer</p>
                  </h2>
                  <p className="mb-2 lg:mb-8 text-md text-gray-700 lg:text-xl">
                    Currently pursuing 3rd year B.Tech in Computer Engineering
                    with a passion for crafting responsive and optimized user
                    interfaces.
                  </p>
                  <a
                    href="YOUR_GOOGLE_DRIVE_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 lg:px-6 py-2 lg:py-3 text-white bg-black rounded-xl hover:bg-gray-800"
                  >
                    Download CV
                  </a>
                </div>
              </section>
            </motion.section>
          )}
        </Element>

        <Element name="skills">
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
              <section className="max-w-6xl px-6 mx-auto text-center mt-20">
                <h3 className="mb-10 text-3xl font-bold md:text-4xl">
                  Skills & Knowledge
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <SkillCard
                    icon={<FaHtml5 />}
                    color="text-orange-500"
                    title="HTML"
                    description="Structuring web content with semantic elements."
                  />
                  <SkillCard
                    icon={<FaCss3Alt />}
                    color="text-blue-500"
                    title="CSS"
                    description="Styling web pages with layouts and animations."
                  />
                  <SkillCard
                    icon={<FaJs />}
                    color="text-yellow-400"
                    title="JavaScript (ES6+)"
                    description="Strong JS fundamentals and modern practices."
                  />
                  <SkillCard
                    icon={<FaReact />}
                    color="text-blue-500"
                    title="React.js"
                    description="Creating dynamic and reactive web apps."
                  />
                  <SkillCard
                    icon={<SiTailwindcss />}
                    color="text-teal-400"
                    title="TailwindCSS"
                    description="Building fast, responsive UI components."
                  />
                  <SkillCard
                    icon={<SiFramer />}
                    color="text-pink-500"
                    title="Framer Motion"
                    description="Creating smooth animations and transitions."
                  />
                </div>
              </section>
            </motion.section>
          )}
        </Element>

        <Element name="projects">
          {/* Projects Section */}
          {currentSection === 2 && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center h-screen text-black bg-white"
            >
              <section className="max-w-6xl px-6 mx-auto text-center">
                <ProjectList projects={projects} />
              </section>
            </motion.section>
          )}
        </Element>

        <Element name="contact">
          {/* Contact Section */}
          {currentSection === 3 && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center h-screen text-white bg-black"
            >
              <ContactSection navigate={navigate} />
            </motion.section>
          )}
        </Element>
      </AnimatePresence>

      {currentSection === 3 && <Footer />}
    </div>
  );
};

// SkillCard Component
const SkillCard = ({ icon, color, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white text-black border shadow-md rounded-xl hover:shadow-lg"
  >
    <div className={`flex justify-center mb-4 text-5xl ${color}`}>{icon}</div>
    <h4 className="mb-2 text-2xl font-semibold">{title}</h4>
    <p>{description}</p>
  </motion.div>
);

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const ProjectList = ({ projects }) => (
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <div
        key={project.id}
        className="p-4 bg-black text-white rounded-xl shadow-lg"
      >
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="w-full h-48 mb-4 rounded-xl object-cover"
        />
        <h4 className="text-xl font-semibold">{project.title}</h4>
        <p className="mb-4">{project.description}</p>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-black bg-white rounded-xl hover:bg-gray-300"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      liveLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ContactSection = ({ navigate }) => (
  <div className="text-center">
    <h3 className="mb-4 text-3xl font-bold">Contact Me</h3>
    <p className="mb-8 text-lg">
      Get in touch to discuss potential collaborations.
    </p>
    <button
      onClick={() => navigate("/contact")}
      className="px-4 py-2 text-black bg-white rounded-xl hover:bg-gray-300"
    >
      Go to Contact Page
    </button>
  </div>
);

ContactSection.propTypes = {
  navigate: PropTypes.func.isRequired,
};

const Footer = () => (
  <footer className="absolute bottom-0 w-full py-6 text-center bg-gray-100">
    <p className="text-gray-600">© 2024 Jay Rupapara. All rights reserved.</p>
  </footer>
);

export default LandingPage;
