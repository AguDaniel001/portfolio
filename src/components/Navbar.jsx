import React, {useState} from 'react'
import { Link } from "react-router"
import Icon from "./Icon"
import { BsPersonFill } from 'react-icons/bs'
import { FaEnvelope,FaFolder, FaHouse} from 'react-icons/fa6'

function Navbar() {
  const [active, setActive] = useState("home");
  

  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-container'>
          <li className={active === "home" ? "active" : ""}>
            <Link to='/' onClick={() => setActive("home")} >
              <Icon text={<FaHouse />} />
            </Link>
          </li>
          <li className={active === "about" ? "active" : ""}>
            <Link to='/about' onClick={() => setActive("about")} >
              <Icon text={<BsPersonFill />} />
            </Link>
          </li>
          <li className={active === "projects" ? "active" : ""}>
            <Link to='/projects' onClick={() => setActive("projects")} >
              <Icon text={<FaFolder />} />
            </Link>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <Link to='/contact' onClick={() => setActive("contact")} >
              <Icon text={<FaEnvelope />} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;