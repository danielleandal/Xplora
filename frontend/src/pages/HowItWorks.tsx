import React from 'react';
import './HowItWorks.css'; // Create this CSS file for styling
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="how-it-works-page">
            {/* Header Section */}
      <header className="homepage-header">
      <Link to="/">
          <img src={logo} alt="Xplora Logo" className="homepage-logo" />
        </Link>
        <nav className="homepage-nav">
          <ul>
           
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/language">Language</Link></li>
          </ul>
        </nav>
      </header>

      <header className="how-it-works-header">
        <h1>How It Works</h1>
        <p>Learn how to get started with Xplora in a few simple steps!</p>
      </header>

      <section className="how-it-works-steps">
        <div className="step">
          <h2>Step 1: Sign Up</h2>
          <p>Register an account with Xplora to access personalized features.</p>
        </div>

        <div className="step">
          <h2>Step 2: Explore</h2>
          <p>Browse and explore the features available to you on the platform.</p>
        </div>

        <div className="step">
          <h2>Step 3: Customize</h2>
          <p>Personalize your experience by updating your settings and preferences.</p>
        </div>

        <div className="step">
          <h2>Step 4: Connect</h2>
          <p>Engage with the community and travel away.</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;