import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import Links from '../Layout/Links'

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="logo" className="sub-logo" />
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
        <Links icon={faGithub} link="https://www.facebook.com/david.stafa/" />
        <Links icon={faFacebook} link="https://www.facebook.com/david.stafa/" />
        <Links icon={faInstagram} link="https://instagram.com/david_stafa" />
      </ul>
    </div>
  )
}
