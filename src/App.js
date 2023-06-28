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
      description: 'Embark on the ultimate Martian escape as a privileged billionaire. Experience the extraordinary Gale Crater on Mars, where ancient secrets and wonders await. Travel in luxury aboard our private spacecraft, enjoy opulent Martian accommodations, and indulge in expert-guided explorations of the crater\'s mysteries. Witness stunning Martian landscapes, encounter exotic flora and fauna, and pamper yourself with Martian-inspired spa treatments and gourmet dining experiences. Limited to a select few, this exclusive adventure promises to redefine your understanding of the universe. Don\'t miss your chance to be among the elite pioneers to unravel the enigmatic tapestry of Mars. Secure your place among the stars today!'
    },
    {
      locationName: 'Gusev Crater',
      altText: 'image of Mercury tour',
      description: 'Unleash your curiosity and embark on a captivating journey to the Gusev Crater on Mercury. Marvel at the breathtaking expanse of this ancient volcanic caldera and explore its unique geological formations. Experience the thrill of venturing into the depths of this enigmatic crater, as our expert guides reveal the secrets of Mercury\'s volcanic past. Immerse yourself in the ethereal beauty of Mercury\'s surface, where rugged terrains and mesmerizing vistas await your discovery. Prepare for an otherworldly adventure that will ignite your sense of wonder and leave you in awe of the universe.'
    },
    {
      locationName: 'Jezero Crater',
      altText: 'image of Moon tour',
      description: 'Embark on a lunar odyssey to the Jezero Crater, a mesmerizing lunar basin with a captivating history. Follow in the footsteps of ancient explorers and unravel the secrets of the Moon\'s past. Traverse the crater\'s rocky terrains, witness the remnants of ancient riverbeds, and explore the possibilities of past microbial life. Immerse yourself in the lunar landscape, with its rugged beauty and surreal tranquility. As you gaze at the Earth from the Moon, a profound sense of perspective will wash over you, reminding you of the fragility and interconnectedness of our cosmic journey.'
    },
    {
      locationName: 'Meridiani Planum',
      altText: 'image of Moon tour',
      description: 'Experience the wonders of the Meridiani Planum, a celestial gem on the Moon\'s surface. Marvel at the vast plains, where ancient volcanic activity has sculpted the landscape into a surreal masterpiece. Delve into the mysteries of the region, as our expert guides unveil the secrets of the Moon\'s geological history. Witness the striking iron oxide-rich soil, reminiscent of the Red Planet itself. Engage in lunar exploration, discovering unique rock formations and relishing the awe-inspiring views of the lunar horizon. Let the tranquility of Meridiani Planum inspire your soul and ignite your imagination on this extraordinary lunar escapade.'
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
