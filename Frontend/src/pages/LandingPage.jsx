// LandingPage.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavbarLandingPage"; // Ensure the path is correct
import img from "../assets/profilePic.png"; // Replace with any relevant image if needed

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b bg-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col h-screen justify-center">
        <div className="mb-20">
          <Navbar />
        </div>
        <div className="flex  flex-col lg:flex-row w-5/6 mx-auto">
          {/* Left Side: Professional Image */}
          <div className="relative flex flex-col w-full lg:w-5/12 mb-8 lg:mb-0 items-center">
            <img
              src={img}
              alt="Professional Work"
              className="w-10/12 top-[2rem] sm:top-0 left-0"
            />
          </div>

          {/* Right Side: Introduction */}
          <div className="flex flex-col justify-center w-full lg:w-7/12 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Jay Rupapara: Frontend Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Currently pursuing 3rd year B.Tech in Computer Engineering with a
              passion for crafting responsive and optimized user interfaces.
            </p>
            <div className="space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800">
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center bg-white py-16 lg:py-24 border-2 border-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">About Me</h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            I am a frontend developer specializing in React.js and TailwindCSS,
            with experience working in team environments for projects like SGP
            and Smart India Hackathon.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Powered by AI, perfected by me.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 border-2 border-black">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Skills & Knowledge
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">React.js</h4>
              <p className="text-gray-600">
                Creating dynamic and reactive web apps.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">TailwindCSS</h4>
              <p className="text-gray-600">
                Building fast, responsive UI components.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">JavaScript (ES6+)</h4>
              <p className="text-gray-600">
                Strong JS fundamentals and modern practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Jay Rupapara. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
