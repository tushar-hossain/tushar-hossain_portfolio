import React, { useState } from "react";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Code,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/tushar-hossain",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tushar-hossain-undefined-0361b4371/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/880194371573",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "tusharsu97@gmail.com",
      href: "mailto:tusharsu97@gmail.com",
    },
    {
      icon: Phone,
      text: "+880 194371573",
      href: "tel:+880194371573",
    },
    {
      icon: MapPin,
      text: "Dhaka, Bangladesh",
      href: null,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Decorative top border */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600"></div> */}

      <div className="w-11/12 mx-auto pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg">
                <Code className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text">
                <span className="text-white">Tushar</span>
                <span className="text-blue-400">.dev</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate MERN stack developer crafting modern, responsive web
              applications with clean code and exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="text-red-500 animate-pulse" size={16} />
              <span>and</span>
              <Coffee className="text-yellow-500" size={16} />
              <span>in Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Get In Touch
            </h4>
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group">
                    <Icon
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm">{info.text}</span>
                  </div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Follow Me
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-lg border border-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-blue-500 group`}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="group-hover:animate-pulse" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-400">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-blue-400">
                  Md. Tushar Hossain
                </span>
                . All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed & Developed with passion
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Built with</span>
              <div className="flex gap-1">
                <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                  React.js
                </span>
                <span className="bg-green-600/20 text-blue-400 px-2 py-1 rounded">
                  Tailwind Css
                </span>
                <span className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded">
                  Daisy UI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5"></div>
      </div>
    </footer>
  );
};

export default Footer;
