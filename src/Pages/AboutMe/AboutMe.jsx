import React from "react";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaMountain,
  FaBook,
  FaAward,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import myImage from "../../assets/images/tushar-2.jpg";

const AboutMe = () => {
  // Personal stats that recruiters love to see
  const stats = [
    {
      icon: FaRocket,
      number: "3+",
      label: "Projects Built",
      color: "text-blue-400",
    },
    {
      icon: FaLightbulb,
      number: "6+",
      label: "Technologies",
      color: "text-blue-400",
    },
    {
      icon: FaAward,
      number: "1",
      label: "Certifications",
      color: "text-blue-400",
    },
    {
      icon: FaCode,
      number: "1+",
      label: "Years Learning",
      color: "text-blue-400",
    },
  ];

  // What makes you unique as a developer
  const highlights = [
    {
      icon: FaCode,
      title: "MERN-Stack Expertise",
      description: "End-to-end development from backend to user interfaces",
      color: "text-emerald-400",
    },
    // {
    //   icon: FaLightbulb,
    //   title: "Problem Solver",
    //   description:
    //     "Love tackling complex challenges and finding elegant solutions",
    //   color: "text-purple-400",
    // },
    {
      icon: FaRocket,
      title: "Fast Learner",
      description:
        "Quickly adapt to new technologies and development practices",
      color: "text-orange-400",
    },
    // {
    //   icon: FaGraduationCap,
    //   title: "Computer Science Background",
    //   description: "Strong foundation in programming fundamentals",
    //   color: "text-blue-400",
    // },
  ];

  // Personal interests that show you're well-rounded
  // const interests = [
  //   { icon: FaMountain, name: "Nature & Hiking", color: "text-emerald-400" },
  //   { icon: FaBook, name: "Tech Trends", color: "text-purple-400" },
  //   { icon: FaHeart, name: "Sports", color: "text-red-400" },
  // ];

  return (
    <section
      id="about"
      className="about-section section-padding"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-11/12 max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6">
            <FaLightbulb className="animate-pulse" />
            <span className="text-sm font-medium">Get to know me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A passionate developer who creatively builds digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image & Quick Info */}
          <div className="space-y-8">
            {/* Enhanced Image */}
            <div className="relative group mx-auto lg:mx-0 w-fit">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-500/50 group-hover:border-blue-400/70 transition-all duration-500 shadow-2xl shadow-blue-500/20">
                <img
                  src={myImage}
                  alt="Md. Tushar Hossain - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Quick Info Cards */}
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <HiOutlineLocationMarker className="text-blue-400 text-2xl mx-auto mb-2 group-hover:animate-bounce" />
                <h4 className="font-semibold text-slate-200 mb-1">Location</h4>
                <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
              </div>

              <div className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <BsCalendar3 className="text-emerald-400 text-2xl mx-auto mb-2 group-hover:animate-bounce" />
                <h4 className="font-semibold text-slate-200 mb-1">
                  Experience
                </h4>
                <p className="text-slate-400 text-sm">2+ Years Learning</p>
              </div>
            </div> */}

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
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
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <div className="space-y-4 text-slate-300 text-lg text-justify leading-relaxed">
                <p>
                  Hi! I'm{" "}
                  <span className="font-semibold text-blue-400">
                    Md. Tushar Hossain,
                  </span>{" "}
                  a passionate{" "}
                  <span className="font-semibold text-blue-400">
                    MERN Stack Developer
                  </span>{" "}
                  dedicated to building clean, scalable and user-friendly web
                  applications. I started my journey in MERN Stack Development
                  from my university, where curiosity about websites turned into
                  a deep passion for building digital experiences.
                </p>

                <p>
                  I am an expert in{" "}
                  <span className="font-semibold text-blue-400">
                    React.js, Next.js, Node.js, Express.js and MongoDB,
                  </span>{" "}
                  with a keen interest in learning and exploring emerging
                  technologies. As a fresher, I am driven by problem solving,
                  collaboration and building impactful projects.
                </p>

                <p>
                  Outside of coding, I enjoy tackling{" "}
                  <span className="font-semibold text-blue-400">
                    Full stack
                  </span>{" "}
                  challenges, exploring technical trends and working on personal
                  projects to improve my skills. From intuitive UI to optimized
                  backend, I love every part of the process.
                </p>
              </div>

              {/* What Makes Me Different */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100 mb-6">
                  What Sets Me Apart
                </h3>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 group"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div
                        className={`${highlight.color} bg-slate-800/50 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <highlight.icon className="text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-200 mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beyond Coding */}
              {/* <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100">
                  Beyond Coding
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not immersed in code, you'll find me exploring
                  nature, staying updated with the latest tech trends, or
                  engaging in sports activities. I believe in maintaining a
                  healthy work-life balance, as it fuels my creativity and keeps
                  me motivated to tackle new challenges.
                </p>

               
                <div className="flex flex-wrap gap-3 pt-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-slate-800/30 hover:bg-slate-800/50 px-4 py-2 rounded-full transition-all duration-300 group"
                    >
                      <interest.icon
                        className={`${interest.color} group-hover:animate-bounce`}
                      />
                      <span className="text-slate-300 text-sm font-medium">
                        {interest.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Call to Action */}
              <div>
                <div className="card p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-100 mb-2">
                        Ready to collaborate?
                      </h4>
                      <p className="text-slate-400 text-sm">
                        Let's build something amazing together!
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="btn-primary flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
                    >
                      <span className="text-white">Get In Touch</span>
                      <FaRocket className="hover:animate-bounce text-[#00d492]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
