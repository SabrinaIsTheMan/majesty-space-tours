import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <p><a href="https://github.com/JC47-TeamMajesty/majesty-space-tours" target="_blank" rel="noopener noreferrer">Created</a> by <Link to="/about">TEAM MAJESTY</Link> at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a></p>
            </div>
        </footer>
    );
}

export default Footer;
