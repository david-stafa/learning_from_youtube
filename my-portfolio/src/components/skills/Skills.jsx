import "./skills.scss";
import { faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faLaravel, faNodeJs, faNpm, faPhp, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import OneSkill from "./OneSkill";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <div className="skills">
      <h2 id="skills">Skills</h2>
      <div className="list-of-skills">
        <span className="skillset">
          <h4>Skills on junior level:</h4>
          <OneSkill name={"HTML"} icon={faHtml5} color={"#e34c26"} />
          <OneSkill name={"CSS"} icon={faCss3} color={"#264de4"} />
          <OneSkill name={"SASS"} icon={faSass} color={"#c69"} />
          <OneSkill name={"JS"} icon={faJsSquare} color={"#f0db4f"} />
          <OneSkill name={"React"} icon={faReact} color={"#00d8ff"} />
          <OneSkill name={"PHP"} icon={faPhp} color={"#484C89"} />
          <OneSkill name={"Laravel"} icon={faLaravel} color={"#fb503b"} />
          <OneSkill name={"MySQL"} icon={faDatabase} color={"#00758F"} />
          <OneSkill name={"Node.js"} icon={faNodeJs} color={"#3C873A"} />
          <OneSkill name={"npm"} icon={faNpm} color={"#CC3534"} />
          <OneSkill name={"Git"} icon={faGitAlt} color={"#f1502f"} />
          <OneSkill name={"Github"} icon={faGithub} color={"#fff"} />
        </span>
        <span className="learning">
          <h4>Learning:</h4>
          <OneSkill name={"Typescript"} icon={faJsSquare} color={"#007acc"} />
          <OneSkill name={"Next.js"} icon={faJsSquare} color={"#fff"} />
        </span>
      </div>
    </div>
  );
}
