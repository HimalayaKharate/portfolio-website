import React from "react";
import "./SkillSection.css";
import GearLane from "../RotatingGearAnimation/GearLane";

const SkillSection = () => {
  const skills = ["Java", "JavaScript", "React", "Python", "C++", "SpringBoot"];

  return (
    <section id="skills" className="section skills">
      <GearLane />
      <div id="header">
        <h2 className="oswald-500">Skills</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card oswald-400">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
