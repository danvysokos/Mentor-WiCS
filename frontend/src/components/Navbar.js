import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>inTech Girls</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mentors">Mentors</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/create-user">Sign Up</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar

