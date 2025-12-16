// App.js
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import RoomsSection from './component/RoomSection';
import AmenitiesSection from './component/Aminities';
import DiningSection from './component/Dining';
import ContactSection from './component/Contact';
import Footer  from "./component/Footer"

function App() {


  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar/>
      <HeroSection />
      <RoomsSection/>
      <AmenitiesSection/>
      <DiningSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
