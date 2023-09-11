import { Col } from "react-bootstrap";

export const Card = ({ title, description, imgUrl, link, liveDemoLink }) => {
  return (
    
    <Col sm={6} md={4} className="card">
      <div className="proj-img">
        <img alt='project-image' src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span className="description">{description}</span>
          <br/>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub Demo    
          </a>
          <br />
          <a
            href={liveDemoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Demo    
          </a>
        </div>
      </div>
    </Col>
  )
}
export default Card