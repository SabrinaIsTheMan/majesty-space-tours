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
      locationName: 'Mars',
      altText: 'image of Mars tour',
      description: 'description of Mars tour'
    },
    {
      locationName: 'Mercury',
      altText: 'image of Mercury tour',
      description: 'description of Mercury tour'
    },
    {
      locationName: 'Moon',
      altText: 'image of Moon tour',
      description: 'description of Moon tour'
    }];

  const [selectedTour, setSelectedTour] = useState({});
  const [tourDates, setTourDates] = useState([]);
  const [count, setCount] = useState(3);

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
    let obj = tourArray.find(o => o.locationName == tour);
    setSelectedTour(obj);
    subtractCount();
  }

  // handles click on tour dates, triggers api call for asteroids
  const handleDateClick = () => {
    // useEffect (() => {
    // axios({
    //         url: 'https://api.nasa.gov/neo/rest/v1/feed',
    //         params: {
    //             api_key: 'MjjVIPUNTzqep8Nk1KqN4vCoVeEX6Nm8oezDWWqB',
    //             start_date: ''
    //         }
    //     }).then(function (response) {
    //         console.log(response.data.results)
    //         const nasaResults = response.data.results;
    //         console.log(nasaResults);
    //               setTourDates(nasaResults);
    //     })}, [])
  }

  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<Layout count={count}/>}>
          <Route path="/tours" element={<Selection tourArray={tourArray} handleTourClick={handleTourClick} count={count} />}>
            <Route path="*" element={<Error />} />
            <Route path=":location" element={<Location selectedTour={selectedTour} handleDateClick={handleDateClick} />}>
              <Route path="dates" element={<Dates tourDates={tourDates} />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
