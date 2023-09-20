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
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> Front-End</h2>
                    <p> Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap for creating visually appealing, user-friendly applications with a focus on responsive design for a seamless experience. </p>
                </div>
            </div>


            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> Back-End</h2>
                    <p>Proficient in Python-based backend development using frameworks like Django and FastAPI while utilizing PostgreSQL and SQLite for database management. Knowledge of containerizing projects using docker.</p>
                </div>
            </div>


            <div className="skillbar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p> I specialize in crafting intuitive and user-centric digital experiences through thoughtful design, using tools like Photoshop and Figma. ensuring that websites and applications are visually appealing and easy to navigate. </p>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Skills
