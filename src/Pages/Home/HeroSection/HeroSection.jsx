import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import myImage from "../../../assets/images/tushar_hossain.jpg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume_of_Md_Tushar_Hossain.pdf";
    link.download = "Md_Tushar_Hossain_MERN_Developer.pdf";
    link.target = "_blank";
    link.click();
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen hero-section section-padding overflow-hidden py-28"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="flex-1 text-center lg:text-left space-y-8"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for hire</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-slate-400 text-lg font-medium tracking-wide">
                Hi, I'm
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-slate-100">Md. Tushar </span>

                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Hossain
                </span>
              </h1>

              {/* Dynamic Role */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 min-h-[3rem] flex items-center justify-center lg:justify-start">
                <FaCode className="mr-3 text-blue-500" />
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={50}
                  loop={0}
                  typeSpeed={100}
                  words={[
                    "MERN Stack Developer",
                    "React.js Specialist",
                    "JavaScript Expert",
                  ]}
                />
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                who loves turning ideas into functional, user-friendly web
                applications. With a solid foundation in modern web
                technologies, I'm eager to grow my skills, take on challenges,
                and contribute to projects that make a real impact.
              </p>

              {/* Key Skills Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Next.js",
                  "Tailwind CSS",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800/50 text-blue-400 text-sm font-medium rounded-full border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced Stats */}
            {/* <div className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  2+
                </div>
                <div className="text-slate-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  3+
                </div>
                <div className="text-slate-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  6+
                </div>
                <div className="text-slate-400 text-sm">Technologies</div>
              </div>
            </div> */}

            {/* Enhanced Social & Actions */}
            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <span className="text-slate-400 text-sm font-medium">
                  Connect with me:
                </span>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/tushar-hossain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 hover:bg-slate-700/70 text-slate-400 hover:text-blue-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tushar-hossain-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 hover:bg-slate-700/70 text-slate-400 hover:text-blue-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a
                    href="mailto:tushar@example.com" // Add your email
                    className="group p-3 bg-slate-800/50 hover:bg-slate-700/70 text-slate-400 hover:text-blue-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm hover:scale-110"
                    aria-label="Email"
                  >
                    <HiOutlineMail className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center space-x-2"
                >
                  <FaLaptopCode className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>View My Work</span>
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                <button
                  onClick={handleResumeDownload}
                  className="group relative overflow-hidden bg-transparent hover:bg-slate-800/50 text-blue-400 hover:text-blue-300 font-semibold px-8 py-4 rounded-xl border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FaDownload className="group-hover:animate-bounce transition-transform duration-300" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 group-hover:border-blue-400/70 transition-all duration-500 shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-400/30">
                <img
                  src={myImage}
                  alt="Md. Tushar Hossain - MERN Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce opacity-80"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-300 rounded-full animate-bounce opacity-40"
                style={{ animationDelay: "3s" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection("about")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div className="flex flex-col items-center space-y-2 text-slate-400 hover:text-blue-400 transition-colors duration-300">
            <span className="text-xs font-medium tracking-wide">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
