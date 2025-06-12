import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgetPassword'; // ⬅️ Import this
import LandingPage from './pages/LandingPage';
import AdminHomePage from './pages/AdminHomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BeDonorPage from './pages/BeDonorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHomePage />} />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/be-a-donor" element={<BeDonorPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ⬅️ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
