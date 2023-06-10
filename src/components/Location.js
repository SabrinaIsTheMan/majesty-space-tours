import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Location({ props, handleDateClick} ) {

    const { location } = useParams();

    const [ image, setImage ] = useState("");

    // useEffect (() => {
    //     axios({

    //         // image api here with useParams
    //         // setImage

    //     })}, [])

    return (

        <div className="location wrapper">
            <div className="locationImg">
                <div className="imgContainer">
                    <img src={image} alt={props.altText} />
                </div>
            </div>

            <div className="locationInfo">
                <h3>About {location}</h3>
                <p>{props.description}</p>

                <Link to={`/tours/${location}/dates`}>
                    <button type="button"
                        value={props.locationName}
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
