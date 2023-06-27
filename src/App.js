import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './components/Home';
import About from './components/About';

import Layout from './components/Layout';
import Selection from './components/Selection';
import Location from './components/Location';
import Dates from './components/Dates';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const tourArray = [
    {
      locationName: 'Gale Crater',
      altText: 'image of Mars tour',
      description: 'description of Mars tour'
    },
    {
      locationName: 'Gusev Crater',
      altText: 'image of Mercury tour',
      description: 'description of Mercury tour'
    },
    {
      locationName: 'Jezero Crater',
      altText: 'image of Moon tour',
      description: 'description of Moon tour'
    },
    {
      locationName: 'Meridiani Planum',
      altText: 'image of Moon tour',
      description: 'description of Moon tour'
    }];

  const [selectedTour, setSelectedTour] = useState({});
  const [tourDates, setTourDates] = useState([]);
  const [count, setCount] = useState(3);

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = (date.getMonth() + 1).toString().padStart(2, 0); //this makes sure single digits start with 0 too (e.g. June is 06 instead of 6)
  const currentDay = date.getDate().toString().padStart(2, 0);

  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const subtractCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  // handles click on tour location, find object in tourArray that matches, and saves object to selectedTours
  const handleTourClick = (event) => {
    const tour = event.target.value;
    let obj = tourArray.find(o => o.locationName === tour);
    setSelectedTour(obj);
    subtractCount();
  }

  // handles click on tour dates, triggers api call for asteroids
  useEffect (() => {
      axios('https://api.nasa.gov/neo/rest/v1/feed/', {
        params: {
          start_date: `${currentDate}`,
          api_key: process.env.REACT_APP_API_KEY
        }
      })
      .then((res) => {

        const datesObject = res.data.near_earth_objects;
        // the payload is an object (the week of dates), where the key:value pairs are date:array of objects (asteroids)
        // we need to loop through the days and look for asteroids that are dangerous - if there is a dangerous asteroid, we delete the day from the week so that no tours happen

        // we don't want to deal with keys, so we can use a for-of loop that iterates through values

        for (const [date, asteroids] of Object.entries(datesObject)) {
          // Object.entries returns an array of [key, value] pairs (converts the first layer of the object to an array)

          let dangerous = asteroids.some(asteroid => asteroid.is_potentially_hazardous_asteroid)
          // .some() checks for anything that contains .is_potentially_hazardous_asteroid===true aka if one true comes up, that whole date object is marked dangerous (we don't need to check every asteroid, just any asteroid)

          if (dangerous) {
            delete datesObject[date];
          }
        }

        const filteredDatesArray = Object.keys(datesObject).sort();
        // Object.keys returns an array of keys (the dates)
        // this isn't in order so we need to sort the dates before we set state and map through it in the return

        setTourDates(filteredDatesArray);
      });
    }, []);

  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route element={<Layout count={count}/>}>
          <Route path="/tours" element={<Selection tourArray={tourArray} handleTourClick={handleTourClick} count={count} />}/>
          <Route path="/tours/:location" element={<Location selectedTour={selectedTour} />} />
          <Route path="/tours/:location/dates" element={<Dates tourDates={tourDates} />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
