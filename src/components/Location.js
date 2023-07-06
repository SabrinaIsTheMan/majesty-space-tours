import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingOverlay from '@speedy4all/react-loading-overlay';

function Location({ selectedTour, loading } ) {

  const { location } = useParams();

    return (
        <div className="location">
          <div className="wrapper">
            <LoadingOverlay active={loading} spinner>
              <div className="imgContainer">
                <img src={selectedTour.imageUrl} alt={selectedTour.altText} />
              </div>
            </LoadingOverlay>

            <div className="locationInfo">
              <h3>{location}</h3>
              <p>{selectedTour.description}</p>

              <Link to="dates">
                <button type="button" value="Tour Dates">Tour Dates</button>
              </Link>

              <Link to="/tours">
                <button type="button" className='backButton'>Back</button>
              </Link>
            </div>
          </div>
        </div>
    );
}

export default Location;
