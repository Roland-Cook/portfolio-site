import React from 'react'
import "./intro.scss"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'




const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className="introName"> Roland </span> <br />Full-Stack Developer.</span>
            
            <p className="introPara">I am a skilled and passionate Full Stack Developer with experience in creating <br /> appealing and user-friendly websites.</p>
            
            <Link to="/" className='hireMe'><button className="btn"><FontAwesomeIcon icon={faBriefcase} className='btnImg'  /> Hire me</button></Link>
        </div>
    </section>
  )
}
export default Intro
