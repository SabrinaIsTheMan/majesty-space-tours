import '../styles/Location.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import LoadingOverlay from '@speedy4all/react-loading-overlay';

function Location({ selectedTour } ) {

  const [loading, setLoading] = useState(true);

  const { location } = useParams();
  const [ image, setImage ] = useState("");

  const apiURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

    useEffect (() => {
                    
          if(location === 'Gale Crater'){   
              async function fetchData() {
                try { 
                const response = await axios.get(`${apiURL}curiosity/photos`, {
                  params: {
                  sol: 3780,
                  camera:'MAST',
                  page: 1,
                  api_key: process.env.REACT_APP_API_KEY
                  }
                  })
                  .then((jsonResult) => {  
                    setImage(jsonResult.data.photos[7].img_src);
                    setLoading(false);
                  })
                } catch (error){
                  alert('Error!')
                }             
              }
          fetchData();
          }
                      

          if(location === 'Gusev Crater'){
            async function fetchData() {
              try {
              const response = axios.get(`${apiURL}spirit/photos`,{
                params: {
                sol: 1274,
                camera:'PANCAM',
                page: 1,
                api_key: process.env.REACT_APP_API_KEY
                }
                })
                .then((jsonResult) => {
                  setImage(jsonResult.data.photos[0].img_src);
                  setLoading(false);
                })
              } catch (error){
                alert('Error!')
              }
            }
          fetchData()  
          }

          if(location === 'Jezero Crater'){
            async function fetchData() {
              try {
              const response = axios.get(`${apiURL}perseverance/photos`,{
                  params: {
                  sol: 420,
                  camera:'NAVCAM_RIGHT',
                  page: 1,
                  api_key: process.env.REACT_APP_API_KEY
                  }
                })
                .then((jsonResult) => {
                  setImage(jsonResult.data.photos[22].img_src);
                  setLoading(false);
                })
              } catch (error){
                alert('Error!')
              }
            }
          fetchData()
          }

          if(location === 'Meridiani Planum'){
            async function fetchData(){
              try {
              const response = axios.get(`${apiURL}opportunity/photos`,{
                  params: {
                  sol: 4558,
                  camera:'PANCAM',
                  page: 1,
                  api_key: process.env.REACT_APP_API_KEY
                  }
                })
                .then((jsonResult) => {
                  setImage(jsonResult.data.photos[15].img_src);
                  setLoading(false);
                })
              } catch (error){
                alert('Error!')
              }
            }
          fetchData()
          }

        

    }, [location])

    

    return (
        <div className="location">
          <div className="wrapper">
            {/* <LoadingOverlay active={loading} spinner> */}
              <div className="imgContainer">
                <img src={image} alt={selectedTour.altText} />
              </div>
            {/* </LoadingOverlay> */}

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
