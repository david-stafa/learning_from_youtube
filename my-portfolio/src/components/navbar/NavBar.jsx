import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";

import SocialLinks from "../SocialLinks";
import "./navbar.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={scrolled ? "scrolled navbar" : "navbar"}>
      <div className="logo">
        <a href="#" className="logo_link">
          {/* <img src={logo} alt="logo" /> */}
          <h1 className="logo_heading"> &lt; DAVID/&gt;</h1>
        </a>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <SocialLinks>
        <button>
          <a href="#contact">Let&apos;s Connect</a>
        </button>
      </SocialLinks>
    </div>
  );
}
