import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"
import Projects from "./components/portfolio/projects"


function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar/>
          <Intro/>
          <Skills/>
          <Projects/>
    </BrowserRouter>
    
    </>
  )
}

export default App
