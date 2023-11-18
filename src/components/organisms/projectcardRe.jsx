import { useState } from "react";
import "../../css/projectcard.css";

function ProjectCard({ name, description, img, alt, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="card">
      <div
        className="card-img-container-re"
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
          <img className="card-img" loading="lazy" src={img} alt={alt} title={title} />
      </div>
      <div className="card-text">
        <h2 className="card-titulo">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
