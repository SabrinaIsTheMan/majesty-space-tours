import '../styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <header className="menu">
                <nav className="menuBar">
                    <div className="brand">
                        <p className="brandName">YSB Galactic Tours <FontAwesomeIcon icon={faRocket} className="brandIcon"/></p>
                    </div>

                    <ul className="menuNav">
                        <li><Link to="/"><p>Home</p></Link></li>
                        <li><Link to="/tours"><p>Book A Tour</p></Link></li>
                        <li><Link to="/about"><p>About Us</p></Link></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Menu;
