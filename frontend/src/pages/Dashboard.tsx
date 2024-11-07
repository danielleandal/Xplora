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


    // const handleEditTrip = () => {
    //     navigate('/edit-trip'); // Navigate to the EditTrip page
    // };

    // const handleAddTrip = () => {
    //     navigate('/addtrip'); // Navigates to /addtrip when button is clicked
    // };

    const [inputValue, setInputValue] = useState('');
    // const [placeholder, setPlaceholder] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    // const handleMouseEnter = () => {
    //     setTimeout(() => {
    //         setPlaceholder('Search...');
    //     }, 120);
    // };

    // const handleMouseLeave = () => {
    //     setPlaceholder('');
    // };

    return (
        <div className="dashboard">
            <div className='dashboard-header'>
                <div className='logo-welcome-section'>
                    <Link to="/">
                        <img src={iconlogo} alt="Xplora Logo" id="dashboard-logo" />
                    </Link>
                    <span id='welcome-text'>Welcome, {firstName} {lastName}!</span>
                    <i className=''></i>
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
                    <div className='search-container' /*onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}*/>
                        <input
                            id='search-input'
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            // placeholder={placeholder}
                            placeholder='Search...'
                        />
                        <i id="search-icon" className="fa fa-search"></i>
                    </div>
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


};

export default Dashboard;
