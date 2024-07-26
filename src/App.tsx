import './App.css'
import Background from './components/Background/backGround'
import Education from './components/Education/education'
import Home from './components/Home/home'
import Navbar from './components/Navbar/navBar'
import Projects from './components/Projects/projects'
import Skillset from './components/Skillset/skillset'

function App() {


  return (
    <>
      <Background/>
      <Navbar/>
      <Home/>
      <Education/>
      <Skillset/>
      <Projects/>
    </>
  )
}

export default App
