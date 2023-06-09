import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Error from './components/Error';

import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Gallery />}>
          <Route path=":location" element={<Location />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
