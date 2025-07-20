import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import myImage from "../../../assets/images/tushar_hossain.jpg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto py-12 my-18 flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="text-center md:text-left space-y-5">
        <h1 className="text-xl mt-5 lg:mt-0 md:text-3xl font-bold text-green-700">
          <span></span>{" "}
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Hi, I’m", "Md. Tushar Hossain", "Full Stack Developer"]}
          />
        </h1>
        <p className="text-gray-100 max-w-md">
          I specialize in creating modern, responsive web applications using
          React, Tailwind CSS, Node.js, and MongoDB. Passionate about clean code
          and seamless user experience.
        </p>

        <div className="pt-4">
          {/* Social Icons */}
          <div className="flex gap-3 items-center justify-center md:justify-start text-2xl mb-5">
            <a
              href="https://github.com/tushar-hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-300 hover:text-green-700 transition p-2 rounded-full border hover:shadow-sm shadow-white 
              "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-hossain-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-300 hover:text-green-700 transition p-2 rounded-full border hover:shadow-sm shadow-white"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume button */}

          <div>
            <a
              href="/Resume_of_Md_Tushar_Hossain.pdf"
              download="Resume_of_Md_Tushar_Hossain.pdf"
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm transition hover:shadow-sm shadow-white cursor-pointer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-700 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <img
          src={myImage}
          alt="Tushar Hossain"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
