import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logo from '../images/logo.png';
import newyork from '../images/new-york.png';

export const handleLogout = () => {
    const navigate = useNavigate();
    
    localStorage.removeItem('authToken');
     // Clear user data and navigate to login
     localStorage.removeItem('firstName');
     localStorage.removeItem('lastName');
     localStorage.removeItem('authToken'); // Remove token as well, if needed
     navigate('/login');
};


const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');

        if (storedFirstName && storedLastName) {
            setFirstName(storedFirstName);
            setLastName(storedLastName);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };


    const handleEditTrip = () => {
        navigate('/edit-trip'); // Navigate to the EditTrip page
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
                <div className="dashboard-intro">
                    <h1>Welcome, {firstName} {lastName}!</h1>
                    <p>This is your personalized space where you can view and manage your account details, settings, and more.</p>
                </div>
              

                <div className="dashboard-i-container">
                    <div className="dashboard-i-header">Your upcoming itineraries</div>
                    <div className="dashboard-i-content">
                        {/* Inline trip section for UI purposes */}
                        <div className="trip-card">
                            <div className="trip-details">
                                <h3 className="trip-name">Trip to NYC</h3>
                                <p className="trip-location">New York City</p>
                                <p className="trip-dates">2024-12-01 - 2024-12-05 (5 days)</p>
                                <button className='edit-trip-button' onClick={handleEditTrip}> ✏️ Edit Trip</button>
                            </div>
                            
                            <div className="trip-image-container">
                                <img src={newyork} alt="New York City" className="trip-image" />

                            </div>
                        </div>
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
