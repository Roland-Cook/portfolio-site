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
        <span className="worksDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quo voluptatibus fuga doloribus velit neque esse repellendus veritatis. Culpa inventore rem fugit labore sit praesentium atque rerum. Debitis, blanditiis possimus!</span>
        

        <div className="worksImgs">

            <a href="https://gitlab.com/Cook.r/planets" target='__blank'><img src={one} alt="" className="worksImg" /></a>

            <a href="https://gitlab.com/fall-guys/JumpSched" target='__blank'><img src={four} alt="" className="worksImg" /></a>

           <a href="https://gitlab.com/Cook.r/carcar" target='__blank'> <img src={three} alt="" className="worksImg" /></a>

            <a href="https://gitlab.com/Cook.r/scrumptious" target='__blank'><img src={two} alt="" className="worksImg" /></a>
        </div>

        <button className="workBtn">See More</button>
        
    </section>
  )
}

export default Projects
