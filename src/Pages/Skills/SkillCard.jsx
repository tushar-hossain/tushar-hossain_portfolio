import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const SkillCard = ({ skills, direction = "left", category }) => {
  // Function to get proficiency level styling
  // const getLevelColor = (level) => {
  //   switch (level) {
  //     case "Expert":
  //       return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
  //     case "Advanced":
  //       return "text-blue-400 bg-blue-500/10 border-blue-500/30";
  //     case "Intermediate":
  //       return "text-purple-400 bg-purple-500/10 border-purple-500/30";
  //     case "Learning":
  //       return "text-orange-400 bg-orange-500/10 border-orange-500/30";
  //     default:
  //       return "text-slate-400 bg-slate-500/10 border-slate-500/30";
  //   }
  // };

  // Function to get star count based on level
  // const getStarCount = (level) => {
  //   switch (level) {
  //     case "Expert":
  //       return 5;
  //     case "Advanced":
  //       return 4;
  //     case "Intermediate":
  //       return 3;
  //     case "Learning":
  //       return 2;
  //     default:
  //       return 1;
  //   }
  // };

  return (
    <div className="relative">
      {/* Gradient overlay for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <Marquee
        direction={direction}
        speed={30}
        pauseOnHover={true}
        gradient={false}
        className="py-4"
      >
        <div className="flex items-center gap-6 px-4">
          {skills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="group relative">
              {/* Main Skill Card */}
              <div
                className={`
                relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 
                hover:border-slate-600/50 rounded-2xl p-6 w-32 h-40
                transition-all duration-300 hover:scale-110 hover:-translate-y-2
                hover:shadow-xl hover:shadow-blue-500/10
                flex flex-col items-center justify-between
                group-hover:bg-slate-800/50
              `}
              >
                {/* Skill Icon/Image */}
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-xl bg-white/90 p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      className="w-full h-full object-contain rounded-lg"
                      src={skill.image}
                      alt={skill.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback icon */}
                    <div
                      className="w-full h-full bg-slate-200 rounded-lg items-center justify-center text-slate-600 font-bold text-xs hidden"
                      style={{ display: "none" }}
                    >
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      category?.bgColor || "from-blue-500/20 to-blue-600/20"
                    } rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  />
                </div>

                {/* Skill Name */}
                <div className="text-center">
                  <h3 className="font-semibold text-slate-200 text-sm mb-2 leading-tight group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Proficiency Level */}
                  {/* <div
                    className={`
                    px-3 py-1 rounded-full text-xs font-medium border
                    transition-all duration-300 ${getLevelColor(skill.level)}
                  `}
                  >
                    {skill.level}
                  </div> */}
                </div>

                {/* Proficiency Stars */}
                {/* <div className="flex space-x-1 mt-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`text-xs transition-all duration-300 ${
                        starIndex < getStarCount(skill.level)
                          ? category?.color || "text-blue-400"
                          : "text-slate-600"
                      } group-hover:animate-pulse`}
                      style={{ animationDelay: `${starIndex * 100}ms` }}
                    />
                  ))}
                </div> */}

                {/* Hover Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-slate-200 text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-700/50 pointer-events-none z-20">
                  {skill.level} in {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/90" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SkillCard;
