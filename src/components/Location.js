import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Location({ selectedTour, handleDateClick } ) {

    const { location } = useParams();

    const [ image, setImage ] = useState("");

    useEffect (() => {
        if(location === 'Gale Crater'){
            axios('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',{
                params: {
                sol: 3780,
                camera:'MAST',
                page: 1,
                api_key: 'dma6KHcns7nZ3JNb1mlfCB0iDvzaO3rMa0WvqBZ3'
                }
              })
              .then((jsonResult) => {
                console.log(jsonResult.data.photos[7])
                setImage(jsonResult.data.photos[7].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }
        if(location === 'Gusev Crater'){
            axios('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos',{
                params: {
                sol: 1274,
                camera:'PANCAM',
                page: 1,
                api_key: 'dma6KHcns7nZ3JNb1mlfCB0iDvzaO3rMa0WvqBZ3'
                }
              })
              .then((jsonResult) => {
                console.log(jsonResult.data.photos[0])
                setImage(jsonResult.data.photos[0].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }
    
        if(location === 'Jezero Crater'){
            axios('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos',{
                params: {
                sol: 420,
                camera:'NAVCAM_RIGHT',
                page: 1,
                api_key: 'dma6KHcns7nZ3JNb1mlfCB0iDvzaO3rMa0WvqBZ3'
                }
              })
              .then((jsonResult) => {
                console.log(jsonResult.data.photos[22])
                setImage(jsonResult.data.photos[22].img_src)
              })
              .catch((error)=> {
                alert('Error!')
              })
        }

        if(location === 'Meridiani Planum'){
            axios('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos',{
                params: {
                sol: 4558,
                camera:'PANCAM',
                page: 1,
                api_key: 'dma6KHcns7nZ3JNb1mlfCB0iDvzaO3rMa0WvqBZ3'
                }
              })
              .then((jsonResult) => {
                console.log(jsonResult.data.photos[15])
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
