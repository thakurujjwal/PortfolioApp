import React from "react";
import Skill from "./Skill.js";

const SkillCompo = () => {
  return (
    <div className="skill">
      <div className="resumeCardhead">
        <span>Technical Skills</span>
        <h1>Desigen & Evelopment skills</h1>
      </div>
      <div className="skillcon">
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default SkillCompo;
