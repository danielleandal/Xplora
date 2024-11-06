import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TripDetails.css';
import logo from '../images/logo.png';
import newyork from '../images/new-york.png';

const TripDetails: React.FC = () => {
    const navigate = useNavigate();

    const [flightsOpen, setFlightsOpen] = useState(false);
    const [accommodationsOpen, setAccommodationsOpen] = useState(false);
    const [activitiesOpen, setActivitiesOpen] = useState(false);

    const handleEditTrip = () => {
        navigate('/edit-trip');
    };

    const toggleDropdown = (dropdownType: string) => {
        if (dropdownType === 'flights') setFlightsOpen(!flightsOpen);
        if (dropdownType === 'accommodations') setAccommodationsOpen(!accommodationsOpen);
        if (dropdownType === 'activities') setActivitiesOpen(!activitiesOpen);
    };

    const handleAdd = (type: string) => {
        if (type === 'flight') navigate('/add-flight');
        if (type === 'accommodation') navigate('/add-accommodation');
        if (type === 'activity') navigate('/add-activity');
    };

    return (
        <div className="trip-details-page">
            <header className="homepage-header">
                <Link to="/">
                    <img src={logo} alt="Xplora Logo" className="homepage-logo" />
                </Link>
                <nav className="homepage-nav">
                    <ul>
                        <li><Link to="/dashboard">Home</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="dashboard-i-container">
                <div className="dashboard-i-header"> Your Itinerary </div>
                <div className="dashboard-i-content">
                    <div className="trip-card-tripdetails">
                        <div className="trip-details">
                            <h3 className="trip-name">TripName goes here</h3>
                            <p className="trip-location">New York City</p>
                            <p className="trip-dates">2024-12-01 - 2024-12-05 (5 days)</p>
                            <button className="edit-trip-button" onClick={handleEditTrip}> ✏️ Edit Trip</button>
                        </div>

                        <div className="trip-image-container">
                            <img src={newyork} alt="New York City" className="trip-image" />
                        </div>
                    </div>

                    {/* Dropdown Sections */}
                    <div className="dropdown-all">
                        <div className="dropdown-section">
                            <div className="dropdown-header" onClick={() => toggleDropdown('flights')}>
                                <span className="text">Flights</span>
                                <span className={`arrow ${flightsOpen ? 'open' : ''}`}>▼</span>
                                <div className="tooltip-container">
                                    <button className="add-button" onClick={() => handleAdd('flight')}>+</button>
                                    <span className="tooltip-text">Add new flight</span>
                                </div>
                            </div>
                            {flightsOpen && <div className="dropdown-content">Flight details here</div>}
                        </div>

                        <div className="dropdown-section">
                            <div className="dropdown-header" onClick={() => toggleDropdown('accommodations')}>
                                <span className="text">Accommodations</span>
                                <span className={`arrow ${accommodationsOpen ? 'open' : ''}`}>▼</span>
                                <div className="tooltip-container">
                                    <button className="add-button" onClick={() => handleAdd('accommodation')}>+</button>
                                    <span className="tooltip-text">Add new accommodation</span>
                                </div>
                            </div>
                            {accommodationsOpen && <div className="dropdown-content">Accommodation details here</div>}
                        </div>

                        <div className="dropdown-section">
                            <div className="dropdown-header" onClick={() => toggleDropdown('activities')}>
                                <span className="text">Activities</span>
                                <span className={`arrow ${activitiesOpen ? 'open' : ''}`}>▼</span>
                                <div className="tooltip-container">
                                    <button className="add-button" onClick={() => handleAdd('activity')}>+</button>
                                    <span className="tooltip-text">Add new activity</span>
                                </div>
                            </div>
                            {activitiesOpen && <div className="dropdown-content">Activity details here</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;