import myImage from "../../assets/images/tushar-2.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 text-base-content">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="space-y-6"
        >
          <img
            className="w-40 h-40 md:w-80 md:h-80 mx-auto rounded-lg overflow-hidden border-4 border-green-700 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            src={myImage}
            alt="my photo"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="space-y-3 mt-4 md:mt-0"
        >
          <p className="text-gray-100 text-lg leading-relaxed text-justify">
            Hello! I’m <span className="font-semibold">Md. Tushar Hossain</span>
            , a passionate{" "}
            <span className="font-semibold">MERN Stack Web Developer</span>{" "}
            dedicated to building efficient and scalable web applications. My
            programming journey started back at university, where I quickly
            developed a genuine interest in web development. Since then, I’ve
            been focused on creating projects using the MERN stack, including
            tools like React.js, Next.js, Tailwind CSS, Node.js, Express.js, and
            MongoDB.
            <p>
              I prioritize writing clean, maintainable code that adheres to
              industry best practices. Outside of work, I love spending time in
              nature, exploring emerging technologies, and playing sports. I’m
              always eager to learn, grow, and take on new challenges that help
              me become a better developer.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
