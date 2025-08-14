import React from "react";
import {
  FaCode,
  FaServer,
  FaTools,
  FaRocket,
  FaStar,
  FaChartLine,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import SkillCard from "./SkillCard";

const Skills = () => {
  // Clean, organized skill data with correct names and better structure
  const frontend = [
    {
      name: "HTML5",
      image: "https://i.ibb.co.com/ymq1zkSZ/html.png",
      level: "Expert",
    },
    {
      name: "CSS3",
      image: "https://i.ibb.co.com/jvsnTbSC/css-3.png",
      level: "Expert",
    },
    {
      name: "JavaScript",
      image: "https://i.ibb.co.com/Bh7QFtj/js-javascript-removebg-preview.png",
      level: "Advanced",
    },
    {
      name: "React.js",
      image: "https://i.ibb.co.com/FkXqHxKc/react.png",
      level: "Advanced",
    },
    {
      name: "Next.js",
      image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      image: "https://i.ibb.co.com/HTvxgNPd/tailwind.png",
      level: "Advanced",
    },
    {
      name: "Bootstrap",
      image: "https://i.ibb.co.com/NnsnyChW/bootstrap.png",
      level: "Advanced",
    },
    // {
    //   name: "TypeScript",
    //   image: "https://i.ibb.co.com/0y98Wbbc/nextjs.png",
    //   level: "Learning",
    // },
  ];

  const backend = [
    {
      name: "Node.js",
      image: "https://i.ibb.co.com/JjZ78WD3/node-js-removebg-preview.png",
    },
    {
      name: "Express.js",
      image: "https://i.ibb.co.com/8QJBMHm/express.png",
    },
    {
      name: "MongoDB",
      image: "https://i.ibb.co.com/DfW069xX/mongodb.png",
    },
    {
      name: "Firebase",
      image: "https://i.ibb.co.com/chqRTPYd/firebase.png",
    },
    {
      name: "REST APIs",
      image: "https://i.ibb.co.com/sd4QZKyQ/rest-api.png",
    },
    {
      name: "JWT Auth",
      image: "https://i.ibb.co.com/x8LB2knj/jwt-logo.png",
    },
  ];

  const tools = [
    {
      name: "Git",
      image: "https://i.ibb.co.com/ynRpYFrc/git.png",
      level: "Advanced",
    },
    {
      name: "GitHub",
      image: "https://i.ibb.co.com/GvzCt3kk/github.png",
      level: "Advanced",
    },
    {
      name: "VS Code",
      image:
        "https://i.ibb.co.com/67mnfQfr/visual-studio-visual-studio-code.png",
      level: "Expert",
    },
    {
      name: "Postman",
      image: "https://i.ibb.co.com/KjJyGDrR/postman.png",
      level: "Advanced",
    },
    {
      name: "Netlify",
      image: "https://i.ibb.co.com/hw9q6C5/netlify-removebg-preview.png",
      level: "Intermediate",
    },
    {
      name: "Vercel",
      image: "https://i.ibb.co.com/N6nR2pNP/vercel.png",
      level: "Advanced",
    },
    {
      name: "Figma",
      image: "https://i.ibb.co.com/M51yGt9M/figma.png",
      level: "Basic",
    },
  ];

  // Skill categories for better organization
  const skillCategories = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: frontend,
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: FaServer,
      title: "Backend & Database",
      description: "Building robust server-side applications and APIs",
      skills: backend,
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: FaTools,
      title: "Development Tools",
      description: "Professional development and deployment workflow",
      skills: tools,
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
  ];

  // Professional summary stats
  // const skillStats = [
  //   {
  //     icon: FaCode,
  //     number: "6+",
  //     label: "Technologies",
  //     color: "text-blue-400",
  //   },
  //   {
  //     icon: FaRocket,
  //     number: "3+",
  //     label: "Projects",
  //     color: "text-emerald-400",
  //   },
  //   // {
  //   //   icon: FaStar,
  //   //   number: "2+",
  //   //   label: "Years Experience",
  //   //   color: "text-purple-400",
  //   // },
  //   {
  //     icon: FaChartLine,
  //     number: "100%",
  //     label: "Learning Growth",
  //     color: "text-orange-400",
  //   },
  // ];

  return (
    <section
      id="skills"
      className="skills-section section-padding my-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6">
            <HiOutlineLightBulb className="animate-pulse" />
            <span className="text-sm font-medium">Technical Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Proficient in modern web technologies with a focus on creating
            scalable, maintainable, and user-centric applications
          </p>

          {/* Skill Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {skillStats.map((stat, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <stat.icon
                  className={`${stat.color} text-3xl mx-auto mb-3 group-hover:animate-bounce`}
                />
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={categoryIndex * 200}
              className="space-y-8"
            >
              {/* Category Header */}
              <div
                className={`card p-8 bg-gradient-to-r ${category.bgColor} ${category.borderColor}`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${category.color} bg-slate-800/50 p-4 rounded-xl`}
                    >
                      <category.icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-400">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${category.color}`}>
                      {category.skills.length}+
                    </div>
                    <div className="text-slate-400 text-sm">Technologies</div>
                  </div>
                </div>
              </div>

              {/* Skills Marquee */}
              <SkillCard
                skills={category.skills}
                direction={categoryIndex % 2 === 0 ? "left" : "right"}
                category={category}
              />
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 max-w-4xl mx-auto">
            <FaRocket className="text-blue-400 text-4xl mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Currently exploring advanced TypeScript, and Next.js technologies.
              Always excited to learn new tools and best practices in web
              development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Redux Toolkit", "Docker", "GraphQL", "Testing"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/30 text-blue-400 text-sm font-medium rounded-full border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
