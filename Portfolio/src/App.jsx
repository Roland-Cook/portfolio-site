import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom"
import Intro from "./components/Intro/intro"
import Skills from "./components/Skills/skills"



function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar/>
          <Intro/>
          <Skills/>
    </BrowserRouter>
    
    </>
  )
}

export default App
