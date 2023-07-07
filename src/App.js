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
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [galeImage, setGaleImage] = useState('');
const [gusevImage, setGusevImage] = useState('');
const [jezeroImage, setJezeroImage] = useState('');
const [meridianiImage, setMeridianiImage] = useState('');

const imageApiURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
const asteroidApiUrl = "https://api.nasa.gov/neo/rest/v1/feed/";

// other props
const [selectedTour, setSelectedTour] = useState({});
const [selectedDate, setSelectedDate] = useState("");
const [datesObject, setDatesObject] = useState({});

// hamburger menu
const [active, setActive] = useState(false);

// visit counter
const [count, setCount] = useState(3);

// location info
const tourArray = [
  {
    locationName: 'Gale Crater',
    altText: 'image of Gale Crater',
    imageUrl: `${galeImage}`,
    description1: 'Embark on the ultimate galatic escape and experience the extraordinary Gale Crater on Mars, where ancient secrets and wonders await. Travel in luxury aboard our private spacecraft, enjoy opulent Martian accommodations, and indulge in expert-guided explorations of the crater\'s mysteries.',
    description2: 'Witness the planet\'s stunning landscapes, encounter exotic flora and fauna, and pamper yourself with Martian-inspired spa treatments and gourmet dining experiences. Limited to a select few, this exclusive adventure promises to redefine your understanding of the universe. Don\'t miss your chance to be among the elite pioneers to unravel the enigmatic tapestry of Mars!'
  },
  {
    locationName: 'Gusev Crater',
    altText: 'image of Gusev Crater',
    imageUrl: `${gusevImage}`,
    description1: 'Unleash your curiosity and embark on a captivating journey to the Gusev Crater on Mars. Marvel at the breathtaking expanse of this ancient volcanic caldera and explore its unique geological formations.',
    description2: 'Experience the thrill of venturing into the depths of this enigmatic crater, as our expert guides reveal the secrets of Mars\' volcanic past. Immerse yourself in the ethereal beauty of the planet\'s surface, where rugged terrains and mesmerizing vistas await your discovery. Prepare for an otherworldly adventure that will ignite your sense of wonder and leave you in awe of the universe.'
  },
  {
    locationName: 'Jezero Crater',
    altText: 'image of Jezero Crater',
    imageUrl: `${jezeroImage}`,
    description1: 'Embark on an interstellar odyssey to the Jezero Crater, a mesmerizing Martian basin with a captivating history. Follow in the footsteps of ancient explorers and unravel the secrets of Mars\' past. Traverse the crater\'s rocky terrains, witness the remnants of ancient riverbeds, and explore the possibilities of past microbial life.',
    description2: 'Immerse yourself in the Martian landscape, with its rugged beauty and surreal tranquility. As you gaze at the Earth from the planet, a profound sense of perspective will wash over you, reminding you of the fragility and interconnectedness of our cosmic journey.'
  },
  {
    locationName: 'Meridiani Planum',
    altText: 'image of Meridiani Planum',
    imageUrl: `${meridianiImage}`,
    description1: 'Experience the wonders of the Meridiani Planum, a celestial gem on Mars\' surface. Marvel at the vast plains, where ancient volcanic activity has sculpted the landscape into a surreal masterpiece. Delve into the mysteries of the region, as our expert guides unveil the secrets of Mars\' geological history.',
    description2: 'Witness the striking iron oxide-rich soil, reminiscent of the Red Planet itself. Engage in extraterrestrial exploration, discovering unique rock formations and relishing the awe-inspiring views of the Martian horizon. Let the tranquility of Meridiani Planum inspire your soul and ignite your imagination on this extraordinary intergalactic escapade.'
  }];

const toggleMenu = () => {
  setActive(!active);

  if (active) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  };
}

function setWithExpiry(key, ttl) {
  const now = new Date();

  // object that contains expiry time
  const expiry = now.getTime() + ttl;

  localStorage.setItem(key, JSON.stringify(expiry));
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
        return; //if it doesn't exist, who cares, stop the function
    }

    const storedItem = JSON.parse(itemStr);
    const now = new Date();

    // compare expiry time of stored item with current time
    if (now.getTime() > storedItem) {
          // if storedItem is expired, delete item from storage and return null
          localStorage.removeItem(key);
      }
    else if (now.getTime() < storedItem) {
      // if it's not expired, make sure count is 0 so we can continue to restrict access
      setCount(0);
    }
}

const handleTourClick = (event) => {
  const tour = event.target.value;
  let tourObject = tourArray.find(tourItem => tourItem.locationName === tour);
  setSelectedTour(tourObject);
  if (count === 1) {
    setWithExpiry('restrictUntil', (3600000 * 24)); //1 hours worth of milliseconds, timees 24 hours
    setCount(0);
  } else {
    setCount(count - 1);
  };
}

