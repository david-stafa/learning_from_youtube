import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import Logo from '../../assets/images/David-logos_white.png'
import Logo1 from '../../assets/images/David-logos_black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
  faThreads,
} from '@fortawesome/free-brands-svg-icons'
import Links from './Links'
import { useState } from 'react'

export default function Sidebar() {
  const [img, setImg] = useState(Logo)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img
          src={img}
          alt="logo"
          onMouseEnter={() => setImg(Logo1)}
          onMouseLeave={() => setImg(Logo)}
        />
      </Link>
      <nav>
        <NavLink
          //   activeclassname="active" => this is added now by deafault in react router
          to="/"
          end // explanation: https://reactrouter.com/en/main/components/nav-link#end
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className="about-link" to="/about" end>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink className="contact-link" to="/contact" end>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <Links
          icon={faLinkedin}
          link="https://www.linkedin.com/in/david-stafa/"
        />
        <Links icon={faGithub} link="https://github.com/david-stafa" />
        <Links icon={faFacebook} link="https://www.facebook.com/david.stafa/" />
        <Links icon={faThreads} link="https://threads.net/david_stafa" />
        <Links icon={faInstagram} link="https://instagram.com/david_stafa" />
      </ul>
    </div>
  )
}
