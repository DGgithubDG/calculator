import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function Home() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  return (
    <div >
      <div className="background" style={backgroundImageStyle}>
      <Navbar />
      <h1> <div className=' g text-center' style={{color: 'white'}}>Home
      <h5> <div className=' g text-center' style={{color: 'white'}}>In this page the S&P 500 companies and their share prices will be displayed</div></h5>
      </div></h1>
      <Footer />

      </div>
    </div>
  );
}

export default Home;

// https://media.tenor.com/5K5_SlXFOAwAAAAC/slowly-moving.gif