import '../styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {

    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="menu">
            <nav className="menuBar">
                <div className="brand">
                    <Link to="/">
                        <p className="brandName">YBS Galactic Tours <FontAwesomeIcon icon={faRocket} className="brandIcon"/></p>
                    </Link>
                </div>
                <div className={`menuNav ${isActive ? "active" : ""}`}>
                    <ul className="navList">
                        <li className="navItem" onClick={toggleMenu}><Link to="/"><p>Home</p></Link></li>
                        <li className="navItem" onClick={toggleMenu}><Link to="/tours"><p>Book A Tour</p></Link></li>
                        <li className="navItem" onClick={toggleMenu}><Link to="/about"><p>About Us</p></Link></li>
                    </ul>
                </div>
                <div
                className={`hamburger ${isActive ? "active" : ""}`}
                onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Menu;