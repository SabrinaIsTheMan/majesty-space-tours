import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="home">
            <div className="wrapper">
                <div className="homeLeft">
                    <h1>Discover the Majesty of Mars</h1>
                    <h2>Indulge in Opulent Extraterrestrial Experiences</h2>
                    <Link to="/tours">
                        <button>Book A Tour</button>
                    </Link>
                </div>

                <div className="homeRight">
                    <div className="imgContainer img1">
                        <img src="http://place-puppy.com/250x300" alt="Placeholder Puppy" />
                    </div>
                    <div className="imgContainer img2">
                        <img src="http://place-puppy.com/400x250" alt="Placeholder Puppy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
