import HeroSection from "./HeroSection/HeroSection";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ContactInfo from "../ContactInfo/ContactInfo";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <section>
        <HeroSection />
      </section>

      {/* Professional Experience section */}
      <ProfessionalExperience />

      {/* about me section */}
      <section>
        <AboutMe />
      </section>

      {/* skills section */}
      <section>
        <Skills />
      </section>

      {/* education section */}
      <section>
        <Education />
      </section>

      {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" /> */}

      {/* project section */}
      <section id="Projects">
        <Projects />
      </section>

      {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" /> */}

      {/* contact info */}
      <section>
        <ContactInfo />
      </section>
      {/* <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" /> */}
    </div>
  );
};

export default Home;
