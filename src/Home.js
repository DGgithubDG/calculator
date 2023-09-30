import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function Home() {
  const gifUrl = 'https://media3.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  return (
    <div >
      <Navbar />
      <div className="background" style={backgroundImageStyle}>
      <h1> <div className=' g text-center' style={{color: 'white'}}>Home</div></h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// https://media.tenor.com/5K5_SlXFOAwAAAAC/slowly-moving.gif