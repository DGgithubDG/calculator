import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const gifUrl = 'https://media3.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={backgroundImageStyle}>
  <div className="container-fluid">
  <Link to='/'style={{ textDecoration: 'none'  }}>
    <a className="navbar-brand" href="#" style={{  color: 'white' }}>DG.</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon custom-toggler-icon" ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/markup'style={{ textDecoration: 'none'  }}>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" style={{  color: 'white' }}>Markup</a>
        </li>
        </Link>
        <Link to='/dishcost'style={{ textDecoration: 'none'  }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{  color: 'white' }} > Dish Cost</a>
        </li>
        </Link>
        <Link to='/conversion'style={{ textDecoration: 'none'  }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{  color: 'white' }}> Conversion</a>
        </li>
        </Link>
        <Link to='/nutrition'style={{ textDecoration: 'none'  }}>
        <li className="nav-item">
          <a className="nav-link active"  aria-current="page"  style={{  color: 'white' }} >Nutrition</a>
        </li>
        </Link>
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