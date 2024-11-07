import { Link } from 'react-router-dom';
import './AddFlight.css';
import logo from '../images/logo.png';

const TripDetails: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <div className="add-flight-page">
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

            <div className="dashboard-i-container-addflight">
                <div className="dashboard-i-header-addflight"> Add Flight </div>
                <div className="dashboard-i-content-addflight">

                    <div className="add-flight">
                        <div className="flight-details">
                            <span className="text">Flight Details</span>

                        </div>
                        <div className="departure-details">

                        </div>
                        <div className="arrival-details">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TripDetails;