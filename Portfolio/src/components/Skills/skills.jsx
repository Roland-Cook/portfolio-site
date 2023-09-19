import React from 'react'
import "./skill.scss"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
            <span className="skillDesc"> I am a skilled and passionate Full Stack Developer with experience in creating
appealing and user-friendly websites. </span>
        <div className="skillBars">

            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> UI/UX Design</h2>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
            </div>


            <div className="skillbar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> Front End</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                </div>
            </div>


            <div className="skillbar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Back End</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae  </p>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Skills
