import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FallingStars from './FallingStars';
import './App.css';

function Home() {
  return (
    <div>
      <FallingStars /> {/* Render FallingStars component first */}
      <Navbar />
      <h1> <div className='g text-center'>Home</div></h1>

      {/* Your other content */}
      <div>
        {/* Other content goes here */}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
