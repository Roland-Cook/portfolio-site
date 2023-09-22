import useRef from 'react'
import "./projects.scss"
import one from "../../assets/Home.png"
import two from "../../assets/Home2.png"
import three from "../../assets/Home4.png"
import four from "../../assets/Home5.png"


import { useInView } from "react-intersection-observer"



const Projects = () => {
  const { ref: myRef, inView: Visible } = useInView()

  return (

    <div className={` gallery-image ${Visible ? "skillsShow" : "skillsHidden"} `}  ref={myRef}>
         <div id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Welcome to my portfolio a collection of my creative work. Here, you'll find a variety of projects that showcase my skills and dedication. Explore my projects and don't hesitate to contact me with any questions or opportunities </span>
        </div>

        <a href="https://gitlab.com/Cook.r/planets" target='__blank'><div className="img-box">
     <img src={one} alt="" />
      <div className="transparent-box">
        <div className="caption">
          <p>Cosmos</p>
        </div>
      </div> 
    </div>
    </a>


    <a href="https://gitlab.com/fall-guys/JumpSched" target='__blank'><div className="img-box">
      <img src={four} alt="" />
      <div className="transparent-box">
        <div className="caption">
          <p>JumpSched</p>
        </div>
      </div>
    </div>
    </a>


    <a href="https://gitlab.com/Cook.r/carcar" target='__blank'><div className="img-box">
      <img src={three} alt="" />
      <div className="transparent-box">
        <div className="caption">
          <p>CarCar</p>
        </div>
      </div>
    </div>
    </a>


    <a href="https://gitlab.com/Cook.r/scrumptious" target='__blank'><div className="img-box">
      <img src={two} alt="" />
      <div className="transparent-box">
        <div className="caption">
          <p>Scrumptious</p>
        </div>
      </div> 
    </div>
    </a>

  </div>
  
  )
}

export default Projects
