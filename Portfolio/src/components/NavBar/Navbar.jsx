import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import contact from "../../assets/contact.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="personal logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  )
}

export default Navbar
