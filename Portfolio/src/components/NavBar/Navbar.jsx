import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import contact from "../../assets/contact.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>

      <button className="desktopMenuBtn">
        
      <FontAwesomeIcon icon={faComment} className="desktopMenuImg"  />  Contact Me
      </button>
    </nav>
  )
}

export default Navbar
