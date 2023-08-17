import { Col } from "react-bootstrap";

export const Card = ({ title, description, imgUrl }) => {
  return (
    
    <Col sm={6} md={4} className="card">
      <div className="proj-img">
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span className="description">{description}</span>
        </div>
      </div>
    </Col>
  )
}
export default Card