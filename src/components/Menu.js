import '../styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu({toggleMenu, active}) {

    return (
        <header className="menu">
            <nav className="menuBar">
                <div className="brand">
                    <Link to="/">
                        <p className="brandName">YBS Galactic Tours <FontAwesomeIcon icon={faRocket} className="brandIcon"/></p>
                    </Link>
                </div>
                <div className={`menuNav ${active ? "active" : ""}`}>
                    <ul className="navList">
                        <li className="navItem" onClick={toggleMenu}><Link to="/"><p>Home</p></Link></li>
                        <li className="navItem" onClick={toggleMenu}><Link to="/tours"><p>Book A Tour</p></Link></li>
                        <li className="navItem" onClick={toggleMenu}><Link to="/search"><p>Search Tours</p></Link></li>
                        <li className="navItem" onClick={toggleMenu}><Link to="/about"><p>About Us</p></Link></li>
                    </ul>
                </div>
                <div
                className={`hamburger ${active ? "active" : ""}`}
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
