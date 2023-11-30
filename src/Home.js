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
    return currentTime >= 1430 && currentTime <= 2100;
  };

  return (
    <div>
      <div className="background" style={backgroundImageStyle}>
        <Navbar />
        <h1>
          <div className='text-center' style={{ color: 'white' }}>
            Home
            {isMarketOpen() ? (
              <h3>Market is Open (14:30 to 21:00 GMT)</h3>
            ) : (
              <h3>Market is Closed (21:01 to 14:29 GMT)</h3>
            )}
            <h5>
              <div className='text-center' style={{ color: 'white' }}>
                In this page, the S&P 500 companies and their share prices will be displayed
              </div>
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
