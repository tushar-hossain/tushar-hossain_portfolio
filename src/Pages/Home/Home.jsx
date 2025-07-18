import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ContactInfo from "../ContactInfo/ContactInfo";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section id="home">
        <HeroSection />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1" />

      {/* about me section */}
      <section>
        <AboutMe />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1" />

      {/* skills section */}
      <section>
        <Skills />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1" />

      {/* education section */}
      <section>
        <Education />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1" />

      {/* project section */}
      <section>
        <Projects />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1" />

      {/* contact info */}
      <ContactInfo />
    </div>
  );
};

export default Home;
