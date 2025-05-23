import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Added Link
import Navbar from '../components/Navbar';
import donorImage from '../assets/home3.png'; // ✅ Import your background image

function AdminHomePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  if (!user) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div
      className="min-h-screen bg-gray-100 font-sans"
      style={{
        backgroundImage: `url(${donorImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <Navbar onLogout={handleLogout} />


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
}

export default AdminHomePage;
