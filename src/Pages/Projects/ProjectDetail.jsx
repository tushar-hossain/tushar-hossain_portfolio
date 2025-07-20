import React from "react";
import { useParams, Link } from "react-router";
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

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-600">Project not found</h2>
        <Link to="/projects" className="btn btn-outline btn-success mt-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="w-11/12 mx-auto py-12 my-18">
      <h1 className="text-4xl font-bold text-green-700 mb-6">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-6 w-full h-auto object-cover"
      />

      <h3 className="text-2xl font-semibold mb-2 text-white">
        Technology Stack
      </h3>
      <div className="list-disc list-inside mb-6 flex gap-3 text-white">
        {project.techStack.map((tech, i) => (
          <p className="px-4 py-1 bg-green-700 rounded-full" key={i}>
            <span>{tech}</span>
          </p>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-2  text-white">Description</h3>
      <p className="mb-6  text-white">{project.description}</p>
      <h3 className="text-2xl font-semibold mb-2  text-white">
        Challenges Faced
      </h3>
      <p className="mb-6  text-white">{project.challenges}</p>

      <h3 className="text-2xl font-semibold mb-2  text-white">
        Potential Improvements & Future Plans
      </h3>
      <p className=" text-white mb-5">{project.improvements}</p>

      <div className="flex gap-5">
        {/* live demo  */}
        <Link to={project.liveLink} target="_blank">
          <ReactiveButton idleText="Live Demo" color="green" shadow rounded />
        </Link>

        {/* GitHub Repository */}
        <Link to={project.githubClient} target="_blank">
          <ReactiveButton idleText="GitHub Repo" color="green" shadow rounded />
        </Link>

        {/* back to project */}
        <Link to="/">
          <ReactiveButton
            idleText="  Back to Home"
            color="green"
            shadow
            rounded
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;

/* 

      <h3 className="text-2xl font-semibold mb-2  text-white">
          (Client)
      </h3>
      <a
        href={project.}
        
        rel="noopener noreferrer"
        className="text-green-700 underline mb-6 block"
      >
        {project.githubClient}
      </a>

*/
