import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorks';
import SignUpPage from './pages/SignUp';
<<<<<<< HEAD
import Profile from './pages/Profile'
=======
import LoginPage from './pages/Login';
>>>>>>> main
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile />} />
=======
        <Route path="/login" element={<LoginPage />} />
>>>>>>> main
      </Routes>
    </Router>
  );
};

export default App;