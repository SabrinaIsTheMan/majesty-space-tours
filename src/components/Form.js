import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';


function Form() {
// useState to set the variable that we will be manipulating based on selection
    const [tour, setTour] = useState([])
// useEffect used to make our API Call as a side effect of user tour selection
    useEffect (()=> {
        axios({
            url: 'https://images-api.nasa.gov',
            params: {
                api_key:'MjjVIPUNTzqep8Nk1KqN4vCoVeEX6Nm8oezDWWqB',
                
            }
        }).then(function(response){
            console.log(response.data.results)
            const nasaResults = response.data.results; 
            console.log(nasaResults)
        })
    }, setTour)
// Function that will listen to our the vakue selected by user and use State to render the results
    handleSubmit = (event) => {
        setTour(event.target.value);
    }

    return (
        <div 
        onSubmit={handleSubmit}
        className="form">
            <label for="tours">Choose your Tour:</label>

            <select name="tours" id="cars">
            <option value="#">Tour 1</option>
            <option value="#">Tour 2</option>
            <option value="#">Tour 3</option>
            <option value="#">Tour 4</option>
            </select> 
        </div>
    );
}

export default Form;
