import React from "react";
import { Link } from "react-router";
import ReactiveButton from "reactive-button";
const projects = [
  {
    id: "forum-web-application",
    name: "Forum Web Application",
    image: "https://i.ibb.co/v63f9MGK/thread-Nest.png",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
    ],
    description:
      "A full-featured community platform where users can create posts, comment, vote, and engage in discussions. Includes an admin dashboard for managing users, posts, and comments.",
    challenges:
      "Implementing role-based admin controls and optimizing data-heavy components with pagination and dynamic queries.",
    improvements:
      "Future improvements include push notifications for replies, advanced search with filtering, and mobile responsiveness enhancements.",
    liveLink: "https://thread-nest-2b0d5.web.app/",
    githubClient: "https://github.com/tushar-hossain/thread-next-client-side",
    githubServer: "https://github.com/tushar-hossain/thread-next-server-side",
  },
  {
    id: "gardeners-community",
    name: "Gardeners Community",
    image: "https://i.ibb.co/rKThzQdr/gradening.png",
    techStack: ["React", "Firebase", "Node.js", "MongoDB"],
    description:
      "GardenSphere is a dynamic gardening community platform where users can explore gardener profiles, share and discover practical gardening tips, and stay informed with trending advice. Built with modern web technologies, it encourages sustainable gardening through collaborative learning and engagement.",
    challenges:
      "Implementing a Like button that updates likes in the database was challenging. I researched many resources and successfully integrated this feature.",
    improvements:
      "Plan to add real-time chat between gardeners and a mobile-friendly interface.",
    liveLink: "https://gardening-community-5a4c1.web.app/",
    githubClient: "https://github.com/tushar-hossain/Gardeners_Community",
  },
  {
    id: "course-management-system",
    name: "Course Management System",
    image: "https://i.ibb.co/PvSVFbt1/bd-programming.png",
    techStack: ["React", "Express", "MongoDB"],
    description:
      "BD Programming is a web-based learning platform designed to help students learn modern web development interactively and efficiently.",
    challenges:
      "Managing enrollments was complex — enrolling users, unenrolling on repeated clicks, and managing course seat limits.",
    improvements:
      "Add analytics dashboard for admins and more interactive course content.",
    liveLink: "https://bd-programminf.web.app/",
    githubClient: "https://github.com/tushar-hossain/Course_Management_System",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 text-base-content">
      <div>
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Projects
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid md:grid-cols-3 gap-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
        >
          {projects.map(({ id, name, image }) => (
            <div
              key={id}
              className="bg-white rounded-xl transition transform hover:-translate-y-1 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
            >
              <img
                src={image}
                alt={name}
                className="rounded-t-xl object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {name}
                </h3>
                <Link to={`/projectDetail/${id}`}>
                  <ReactiveButton
                    idleText="View Details "
                    color="green"
                    shadow
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
