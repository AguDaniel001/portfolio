import React from 'react'
import './App.css'
import HeroMolecule from './components/HeroMolecule'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router"
import { Home, Projects, About, Contact } from "./pages"


function App() {

  return (
    <Router>
      <div>
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <nav>
   
          <div>
            <ul className='flex text-[var(--title)] font-medium '>
              <li className='px-5'><Link to='/'>Home</Link></li>
              <li className='px-5'><Link to='/about'>About Me</Link></li>
              <li className='px-5'><Link to='/projects'>Projects</Link></li>
              <li className='px-5'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    </Router>
  )
}

export default App
