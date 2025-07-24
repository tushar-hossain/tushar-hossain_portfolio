import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-base-content py-10 px-4">
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-6">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-green-700">Tushar.dev</div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl text-white">
          <a
            href="https://github.com/tushar-hossain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-hossain-undefined-0361b4371/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/880194371573"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 Md. Tushar Hossain All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
