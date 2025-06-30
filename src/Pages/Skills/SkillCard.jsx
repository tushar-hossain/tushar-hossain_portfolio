import React from "react";

const SkillCard = ({ title, icon, skills }) => {
  return (
    <div className="bg-white rounded-xl p-6 transform transition hover:scale-102 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl text-green-700">{icon}</div>
        <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      </div>
      {skills.map((skill) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between text-sm font-medium mb-1">
            <span className="text-gray-700">{skill.name}</span>
            <span className="text-gray-500">{skill.level}%</span>
          </div>
          <progress
            className="progress progress-success w-full"
            value={skill.level}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
