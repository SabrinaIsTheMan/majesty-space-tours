import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <p>Created by <Link to="/about">TEAM MAJESTY</Link> at Juno College</p>
            </div>
        </footer>
    );
}

export default Footer;
