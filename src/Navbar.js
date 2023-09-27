import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DG.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to='/markup'>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page"  style={{ textDecoration: 'none'  }} >Markup</a>
        </li>
        </Link>
        <Link to='/dishcost'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> Dish Cost</a>
        </li>
        </Link>
        <Link to='/conversion'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> Conversion</a>
        </li>
        </Link>
        <Link to='/nutrition'>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page"  style={{ textDecoration: 'none'  }} >Nutrition</a>
        </li>
        </Link>
      </ul>
      <form class="d-flex">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
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