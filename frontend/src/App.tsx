import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorks';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import Profile from './pages/Profile'
import ProfileSecurityPage from './pages/ProfileSecurity'
import Dashboard from './pages/Dashboard';
import EditTrip from './pages/EditTrip';
import './App.css';

const App: React.FC = () => {
      // children == dashboard, add profile later
      const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const userId = localStorage.getItem('userId');

        // if there is a user stay in the page, if not go back to log in 
        return userId ? <>{children}</> : <Navigate to="/login" />;
    };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-trip" element={<EditTrip />} />
        <Route path="/profile-security" element={<ProfileSecurityPage />} />
        {/* Protected Route */}
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;