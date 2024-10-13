import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="links-socials">
        <a href="#">
          <img src={navIcon1} alt="" />
        </a>
        <a href="#">
          <img src={navIcon2} alt="" />
        </a>
        <a href="#">
          <img src={navIcon3} alt="" />
        </a>
        <button>Let&apos;s Connect</button>
      </div>
    </div>
  )
}
