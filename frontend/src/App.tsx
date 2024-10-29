import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorks';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
<<<<<<< HEAD
import Profile from './pages/Profile'
=======
import Dashboard from './pages/Dashboard';
>>>>>>> danielle
import './App.css';

const App: React.FC = () => {
      // children == dashboard, add profile later
      const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const userId = localStorage.getItem('userId');
        return userId ? <>{children}</> : <Navigate to="/login" />;
    };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
        <Route path="/profile" element={<Profile />} />
=======
        {/* Protected Route */}
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
>>>>>>> danielle
      </Routes>
    </Router>
  );
};

export default App;