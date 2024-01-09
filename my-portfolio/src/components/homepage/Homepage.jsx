import { ArrowRightCircle } from "react-feather";
import astronaut from '../../assets/img/header-img.svg'
import './homepage.scss'
import ChangingLetters from "./ChangingLetters";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="about-me">
        <span className="tagline">Welcome to my Portfolio</span>
        <h1 className="headline">
          Hi, I&apos;m David. <ChangingLetters /> Web Developer
        </h1>
        <p className="description">
          I am a beginner and enthusiastic programmer with a passion for
          front-end development, JavaScript, and React. In programming, I have
          found a great opportunity to develop my skills. I enjoy coming up with
          creative and logical solutions for various tasks, enhancing my skills
          not only in the field of front-end but also working on individual or
          team projects.
        </p>
        <button>
          Lets&apos; connect <ArrowRightCircle size={25} />{" "}
        </button>
      </div>
      <div className="image">
        <img src={astronaut} alt="astronaut" />
      </div>
    </div>
  );
}
