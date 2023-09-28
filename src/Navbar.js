import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DG.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/markup'>
        <li className="nav-item">
          <a className="nav-link active"  aria-current="page"  style={{ textDecoration: 'none'  }} >Markup</a>
        </li>
        </Link>
        <Link to='/dishcost'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> Dish Cost</a>
        </li>
        </Link>
        <Link to='/conversion'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> Conversion</a>
        </li>
        </Link>
        <Link to='/nutrition'>
        <li className="nav-item">
          <a className="nav-link active"  aria-current="page"  style={{ textDecoration: 'none'  }} >Nutrition</a>
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