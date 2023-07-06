import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import LoadingOverlay from '@speedy4all/react-loading-overlay';
import { useState, useEffect } from 'react';

function Location({ selectedTour } ) {

  const [loading, setLoading] = useState(true);

  const { location } = useParams();

  useEffect(() => {
      if (selectedTour.imageUrl === ""){
        return
      } else {
        setLoading(false);
      }
  }, [selectedTour.imageUrl]);

    return (
        <div className="location">
          <div className="wrapper">
            <LoadingOverlay active={loading} spinner>
              <div className="imgContainer">
                <img src={selectedTour.imageUrl} alt={selectedTour.altText} />
              </div>
            </LoadingOverlay>

            <div className="locationInfo">
              <h3>{selectedTour.locationName}</h3>
              <p>{selectedTour.description1}</p>
              <p>{selectedTour.description2}</p>

              <div className="locationPageButtons">
              <Link to="dates">
                <button type="button" value="Tour Dates">Tour Dates</button>
              </Link>

              <Link to="/tours">
                <button type="button" className='backButton'>Back</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Location;
