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

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />

      {/* about me section */}
      <section>
        <AboutMe />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />

      {/* skills section */}
      <section>
        <Skills />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />

      {/* education section */}
      <section>
        <Education />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />

      {/* project section */}
      <section>
        <Projects />
      </section>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />

      {/* contact info */}
      <section>
        <ContactInfo />
      </section>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />
    </div>
  );
};

export default Home;
