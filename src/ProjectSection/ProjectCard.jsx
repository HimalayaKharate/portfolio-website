import "./ProjectCard.css";

export default function ProjectCard({ name, description, githubLink, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <div className="project-content">
        <h3 className="oswald-400">{name}</h3>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
