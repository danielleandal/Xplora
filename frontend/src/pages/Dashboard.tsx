import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import iconlogo from '../images/xplora-icon.png';
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

    const handleAddTrip = () => {
        navigate('/addtrip'); // Navigates to /addtrip when button is clicked
    };

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="dashboard">
            <div className='dashboard-header'>
                <div className='logo-welcome-section'>
                    <Link to="/">
                        <img src={iconlogo} alt="Xplora Logo" id="dashboard-logo" />
                    </Link>
                    <span id='welcome-text'>Welcome, {firstName} {lastName}!</span>
                </div>
                <div className='actions-section'>
                    <button id="profile-btn"><Link to="/profile">Profile</Link></button>
                    <button id="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className='dashboard-main'>
                <div className='trip-list-container'>
                    <div className='trip-list-header'>
                        Your upcoming itineraries
                    </div>
                    <input
                        id='search-input'
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Search..."
                    />
                    <button className="add-trip-btn">+</button>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                    <div className='trip-list-item'>
                        <img src={newyork} alt='trip picture' className='trip-image' />
                        <div className='trip-details'>
                            <span id='trip-title'>NYC 2025</span>
                            <div id='trip-dates-container'>
                                <span>New York City</span><span>Aug. 8 - Aug. 20</span>
                            </div>
                        </div>
                        <i id="trip-item-trash-icon" className='fa fa-trash-alt'></i>
                    </div>
                </div>
            </div>
        </div>
    );

    {/* <header className="homepage-header">
                <div className="logo-section">
                    <Link to="/">
                        <img src={logo} alt="Xplora Logo" className="homepage-logo" />
                    </Link>
                </div>
                <div className="user-section">
                    <button className="profile-btn"><Link to="/profile">Profile</Link></button>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </header>

            <main className="dashboard-main">
                <div className="dashboard-intro">
                    <h1>Welcome, {firstName} {lastName}!</h1>
                    <p>This is your personalized space where you can view and manage your account details, settings, and more.</p>
                </div>
                <div className="dashboard-i-container">
                    <div className="dashboard-i-header">Your upcoming itineraries</div>
                    <div className="dashboard-i-content">
                        <div className="trip-card">
                            <div className="trip-details">
                                <h3 className="trip-name">
                                    <Link to="/trip-details">Trip to NYC</Link>
                                </h3>
                                <p className="trip-location">New York City</p>
                                <p className="trip-dates">2024-12-01 - 2024-12-05 (5 days)</p>
                                <button className='edit-trip-button' onClick={handleEditTrip}> ✏️ Edit Trip</button>
                            </div>

                            <div className="trip-image-container">
                                <img src={newyork} alt="New York City" className="trip-image" />
                            </div>
                        </div>
                        <button className="add-trip-button" onClick={handleAddTrip}>
                            <span className="plus-icon">+</span> Add a trip
                        </button>
                    </div>
                </div>
            </main> */}

};

export default Dashboard;
