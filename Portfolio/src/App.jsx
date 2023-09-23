import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Projects from "./components/portfolio/projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer/footer"
import SkillDisplay from "./components/SkillDisplay/SkillDisplay"


function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar/>
          <Intro/>
          <Skills/>
          <Projects/>
          <SkillDisplay/>
          <Contact/>
          <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
