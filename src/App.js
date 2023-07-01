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

import SignUpPage from './components/SignUpPage';
import SearchPage from './components/SearchPage';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // location info
  const tourArray = [
    {
      locationName: 'Gale Crater',
      altText: 'image of Gale Crater',
      description: 'Embark on the ultimate galatic escape and experience the extraordinary Gale Crater on Mars, where ancient secrets and wonders await. Travel in luxury aboard our private spacecraft, enjoy opulent Martian accommodations, and indulge in expert-guided explorations of the crater\'s mysteries. Witness the planet\'s stunning landscapes, encounter exotic flora and fauna, and pamper yourself with Martian-inspired spa treatments and gourmet dining experiences. Limited to a select few, this exclusive adventure promises to redefine your understanding of the universe. Don\'t miss your chance to be among the elite pioneers to unravel the enigmatic tapestry of Mars!'
    },
    {
      locationName: 'Gusev Crater',
      altText: 'image of Gusev Crater',
      description: 'Unleash your curiosity and embark on a captivating journey to the Gusev Crater on Mars. Marvel at the breathtaking expanse of this ancient volcanic caldera and explore its unique geological formations. Experience the thrill of venturing into the depths of this enigmatic crater, as our expert guides reveal the secrets of Mars\' volcanic past. Immerse yourself in the ethereal beauty of the planet\'s surface, where rugged terrains and mesmerizing vistas await your discovery. Prepare for an otherworldly adventure that will ignite your sense of wonder and leave you in awe of the universe.'
    },
    {
      locationName: 'Jezero Crater',
      altText: 'image of Jezero Crater',
      description: 'Embark on an interstellar odyssey to the Jezero Crater, a mesmerizing Martian basin with a captivating history. Follow in the footsteps of ancient explorers and unravel the secrets of Mars\'s past. Traverse the crater\'s rocky terrains, witness the remnants of ancient riverbeds, and explore the possibilities of past microbial life. Immerse yourself in the Martian landscape, with its rugged beauty and surreal tranquility. As you gaze at the Earth from the planet, a profound sense of perspective will wash over you, reminding you of the fragility and interconnectedness of our cosmic journey.'
    },
    {
      locationName: 'Meridiani Planum',
      altText: 'image of Meridiani Planum',
      description: 'Experience the wonders of the Meridiani Planum, a celestial gem on Mars\' surface. Marvel at the vast plains, where ancient volcanic activity has sculpted the landscape into a surreal masterpiece. Delve into the mysteries of the region, as our expert guides unveil the secrets of Mars\' geological history. Witness the striking iron oxide-rich soil, reminiscent of the Red Planet itself. Engage in extraterrestrial exploration, discovering unique rock formations and relishing the awe-inspiring views of the Martian horizon. Let the tranquility of Meridiani Planum inspire your soul and ignite your imagination on this extraordinary intergalactic escapade.'
    }];

  // hamburger menu
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
    document.body.style.overflow = `${active ? "" : "hidden"}`;
  };

  // props
  const [selectedTour, setSelectedTour] = useState({});
  const [count, setCount] = useState(3);
  const [selectedDate, setSelectedDate] = useState("");

  // can only check out 3 locations
  const subtractCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  // handles click on tour location, find object in tourArray that matches, and saves object to selectedTours state
  const handleTourClick = (event) => {
    const tour = event.target.value;
    let obj = tourArray.find(o => o.locationName === tour);
    setSelectedTour(obj);
    subtractCount();
  }

  // handles click on date and saves it in state
  const handleDateClick = (value) => {

    const selectedYear = value.getFullYear();
    const selectedMonth = (value.getMonth() + 1).toString().padStart(2, 0);
    const selectedDay = value.getDate().toString().padStart(2, 0);

    setSelectedDate(`${selectedYear}-${selectedMonth}-${selectedDay}`);
  }

  return (
    <div className="App">
      <Menu toggleMenu={toggleMenu} active={active} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        {/* this gives these pages the count bubble at the bottom with Outlet in Layout.js */}
        <Route element={<Layout count={count} />}>
          <Route path="/tours" element={<Selection tourArray={tourArray} handleTourClick={handleTourClick} count={count} />} />

          <Route path="/tours/:location" element={<Location selectedTour={selectedTour} />} />

          <Route path="/tours/:location/dates" element={<Dates handleDateClick={handleDateClick} selectedDate={selectedDate} location={selectedTour.locationName} />} />
        </Route>

        <Route path="/tours/:location/dates/:date" element={<SignUpPage location={selectedTour.locationName} tourDate={selectedDate} />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
