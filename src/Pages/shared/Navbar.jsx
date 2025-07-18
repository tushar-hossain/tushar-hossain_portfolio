import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const toggleMenu = () => setIsOpen(!isOpen);
  const [activeSection, setActiveSection] = useState("");

  // Listen to scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const section = document.getElementById(item.path);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(item.path);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Md_Tushar_Hossain_Resume.pdf";
    link.download = "Md_Tushar_Hossain_Resume.pdf";
    link.click();
  };

  const navLinkClass =
    "font-medium text-gray-700 hover:text-green-700 transition";

  return (
    <nav className="fixed top-0 w-full bg-[#020618]  shadow-md z-50 py-3">
      <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold text-green-700">Tushar.dev</div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => scrollToSection(item.path)}
              className={`${navLinkClass} ${
                activeSection === item.path
                  ? "text-green-800 font-semibold cursor-pointer underline"
                  : "cursor-pointer  text-green-700"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:block">
          <button
            onClick={handleResumeDownload}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm transition hover:shadow-sm shadow-white cursor-pointer"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <span
                key={item.name}
                onClick={() => scrollToSection(item.path)}
                className={`${navLinkClass} ${
                  activeSection === item.path
                    ? "text-green-800 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </span>
            ))}
            <button
              onClick={() => {
                handleResumeDownload();
                setIsOpen(false);
              }}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm transition hover:shadow-sm shadow-white"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
