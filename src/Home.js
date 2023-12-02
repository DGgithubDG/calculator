import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import MouseTracker from './MouseTracker';
import Stock from './Stock';

function Home() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  const getCurrentGMTTime = () => {
    const now = new Date();
    return now.getUTCHours() * 100 + now.getUTCMinutes();
  };

  const isMarketOpen = () => {
    const currentTime = getCurrentGMTTime();
    const currentDay = new Date().getUTCDay();
  
    // Check if it's a weekend (Saturday or Sunday)
    if (currentDay === 0 /* Sunday */ || currentDay === 6 /* Saturday */) {
      return false;
    }
  
    // Check if it's within market hours on weekdays
    return currentTime >= 1430 && currentTime <= 2100;
  };
  

  return (
    <div>
      <div className="background" style={backgroundImageStyle}>
        <Navbar />
        <h1>
          <div className='text-center' style={{ color: 'white' }}>
            
            {isMarketOpen() ? (
              <h5 className='stockpadbot'>Market is Open 🟢 </h5>
            ) : (
              <h5 className='stockpadbot'>Market is Closed 🔴 </h5>
            )}
            <h5>
              {/* <div className='text-center' style={{ color: 'white' }}>
                In this page, the S&P 500 companies and their share prices will be displayed
              </div> */}
            </h5>
            <Stock />
            {/* <MouseTracker /> */}
            <div className='gg'></div>
          </div>
        </h1>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