const handleDateClick = (value) => {

  const selectedYear = value.getFullYear();
  const selectedMonth = (value.getMonth() + 1).toString().padStart(2, 0);
  const selectedDay = value.getDate().toString().padStart(2, 0);

  setSelectedDate(`${selectedYear}-${selectedMonth}-${selectedDay}`);
}

useEffect(() => {

  getWithExpiry("restrictUntil");

  const fetchImageData = async () => {
    try {
    const imageRes1 = await axios.get(`${imageApiURL}curiosity/photos`, {
      params: {
      sol: 3780,
      camera:'MAST',
      page: 1,
      api_key: process.env.REACT_APP_IMAGE_API_KEY
      }
    })

    const imageRes2 = await axios.get(`${imageApiURL}spirit/photos`,{
      params: {
      sol: 1274,
      camera:'PANCAM',
      page: 1,
      api_key: process.env.REACT_APP_IMAGE_API_KEY
      }
    })

    const imageRes3 = await axios.get(`${imageApiURL}perseverance/photos`,{
      params: {
      sol: 420,
      camera:'NAVCAM_RIGHT',
      page: 1,
      api_key: process.env.REACT_APP_IMAGE_API_KEY
      }
    })

    const imageRes4 = await axios.get(`${imageApiURL}opportunity/photos`,{
      params: {
      sol: 4558,
      camera:'PANCAM',
      page: 1,
      api_key: process.env.REACT_APP_IMAGE_API_KEY
      }
    })

    setGaleImage(imageRes1.data.photos[7].img_src);
    setGusevImage(imageRes2.data.photos[0].img_src);
    setJezeroImage(imageRes3.data.photos[22].img_src);
    setMeridianiImage(imageRes4.data.photos[15].img_src);
  }
  catch (error) {
    console.log(error)
  }
}

  // currentDate for asteroid, days 1-7
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = (today.getMonth() + 1).toString().padStart(2, 0); //this makes sure single digits start with 0 too (e.g. June is 06 instead of 6)
  const todayDay = today.getDate().toString().padStart(2, 0);

  const currentDate = `${todayYear}-${todayMonth}-${todayDay}`;

  // nextWeek for asteroid, days 7-14
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextWeekYear = nextWeek.getFullYear();
  const nextWeekMonth = (nextWeek.getMonth() + 1).toString().padStart(2, 0);
  const nextWeekDay = nextWeek.getDate().toString().padStart(2, 0);

  const nextWeekDate = `${nextWeekYear}-${nextWeekMonth}-${nextWeekDay}`;

  // 2 weeks for asteroid, days 14-21
  const fortnight = new Date();
  fortnight.setDate(fortnight.getDate() + 14);
  const fortnightYear = fortnight.getFullYear();
  const fortnightMonth = (fortnight.getMonth() + 1).toString().padStart(2, 0);
  const fortnightDay = fortnight.getDate().toString().padStart(2, 0);

  const fortnightDate = `${fortnightYear}-${fortnightMonth}-${fortnightDay}`;

  // lastWeek for asteroid, days 21-28
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() + 21);
  const lastWeekYear = lastWeek.getFullYear();
  const lastWeekMonth = (lastWeek.getMonth() + 1).toString().padStart(2, 0);
  const lastWeekDay = lastWeek.getDate().toString().padStart(2, 0);

  const lastWeekDate = `${lastWeekYear}-${lastWeekMonth}-${lastWeekDay}`;

  // async api call for non-asteroids dates (4 weeks worth)
  const getAsteroidData = async () => {

    try {
      const res1 = await axios.get(asteroidApiUrl, {
        params: {
          start_date: currentDate,
          api_key: process.env.REACT_APP_ASTEROID_API_KEY
        }
      })

      const res2 = await axios.get(asteroidApiUrl, {
        params: {
          start_date: nextWeekDate,
          api_key: process.env.REACT_APP_ASTEROID_API_KEY
        }
      })

      const res3 = await axios.get(asteroidApiUrl, {
        params: {
          start_date: fortnightDate,
          api_key: process.env.REACT_APP_ASTEROID_API_KEY
        }
      })

      const res4 = await axios.get(asteroidApiUrl, {
        params: {
          start_date: lastWeekDate,
          api_key: process.env.REACT_APP_ASTEROID_API_KEY
        }
      })

      const resultObject = { //spread syntax to push all elements from a second array into the first one
        ...res1.data.near_earth_objects,
        ...res2.data.near_earth_objects,
        ...res3.data.near_earth_objects,
        ...res4.data.near_earth_objects
      };

      setDatesObject(resultObject);
      }
      catch (error) {
        console.log(error);
      }
  }

    getAsteroidData();
    fetchImageData();

}, []);

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

        <Route path="/tours/:location/dates" element={<Dates handleDateClick={handleDateClick} selectedDate={selectedDate} location={selectedTour.locationName} datesObject={datesObject} />} />
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
