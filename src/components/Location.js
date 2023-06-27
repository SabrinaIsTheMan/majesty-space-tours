import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Location({ selectedTour } ) {

    const { location } = useParams();
    const [ image, setImage ] = useState("");

  const apiURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

    useEffect (() => {
        if(location === 'Gale Crater'){
            axios(`${apiURL}curiosity/photos`, {
                params: {
                sol: 3780,
                camera:'MAST',
                page: 1,
                api_key: process.env.REACT_APP_API_KEY
                }
              })
              .then((jsonResult) => {
                setImage(jsonResult.data.photos[7].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }
        if(location === 'Gusev Crater'){
          axios(`${apiURL}spirit/photos`,{
                params: {
                sol: 1274,
                camera:'PANCAM',
                page: 1,
              api_key: process.env.REACT_APP_API_KEY
                }
              })
              .then((jsonResult) => {
                setImage(jsonResult.data.photos[0].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }

        if(location === 'Jezero Crater'){
          axios(`${apiURL}perseverance/photos`,{
                params: {
                sol: 420,
                camera:'NAVCAM_RIGHT',
                page: 1,
                api_key: process.env.REACT_APP_API_KEY
                }
              })
              .then((jsonResult) => {
                setImage(jsonResult.data.photos[22].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }

        if(location === 'Meridiani Planum'){
          axios(`${apiURL}opportunity/photos`,{
                params: {
                sol: 4558,
                camera:'PANCAM',
                page: 1,
                api_key: process.env.REACT_APP_API_KEY
                }
              })
              .then((jsonResult) => {
                setImage(jsonResult.data.photos[15].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }

    }, [location])

    return (

        <div className="location wrapper">
            <div className="locationImg">
                <div className="imgContainer">
                    <img src={image} alt={selectedTour.altText} />
                </div>
            </div>

            <div className="locationInfo">
                <h3>About {location}</h3>
                <p>{selectedTour.description}</p>

                <Link to="dates">
                    <button type="button"
                        value={selectedTour.locationName}
                    >Tour Dates</button>
                </Link>

                <Link to="/tours">
                    <button type="button" className='backButton'>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Location;
