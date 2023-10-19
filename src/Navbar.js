import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={backgroundImageStyle}>
  <div className="container-fluid">
  <Link to="/" style={{ textDecoration: 'none' }}>
  <a className="navbar-brand" href="#" style={{ color: 'white' }}>
    <span className="hover-text">DG.</span>
  </a>
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon custom-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <Link to='/conversion'style={{ textDecoration: 'none'  }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{  color: 'white' }}> <span className="hover-text"> Conversion</span></a>
        </li>
        </Link>
    
        <li class="nav-item dropdown" style={{color: 'white'}}>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
            Calculators
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to='/nutrition'style={{ textDecoration: 'none'  }}> <li><a class="dropdown-item" aria-current="page"   ><span className="hover-text"> Gross Profit</span></a></li></Link>
          <Link to='/commision'style={{ textDecoration: 'none'  }}> <li><a class="dropdown-item" aria-current="page"   ><span className="hover-text"> Commission</span></a></li></Link>
            <li><hr class="dropdown-divider"/></li>
            <Link to='/markup'style={{ textDecoration: 'none'  }}> <li><a class="dropdown-item" aria-current="page"   ><span className="hover-text"> Markup</span></a></li></Link>
            </ul>
        </li>
      </ul>
      <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        </ul>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar