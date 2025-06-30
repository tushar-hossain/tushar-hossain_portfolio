import React from "react";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import SkillCard from "./SkillCard";

const Skills = () => {
  const frontend = {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "ReactJS", level: 88 },
    ],
  };

  const backend = {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 87 },
    ],
  };

  const tools = {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Postman", level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Skills
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid md:grid-cols-3 gap-8"
        >
          <SkillCard {...frontend} />
          <SkillCard {...backend} />
          <SkillCard {...tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
