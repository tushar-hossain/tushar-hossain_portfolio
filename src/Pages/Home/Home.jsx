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

      <hr />

      {/* about me section */}
      <section>
        <AboutMe />
      </section>

      <hr />

      {/* skills section */}
      <section>
        <Skills />
      </section>

      <hr />

      {/* education section */}
      <section>
        <Education />
      </section>

      <hr />

      {/* project section */}
      <section>
        <Projects />
      </section>

      <hr />

      {/* contact info */}
      <ContactInfo />
    </div>
  );
};

export default Home;
