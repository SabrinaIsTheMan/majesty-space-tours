import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './components/Home';
import AboutAlt from './components/AboutAlt';

import Layout from './components/Layout';
import Selection from './components/Selection';
import Location from './components/Location';
import Dates from './components/Dates';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import axios from 'axios';

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
  const handleDateClick = () => {
     // useEffect (() => {
    //     axios({

    //         // asteroid api here
    //         // setTourDates(array of dates here)

    //     })}, [])
    console.log("date click");
  }

  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutAlt />} />

        <Route element={<Layout count={count}/>}>
          <Route path="/tours" element={<Selection tourArray={tourArray} handleTourClick={handleTourClick} count={count} />}/>
          <Route path="/tours/:location" element={<Location selectedTour={selectedTour} handleDateClick={handleDateClick} />} />
          <Route path="/tours/:location/dates" element={<Dates tourDates={tourDates} />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
