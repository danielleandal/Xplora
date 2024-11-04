import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Dashboard.css';
import logo from '../images/logo.png';


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    useEffect(() => {
        // Retrieve first and last names from localStorage
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');

        if (storedFirstName && storedLastName) {
            setFirstName(storedFirstName);
            setLastName(storedLastName);
        } else {
            // Redirect to login if data is missing
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
         // Clear user data and navigate to login
         localStorage.removeItem('firstName');
         localStorage.removeItem('lastName');
         localStorage.removeItem('authToken'); // Remove token as well, if needed
         navigate('/login');
    };

    return (
        <div className="dashboard">
            <header className="homepage-header">
            
                    <img src={logo} alt="Xplora Logo" className="homepage-logo" />
               
                <nav className="homepage-nav">
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
                    </ul>
                </nav>
            </header>

            <main className="dashboard-main">
                <h1>Welcome, {firstName} {lastName}!</h1>
                <p>This is your personalized space where you can view and manage your account details, settings, and more.</p>

                <div className="dashboard-i-container">
                    <div className="dashboard-i-header">Your upcoming itineraries</div>
                    <div className="dashboard-i-content">
                        <p>You don’t have any upcoming itineraries</p>
                        <button className="add-trip-button">
                            <span className="plus-icon">+</span> Add a trip
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;