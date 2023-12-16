import React from 'react'

function Footerfixed() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };
  return (
    <div>
        <footer className="bg-light text-center text-lg-start fixed-bottom" style={backgroundImageStyle}>
  <div className="text-center p-3" style={{  color: 'white' }}>
    © 2023 Copyright: DG.
    <a className="text-light" href="https://denisng.netlify.com/" >About Me</a>
  </div>
</footer>
    </div>
  )
}

export default Footerfixed;