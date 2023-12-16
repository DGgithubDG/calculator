import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import MouseTracker from './MouseTracker';
import Stock from './Stock';
import Footerfixed from './FooterFixed';

function Home() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
    minHeight: '100vh', // Set the minimum height to 100% of the viewport height
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
    <div style={backgroundImageStyle} className='home-page'>
      <div >
        <Navbar />
        <h1>
          <div className='text-center' style={{ color: 'white' }}>
            
            {isMarketOpen() ? (
              <h3 className='stockpadbot'>Market is Open  </h3>
            ) : (
              <h3 className='stockpadbot'>Market is Closed  </h3>
            )}
          
            <Stock />
            {/* <MouseTracker /> */}
            {/* <div className='' style={{ marginBottom: '3rem'}}></div> */}
            <ul></ul>
     
          </div>
        </h1>
      </div>
      <Footer />

    </div>
    <div style={backgroundImageStyle} className='home-page2'>
      <Navbar />
<h1 className='text-center' style={{color: 'white'}}>      The data is only visible on large displays </h1>
<ul></ul>
<div className=' d-flex justify-content-center'><i className='text-center' style={{color: 'white'}}>* Note this is only the case for this page, all of the other pages are responsive for any device.</i>
</div>
      <Footerfixed />
    </div>
    </div>
  );
}

export default Home;
