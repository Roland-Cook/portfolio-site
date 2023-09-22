import {React, useRef} from 'react'
import "./intro.scss"
import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { useInView } from "react-intersection-observer"



const Intro = () => {

  const { ref: myRef, inView: Visible } = useInView()


  console.log(Visible)


  return (
    <section id="intro" ref={myRef} className={`${Visible ? "skillsShow" : "skillsHidden"} `} >
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText"> I'm <span className="introName"> Roland </span> <br />Full-Stack Developer <span className='blinkingDot'>.</span></span>
            
            <p className="introPara">I am a skilled and passionate Full Stack Developer with experience in creating <br /> appealing and user-friendly websites</p>
            
            <Link activeClass ="active" to="contact" smooth={true} offset={100} duration={1500} className='hireMe'><button className="btn"><FontAwesomeIcon icon={faBriefcase} className='btnImg'  /> Hire me</button></Link>
        </div>
    </section>
  )
}
export default Intro
