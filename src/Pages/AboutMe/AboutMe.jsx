import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaAward,
  FaBriefcase,
} from "react-icons/fa";
import myImage from "../../assets/images/tushar-2.jpg";

const AboutMe = () => {
  // Personal stats that recruiters love to see
  const stats = [
    {
      icon: FaBriefcase,
      number: "1+",
      label: "Years Experience",
      color: "text-blue-400",
    },
    {
      icon: FaCode,
      number: "3+",
      label: "Projects Built",
      color: "text-blue-400",
    },
    {
      icon: FaRocket,
      number: "2",
      label: "Professional Roles",
      color: "text-blue-400",
    },
    {
      icon: FaLightbulb,
      number: "10+",
      label: "Technologies",
      color: "text-blue-400",
    },
  ];

  // What makes you unique as a developer
  const highlights = [
    {
      icon: FaBriefcase,
      title: "Professional Experience",
      description:
        "Hands-on experience building enterprise web applications and business workflows.",
      color: "text-blue-400",
    },
    {
      icon: FaCode,
      title: "React & TypeScript",
      description:
        "Focused on building reusable, responsive, and maintainable React interfaces.",
      color: "text-emerald-400",
    },
    {
      icon: FaLightbulb,
      title: "Continuous Learner",
      description:
        "Continuously improving my skills by exploring modern technologies and solving real-world problems.",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="about"
      className="about-section section-padding"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        // className="w-11/12 max-w-7xl mx-auto"
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
            React.js Developer focused on building modern, responsive, and
            maintainable web applications.
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
                  a{" "}
                  <span className="font-semibold text-blue-400">
                    React.js Developer
                  </span>{" "}
                  currently working as a Junior Software Developer at Edutechs
                  Limited. I build responsive and user-friendly web applications
                  using React.js, TypeScript, Firebase, and REST APIs.
                </p>

                <p>
                  My professional experience includes working on{" "}
                  <span className="font-semibold text-blue-400">
                    enterprise applications
                  </span>{" "}
                  and complex business workflows such as HRM, invoicing,
                  inventory, reservations, billing, and document management. I
                  enjoy turning business requirements into reusable,
                  maintainable, and practical frontend solutions.
                </p>

                <p>
                  I also have a strong foundation in the{" "}
                  <span className="font-semibold text-blue-400">
                    MERN stack
                  </span>{" "}
                  through personal projects and hands-on development. I'm
                  passionate about learning new technologies, improving my
                  problem-solving skills, and continuously growing as a software
                  developer.
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
                      <span className="text-white cursor-pointer">
                        Get In Touch
                      </span>
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
