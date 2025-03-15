import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router"
import { Home, Projects, About, Contact } from "./pages"


import Navbar from './components/Navbar'


function App() {

  return (
    <Router>
      <div className='App'>
        <div className='page-wrapper'>
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        {/* <SocialLinks /> */}
        <Navbar />

        </div>
      </div>
    </Router>
  )
}

export default App
