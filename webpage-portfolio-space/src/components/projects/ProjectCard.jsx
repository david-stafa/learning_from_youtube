import { Col } from "react-bootstrap";

export default function ProjectCard({ title, description, imgUrl }){

    return(
        <Col className="project-imbx">
            <img src={imgUrl} alt="project image" />
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}