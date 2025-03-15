import React from 'react'
import { Link } from "react-router"
import Icon from './Icon'
import { FaEnvelope,FaFolder, FaGithub, FaHouse, FaLetterboxd} from 'react-icons/fa6'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { BsEnvelope, BsEnvelopeAt } from 'react-icons/bs'

function SocialLinks() {
  return (
    <div className='social-links'>
        <ul>

          <li>
            <a href="">
              <Icon text={<FaGithub />} />
            </a>
          </li>

          <li>
            <a href="">
              <Icon text={<FaLinkedin />} />
            </a>
          </li>
          
          <li>
            <a href="mailto:agudanieldev@gmail.com">
              <Icon text={<BsEnvelopeAt />} />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default SocialLinks