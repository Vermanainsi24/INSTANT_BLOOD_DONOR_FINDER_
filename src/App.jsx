import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgetPassword'; // ⬅️ Import this
import LandingPage from './components/LandingPage';
import AdminHomePage from './components/AdminHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* ⬅️ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
