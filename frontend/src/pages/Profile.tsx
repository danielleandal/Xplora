import React from 'react';
import './HowItWorks.css'; // Create this CSS file for styling
import './Profile.css';
import logo from '../images/logo.png';
import image1 from '../images/image1.png';
import { useNavigate, Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // clear session storage before signing out
        sessionStorage.clear();
        navigate('/');
    };
    
    return (
        <div className="profile-page">
        {/* Header Section */}
            <header className="homepage-header">
            <Link to="/">
                <img src={logo} alt="Xplora Logo" className="homepage-logo" />
                </Link>
                <nav className="homepage-nav">
                <ul>
                    {/* <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/sign-in">Sign In</Link></li> */}
                    {/* <li><Link to="/homepage">Sign Out</Link></li> */}
                    <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
                </ul>
                </nav>
            </header>
            
            <div id="profile-sidebar" className="profile-sidebar">
                <a href="#home">Home</a>
                <a href="#security">Security</a>                
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

                    <div id="security" className="main-container">
                        <div>
                            <h1>Change Password</h1>
                            <div id="Current Password">Current Password</div>
                            <div id="New Password">New Password</div>
                            <div id="Confirm Password">Confirm New Password</div>
                            <button className="change-password">Change Password</button>
                        </div>
                        <div>
                            <h1>Delete Account</h1>
                            <p>By clicking Confirm, you confirm that you would like to 
                                start the process of email verification to delete your account. You can exit the process at any time.</p>
                            <button className="delete-account">Delete Account</button>
                        </div>
                    </div>
                </div>
                
                

            </div>

        </div>

        
    );
};

export default ProfilePage;