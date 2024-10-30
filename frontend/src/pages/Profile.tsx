import React from 'react';
import './HowItWorks.css'; // Create this CSS file for styling
import './Profile.css';
import logo from '../images/logo.png';
import image1 from '../images/image1.png';
import { handleLogout } from './Dashboard'; 
import { useNavigate, Link } from 'react-router-dom';

const ProfilePage: React.FC = () => { 
    return (
        <div className="profile-page">
        {/* Header Section */}
        <header className="homepage-header">
            
            <img src={logo} alt="Xplora Logo" className="homepage-logo" />
       
        <nav className="homepage-nav">
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </ul>
        </nav>
        </header>
            
            <div id="profile-sidebar" className="profile-sidebar">
                <a href="#home">Home</a>
                <a href="/profile-security">Security</a>                
            </div>
            
            <div className="profile-main">
                <div className="outer-container">
                    <div id="home" className="main-container">
                        <img src={image1} alt="Profile Picture" className="profile-picture" />
                        
                        <div className="main-column">
                            <div>
                                Name:
                                <div id="name">Filler</div>
                            </div>
                            <div>
                                Email:
                                <div id="email">Filler</div>
                            </div>
                            <div>
                                Age:
                                <div id="age">Filler</div>
                            </div>
                        </div>

                        <div className="main-column">
                            <div>
                                Places *Filler Name* has XPLORED
                            <div id="blue-box">.</div>
                            <div id="place">Filler</div>
                            <div id="place">Filler</div>
                            <div id="place">Filler</div>
                            <div id="place">Filler</div>
                            <div id="place">Filler</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                

            </div>

        </div>

        
    );
};

export default ProfilePage;