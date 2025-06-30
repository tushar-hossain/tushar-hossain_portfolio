import React from "react";
import myImage from "../../assets/images/tushr-2.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 text-base-content">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        About Me
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            className="w-40 h-40 md:w-80 md:h-80 mx-auto rounded-lg overflow-hidden border-4 border-green-700 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={myImage}
            alt="my photo"
          />
        </div>
        <div className="space-y-3">
          <p className="text-gray-100 text-lg leading-relaxed text-justify">
            Hello! I'm <span className="font-semibold">Md. Tushar Hossain</span>
            , a passionate and dedicated{" "}
            <span className="font-semibold">Full Stack Web Developer</span> with
            a passion for creating efficient and scalable web applications. My
            programming journey began at university, where I quickly developed a
            strong interest in software development. Since then, I've enjoyed
            building full-stack projects using tools like React, Tailwind CSS,
            Node.js, and Express.
          </p>
          <p className="text-gray-100 text-lg leading-relaxed text-justify">
            I focus on writing clean, maintainable code that aligns with
            industry best practices. Outside of coding, I enjoy nature,
            exploring new technologies, and playing sports. I'm always eager to
            learn, grow, and take on new challenges that push me to become a
            better developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
