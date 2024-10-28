import React from 'react';
import './HowItWorks.css'; // Create this CSS file for styling
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
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
                <li><Link to="/language">Language</Link></li>
            </ul>
            </nav>
        </header>

        <header className="profile-header">
            <h1>Profile</h1>
        </header>
      </div>
    );
};

export default ProfilePage;