import React from 'react'
import { Link } from 'react-router-dom'
export default function CommanNavBar() {
  return (
    <div>

           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNy_lHW2ebTQklagio0oP7_K1M6iWTWehL7mznljN5Kw&s'></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home" className="nav-link active">Home</Link>
                            </li>
                              <li class="nav-item">
                                <Link to="/aboutus" className="nav-link">About Us</Link>
                            </li>
                              <li class="nav-item">
                                <Link to="/contactus" className="nav-link">Contact Us</Link>
                            </li>
                              <li class="nav-item">
                                <Link to="/ourservices" className="nav-link">Our Services</Link>
                            </li>
                           
                             <li class="nav-item"   >
                               <Link className="nav-link" className='btn btn-danger' to="/registeruser">Login/Register</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
    </div>
  )
}
