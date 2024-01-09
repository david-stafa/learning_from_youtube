import projects from "../../listOfProjects";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="container">
      <h1 id="projects">Projects</h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
      <div className="projects">
        {projects.map((project, index) => {
          return (
            <div
              className="one-project"
              key={index}
              //   style={{ backgroundImage: `url(${project.imgUrl})` }}
            >
              <img src={project.imgUrl} alt="" />
              <div className="cover">
                <h4>{project.title}</h4>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link to project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
