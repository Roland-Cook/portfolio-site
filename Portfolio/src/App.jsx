import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter } from "react-router-dom"
import Intro from "./components/Intro/intro"
function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar/>
          <Intro/>
    </BrowserRouter>
    </>
  )
}

export default App
