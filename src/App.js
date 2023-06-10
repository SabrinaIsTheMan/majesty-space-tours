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
import { useState } from 'react';

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

  // handles click on tour location, find object in tourArray that matches, and saves oject to selectedTours
  const handleTourClick = (event) => {
    const tour = event.target.value;
    let obj = tourArray.find(o => o.locationName == tour);
    setSelectedTour(obj);
  }

  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route element={<Layout />}>
          <Route path="/tours" element={<Selection tourArray={tourArray} handleTourClick={handleTourClick} />}>
            <Route path=":location" element={<Location selectedTour={selectedTour} />}>
              <Route path="dates" element={<Dates />} />
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
