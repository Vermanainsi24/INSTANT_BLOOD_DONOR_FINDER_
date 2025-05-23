
import { Link } from "react-router-dom";
 // adjust path if needed
import donorImage from "../assets/home3.png";
import LandingNavbar from "./LandingNavbar"

const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 font-sans"
      style={{
        backgroundImage: `url(${donorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <LandingNavbar />

      {/* Hero Section */}
      <header className="py-20 sm:py-40 h-[70vh] flex items-center px-4 sm:px-10 text-white">
        <div className="bg-red-300 bg-opacity-30 p-6 rounded-xl shadow-xl backdrop-blur-lg max-w-lg w-full sm:ml-[5px] transform transition duration-500 hover:scale-105">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-wide uppercase text-center sm:text-left">
            Be Someone's Lifeline: Give Blood
          </h1>
          <p className="text-lg sm:text-xl mb-6 italic text-center sm:text-left">
            Donate blood and save lives. Find nearby donors instantly!
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/find-donor"
              className="bg-white text-red-600 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Find a Donor
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
