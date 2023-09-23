import useRef, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import contact from "../../assets/contact.png"
import menu from "../../assets/menu.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useInView } from "react-intersection-observer"


const Navbar = () => {
  const { ref: myRef, inView: Visible } = useInView()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className={` navbar ${Visible ? "navShow" : "navHidden"} `} ref={myRef}>
      <div className="desktopMenu">
        <Link activeClass ="active" to="intro" smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass ="active" to="skills" smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass ="active" to="project-card" smooth={true} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>

    <img src={menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? "flex":"none"}}>
        <Link activeClass ="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>
        <Link activeClass ="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>About</Link>
        <Link activeClass ="active" to="skills" spy={true} smooth={true}  offset={650} duration={500} className="listItem" onClick={()=> setShowMenu(false)}>Portfolio</Link>
        <Link className="listItem">Resume</Link>
      </div>
      




    </nav>
  )
}

export default Navbar
