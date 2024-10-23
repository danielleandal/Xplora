import React from 'react';
import './HomePage.css';
import logo from '../images/logo.png'; // Ensure the path to the logo is correct
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <img src={logo} alt="Xplora Logo" className="homepage-logo" />
        <nav className="homepage-nav">
          <ul>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#sign-up">Sign Up</a></li>
            <li><a href="#sign-in">Sign In</a></li>
            <li><a href="#language">Language</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="homepage-main">
        <div className="homepage-intro">
          <img src={logo} alt="Xplora Logo" className="big-logo" />
          <button className="get-started-button">Get Started!</button>
        </div>
        <img src={image1} alt="Scenic 1" className="image1" />
        <img src={image2} alt="Scenic 2" className="image2" />
        <img src={image3} alt="Scenic 3" className="image3" />
        <img src={image4} alt="Scenic 4" className="image4" />
        <img src={image5} alt="Scenic 5" className="image5" />
      </main>
    </div>
  );
};

export default HomePage;