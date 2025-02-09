import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; // Import the component
import "./ProjectSection.css"; // Import styles
import GearLane from "../RotatingGearAnimation/GearLane";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]); // Store fetched projects

  useEffect(() => {
    fetch("/json/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []); // Runs once when the component mounts

  return (
    <section id="projects" className="section projects">
      <GearLane />
      <div id="header">
        <h2 className="oswald-500">Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))
        ) : (
          <p>Loading projects...</p> // Show loading state
        )}
      </div>
    </section>
  );
}
