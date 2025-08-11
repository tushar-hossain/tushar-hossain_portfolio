import myImage from "../../assets/images/tushar-2.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 text-base-content">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6">
          <img
            className="w-40 h-40 md:w-80 md:h-80 mx-auto rounded-lg overflow-hidden border-4 border-green-700 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={myImage}
            alt="my photo"
          />
        </div>
        <div className="space-y-3 mt-4 md:mt-0">
          <p className="text-gray-100 text-lg leading-relaxed text-justify">
            Hey there! I'm{" "}
            <span className="font-semibold">Md. Tushar Hossain</span>, a
            dedicated{" "}
            <span className="font-semibold">MERN Stack Web Developer</span> with
            a passion for transforming ideas into practical, user-friendly web
            applications. My adventure in programming kicked off back in
            university, where a simple curiosity about how websites function
            blossomed into a full-blown commitment to mastering web development.
            <p>
              Since then, I've rolled up my sleeves and tackled projects using
              technologies like React.js, Next.js, Tailwind CSS, Node.js,
              Express.js, and MongoDB. I always aim for clean, maintainable code
              and a smooth user experience. I thrive on solving problems,
              picking up new tools, and honing my skills with every project I
              dive into.
            </p>
            <p>
              When I'm not glued to my computer screen, you can usually find me
              outside soaking up nature, keeping up with the latest tech trends,
              or playing sports. My drive comes from curiosity, a desire to
              grow, and the thrill of crafting solutions that truly make a
              difference.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
