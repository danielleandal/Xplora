import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TripDetails.css';
import logo from '../images/logo.png';
import xploraplane from '../images/xplora-plane.png';
import newyork from '../images/new-york.png';
import { calculateTripDays } from '../helper-files/calculateTripDays';

const TripDetails: React.FC = () => {
    const navigate = useNavigate();

    const [flightsOpen, setFlightsOpen] = useState(false);
    const [accommodationsOpen, setAccommodationsOpen] = useState(false);
    const [activitiesOpen, setActivitiesOpen] = useState(false);

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

    // TODO: Implement with Database
    async function fetchTripDates(): Promise<{ startDate: string; endDate: string }> {
        return {
            // sample data for now 
            startDate: "2024-12-01",
            endDate: "2024-12-05"
        };
    }

    const [daysCount, setDaysCount] = useState<number | null>(null);
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);

    useEffect(() => {
        // Fetch dates from the database and calculate days
        async function getDatesAndCalculateDays() {
            const { startDate, endDate } = await fetchTripDates();
            setStartDate(startDate);
            setEndDate(endDate);

            const days = calculateTripDays(startDate, endDate);
            setDaysCount(days);
        }

        getDatesAndCalculateDays();
    }, []);

    return (
        <div className="trip-details-page">
            <header className="tripdetails-header">
                <Link to="/">
                    <img src={logo} alt="Xplora Logo" className="tripdetails-logo" />
                </Link>
                <nav className="tripdetails-nav">
                    <ul>
                        <li><Link to="/dashboard">Home</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="tripdetails-i-container">
                <div className="tripdetails-i-header"> TripName goes here  </div>
                <div className="tripdetails-i-content">
                    <div className="trip-card-tripdetails">
                        <div className="deets-and-photo">
                            <div className="td-trip-details">
                                <p className="trip-location">Trip Location Here</p>
                                <p className="trip-dates">
                                    {startDate && endDate ? (
                                        <>
                                            {startDate} - {endDate} ({daysCount !== null ? `${daysCount} days` : 'Calculating...'})
                                        </>
                                    ) : (
                                        "Loading dates..."
                                    )}
                                </p>
                            </div>

                            <div className="tripdetails-image-container">
                                <img src={newyork} alt="New York City" className="tripdetails-image" />
                            </div>
                        </div>

                        <div className="note-box">
                            <p>Note: This is important information about the content above.</p>
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
                            {flightsOpen && 
                            <div className='flights-list'>
                                <div className='flight-details'>
                                    <div className='top-info'>
                                        <span id='from-airport'>LHR</span>
                                        <div className="airport-separation-line">
                                            <img src={xploraplane} alt="Airplane Icon" className="airplane-icon" />
                                        </div>                            
                                        <span id='dest-airport'>JFK</span>         
                                    </div>
                                    <div className='bottom-info'>
                                        <div className='from-info'>
                                            <span id='from-city'>London</span>
                                            <span id='from-date'>06/08/2024</span>
                                        </div>
                                        <div className='dest-info'>
                                            <span id='dest-city'>New York</span>
                                            <span id='dest-date'>06/09/2024</span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            }
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