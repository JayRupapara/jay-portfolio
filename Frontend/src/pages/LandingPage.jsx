// LandingPage.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarLandingPage"; // Ensure the path is correct
import img from "../assets/profilePic.png"; // Replace with any relevant image if needed

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white bg-gradient-to-b">
      {/* Hero Section */}
      <section className="flex flex-col justify-center h-screen">
        <div className="mb-20">
          <Navbar />
        </div>
        <div className="flex flex-col w-5/6 mx-auto lg:flex-row">
          {/* Left Side: Professional Image */}
          <div className="relative flex flex-col items-center w-full mb-8 lg:w-5/12 lg:mb-0">
            <img
              src={img}
              alt="Professional Work"
              className="w-10/12 top-[2rem] sm:top-0 left-0"
            />
          </div>

          {/* Right Side: Introduction */}
          <div className="flex flex-col justify-center w-full text-center lg:w-7/12 lg:text-left">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Jay Rupapara: <br />Frontend Developer
            </h2>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Currently pursuing 3rd year B.Tech in Computer Engineering with a
              passion for crafting responsive and optimized user interfaces.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 text-white bg-black rounded-2xl hover:bg-gray-800">
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center h-screen text-white bg-black">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h3>
          <p className="mb-6 text-lg leading-relaxed md:text-xl">
            I am a frontend developer specializing in React.js and TailwindCSS,
            with experience working in team environments for projects like SGP
            and Smart India Hackathon.
          </p>
          <p className="mb-6 text-lg leading-relaxed md:text-xl">
            Powered by AI, perfected by me.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center h-screen text-black bg-white">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h3 className="mb-10 text-3xl font-bold md:text-4xl">
            Skills & Knowledge
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 text-white bg-black shadow-md rounded-2xl hover:shadow-lg">
              <h4 className="mb-4 text-2xl font-semibold">React.js</h4>
              <p>Creating dynamic and reactive web apps.</p>
            </div>
            <div className="p-6 text-white bg-black shadow-md rounded-2xl hover:shadow-lg">
              <h4 className="mb-4 text-2xl font-semibold">TailwindCSS</h4>
              <p>Building fast, responsive UI components.</p>
            </div>
            <div className="p-6 text-white bg-black shadow-md rounded-2xl hover:shadow-lg">
              <h4 className="mb-4 text-2xl font-semibold">JavaScript (ES6+)</h4>
              <p>Strong JS fundamentals and modern practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="flex items-center justify-center h-screen text-white bg-black">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h3 className="mb-10 text-3xl font-bold md:text-4xl">Projects</h3>
          <p className="mb-6 text-lg leading-relaxed md:text-xl">
            Explore some of the projects I&#39;ve worked on, ranging from frontend
            web applications to full-stack systems.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 text-black bg-white rounded-2xl hover:bg-gray-200"
          >
            View Projects
          </button>
        </div>
      </section>

      {/* Section 5: Contact */}
      <section className="flex items-center justify-center h-screen text-black bg-white">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h3 className="mb-10 text-3xl font-bold md:text-4xl">Contact Me</h3>
          <p className="mb-6 text-lg md:text-xl">
            Interested in collaborating or have any questions? Feel free to
            reach out!
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 text-white bg-black rounded-2xl hover:bg-gray-800"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-white bg-black">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Jay Rupapara. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
