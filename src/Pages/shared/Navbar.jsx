import { useEffect, useState } from "react";
import { Menu, X, Download, Code2 } from "lucide-react";
import { Link } from "react-router";

const navItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const scrollPos = window.scrollY + 100;
      let currentSection = "home";

      for (const item of [...navItems].reverse()) {
        const section = document.getElementById(item.path);
        if (section && scrollPos >= section.offsetTop) {
          currentSection = item.path;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/Resume_of_Md_Tushar_Hossain.pdf";
      link.download = "Md_Tushar_Hossain_MERN_Developer.pdf";
      link.target = "_blank";
      link.click();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-slate-900/20 border-b border-slate-700/30"
            : "bg-slate-900/90"
        }
      `}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-11/12 max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Premium Logo Design */}
        <Link to="/" onClick={() => scrollToSection("home")}>
          <div className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <Code2
                size={28}
                className="text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all duration-300" />
            </div>
            <div className="font-mono text-2xl font-bold tracking-tight">
              <span className="text-slate-100 group-hover:text-blue-100 transition-colors duration-300">
                Tushar
              </span>
              <span className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                .dev
              </span>
            </div>
          </div>
        </Link>

        {/* Premium Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.path)}
              className={`
                relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
                group overflow-hidden
                ${
                  activeSection === item.path
                    ? "text-blue-400 bg-blue-500/10 font-semibold"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.name}</span>

              {/* Animated background */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 
                  transition-all duration-300 rounded-lg
                  ${
                    activeSection === item.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                  }
                `}
              />

              {/* Bottom indicator */}
              <div
                className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 rounded-full
                  transition-all duration-300
                  ${activeSection === item.path ? "w-8" : "w-0 group-hover:w-6"}
                `}
              />
            </button>
          ))}
        </div>

        {/* Premium CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleResumeDownload}
            className="
              group relative overflow-hidden
              bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
              hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
              text-white font-semibold text-sm
              px-6 py-3 rounded-xl
              transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5
              shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/40
              flex items-center space-x-2
              border border-blue-500/30 hover:border-blue-400/50
            "
          >
            <Download
              size={16}
              className="group-hover:animate-bounce transition-transform duration-300"
            />
            <span className="relative">Download Resume</span>

            {/* Premium shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </button>
        </div>

        {/* Premium Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`
              relative p-3 rounded-xl transition-all duration-300
              ${
                isOpen
                  ? "text-blue-400 bg-slate-800/80 shadow-lg shadow-blue-500/20"
                  : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
              }
            `}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
              {isOpen && (
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <div
        className={`
          md:hidden transition-all duration-500 ease-out overflow-hidden
          ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-8"
          }
        `}
      >
        <div className="bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/30 mx-4 mb-4 rounded-2xl shadow-2xl shadow-slate-900/50">
          <div className="p-2 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`
                  w-full text-left py-4 px-5 rounded-xl font-medium text-sm
                  transition-all duration-300 relative overflow-hidden group
                  ${
                    activeSection === item.path
                      ? "text-blue-400 bg-blue-500/10 font-semibold shadow-lg shadow-blue-500/10"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-700/50"
                  }
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Mobile item indicator */}
                <div
                  className={`
                    absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full
                    transition-all duration-300
                    ${activeSection === item.path ? "opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                handleResumeDownload();
                setIsOpen(false);
              }}
              className="
                w-full mt-6 py-4 px-6 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-500 hover:to-blue-600
                text-white transition-all duration-300
                flex items-center justify-center space-x-2
                shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-500/40
                border border-blue-500/30
              "
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
