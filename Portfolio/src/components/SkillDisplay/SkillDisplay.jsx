import React from 'react'
import "./skillDisplay.scss"

import reactImg from "../../assets/reactjs.png"
import JsImg from "../../assets/javascript.png"
import pyImg from "../../assets/python.png"
import twImg from "../../assets/tailwind.png"
import bs from "../../assets/bootstrap.png"
import sass from "../../assets/sass.png"
import docker from "../../assets/docker.png"
import git from "../../assets/git.png"









const SkillDisplay = () => {
  return (
<div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src={reactImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={JsImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={pyImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={twImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={bs} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={sass} height="100" width="100" alt="" />
		</div>
        <div className="slide">
			<img src={docker} height="100" width="100" alt="" />
		</div>
        <div className="slide">
			<img src={git} height="100" width="100" alt="" />
		</div>




        <div className="slide">
			<img src={reactImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={JsImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={pyImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={twImg} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={bs} height="100" width="100" alt="" />
		</div>
		<div className="slide">
			<img src={sass} height="100" width="100" alt="" />
		</div>
        <div className="slide">
			<img src={docker} height="100" width="100" alt="" />
		</div>
        <div className="slide">
			<img src={git} height="100" width="100" alt="" />
		</div>

	</div>
</div>
  
  )
  
}


export default SkillDisplay
