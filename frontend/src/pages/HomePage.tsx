import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';
import logo from '../images/logo.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/sign-in');
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <img src={logo} alt="Xplora Logo" className="homepage-logo" />
        <nav className="homepage-nav">
          <ul>
            <li><Link to="/how-it-works">How it works</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/language">Language</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="homepage-main">
        <div className="homepage-intro">
          <img src={logo} alt="Xplora Logo" className="big-logo" />
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started!
          </button>
          <img src={image1} alt="Scenic 1" className="image1" />
          <img src={image2} alt="Scenic 2" className="image2" />
          <img src={image3} alt="Scenic 3" className="image3" />
          <img src={image4} alt="Scenic 4" className="image4" />
          <img src={image5} alt="Scenic 5" className="image5" />
          <img src={image2} alt="Scenic 6" className="image6" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;