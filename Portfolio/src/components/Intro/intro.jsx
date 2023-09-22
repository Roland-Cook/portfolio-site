import {React, useRef} from 'react'
import "./intro.scss"
import { Link } from "react-router-dom";

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
            <span className="introText"> I'm <span className="introName"> Roland </span> <br />Full-Stack Developer.</span>
            
            <p className="introPara">I am a skilled and passionate Full Stack Developer with experience in creating <br /> appealing and user-friendly websites.</p>
            
            <Link to="/" className='hireMe'><button className="btn"><FontAwesomeIcon icon={faBriefcase} className='btnImg'  /> Hire me</button></Link>
        </div>
    </section>
  )
}
export default Intro
