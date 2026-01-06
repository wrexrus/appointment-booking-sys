import React from 'react';
import Navbar from './components/home/Navbar';
import Booking from './pages/Booking';
import Home from './components/home/Home';
import Services from './components/middle/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Booking />
    </div>
  );
};

export default App;
