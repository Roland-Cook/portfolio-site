import React from 'react'
import "./projects.scss"
import one from "../../assets/Home.png"
import two from "../../assets/Home2.png"
import three from "../../assets/Home4.png"
import four from "../../assets/Home5.png"





const Projects = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Welcome to my portfolio – a collection of my creative work. Here, you'll find a variety of projects that showcase my skills and dedication. Feel free to explore and get in touch if you have questions or want to discuss potential collaborations. <br />Let's turn your ideas into reality!</span>
        

        <div className="worksImgs">

            <a href="https://gitlab.com/Cook.r/planets" target='__blank'><img src={one} alt="" className="worksImg" /></a>

            <a href="https://gitlab.com/fall-guys/JumpSched" target='__blank'><img src={four} alt="" className="worksImg" /></a>

           <a href="https://gitlab.com/Cook.r/carcar" target='__blank'> <img src={three} alt="" className="worksImg" /></a>

            <a href="https://gitlab.com/Cook.r/scrumptious" target='__blank'><img src={two} alt="" className="worksImg" /></a>
        </div>

        <a href="https://gitlab.com/Cook.r" target='__blank' ><button className="workBtn">See More</button></a>
        
    </section>
  )
}

export default Projects
