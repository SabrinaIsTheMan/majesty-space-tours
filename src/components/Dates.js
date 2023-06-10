import '../styles/Dates.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Dates() {

    const [dates, setDates] = useState({});

    // useEffect(() => {
    //     axios({
    //     //     url: 'https://api.nasa.gov/neo/rest/v1/feed',
    //     //     params: {
    //     //         api_key: 'MjjVIPUNTzqep8Nk1KqN4vCoVeEX6Nm8oezDWWqB',
    //     //         start_date: ''
    //     //     }
    //     // }).then(function (response) {
    //     //     console.log(response.data.results)
    //     //     const nasaResults = response.data.results;
    //     //     console.log(nasaResults);
    //     // })
    //     })}, [setDates]);

    return (
        <div className="dates">

            <h2>Location 1</h2>
            <h2>Departure Dates</h2>
            <h4>Our clients' safety is paramount - all departure dates are free of scheduled near-Earth objects and asteroids.</h4>

            <ul className="options">

                {dates.map(({ date }) =>
                <li key={date}>
                    <button value={ date }>{ date }</button>
                </li>
                )}

            </ul>
        </div>
    );
}

export default Dates;
