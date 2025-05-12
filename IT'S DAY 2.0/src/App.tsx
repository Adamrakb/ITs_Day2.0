import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CountdownTimer from './components/CountdownTimer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "IT's Day 2025 - Tech Workshops & Competitions";
    
    // Optionally update favicon (if you have a custom favicon)
    // const favicon = document.querySelector('link[rel="icon"]');
    // if (favicon) {
    //   favicon.setAttribute('href', '/custom-favicon.ico');
    // }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      
      {/* Countdown Timer - positioned relatively to Hero section */}
      <div className="bg-gray-50 py-10 px-4">
        <CountdownTimer />
      </div>
      
      <Events />
      <Schedule />
      <Speakers />
      <Registration />
      <Footer />
      
      {/* Floating CTA Button */}
      <FloatingCTA />
    </div>
  );
}

export default App;