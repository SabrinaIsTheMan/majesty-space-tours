import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Location({ selectedTour, handleDateClick } ) {

    const { location } = useParams();

    const [ image, setImage ] = useState("");

    // useEffect (() => {
    //     axios({

    //         // image api here with useParams
    //         // setImage(url)

    //     })}, [])

    return (

        <div className="location wrapper">
            <div className="locationImg">
                <div className="imgContainer">
                    <img src={selectedTour.image} alt={selectedTour.altText} />
                </div>
            </div>

            <div className="locationInfo">
                <h3>About {location}</h3>
                <p>{selectedTour.description}</p>

                <Link to="dates">
                    <button type="button"
                        value={selectedTour.locationName}
                        onClick={(event) => { handleDateClick(event) }}>Tour Dates</button>
                </Link>

                <Link to="/tours">
                    <button type="button" className='backButton'>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Location;
