import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Zap,
  ArrowRight,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

const projects = [
  {
    id: "forum-web-application",
    name: "Forum Web Application",
    image: "https://i.ibb.co/v63f9MGK/thread-Nest.png",
    techStack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "TanStack Query",
      "React Hook Form",
      "Chart.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    shortDescription:
      "A full-featured community platform where users can create posts, comment, vote, and engage in discussions.",
    description:
      "ThreadNest is a comprehensive community forum platform designed to foster meaningful interactions and discussions. Users can create and share posts on various topics, engage through comments, and express opinions with upvotes and downvotes. Features role-based authentication, real-time sorting, reporting system, and admin dashboard with analytics.",
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
    techStack: [
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
    ],
    shortDescription:
      "A dynamic gardening community platform for sharing tips, discovering events, and connecting with fellow gardeners.",
    description:
      "GardenSphere brings gardening enthusiasts together to share knowledge regardless of skill level. Built on the MERN stack, it offers gardening events, gardener profiles with tips and expertise, and promotes sustainable gardening through collaborative learning.",
    challenges:
      "Implementing a Like button that updates likes in the database was challenging. I researched many resources and successfully integrated this feature.",
    improvements:
      "Plan to add real-time chat between gardeners and enhanced mobile interface.",
    liveLink: "https://gardening-community-5a4c1.web.app/",
    githubClient: "https://github.com/tushar-hossain/Gardeners_Community",
  },
  {
    id: "course-management-system",
    name: "Course Management System",
    image: "https://i.ibb.co.com/JFHk5BCK/bd-proframming.png",
    techStack: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Tailwind CSS",
    ],
    shortDescription:
      "An interactive learning platform for modern web development technologies.",
    description:
      "BD Programming helps learners gain hands-on coding skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Features user-friendly course catalog, comprehensive details, smooth enrollment process, and secure progress tracking.",
    challenges:
      "Managing enrollments was complex — enrolling users, unenrolling on repeated clicks, and managing course seat limits.",
    improvements:
      "Add analytics dashboard for admins and more interactive course content.",
    liveLink: "https://bd-programminf.web.app/",
    githubClient:
      "https://github.com/tushar-hossain/Course_Management_System/tree/main/course-management-system-client",
    githubServer:
      "https://github.com/tushar-hossain/Course_Management_System/tree/main/course-management-system-server",
  },
];

const TechStackBadge = ({ tech }) => (
  <span className="inline-block bg-slate-700/50 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
    {tech}
  </span>
);

const ProjectCard = ({ project, onViewDetails }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="p-6">
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <TechStackBadge key={index} tech={tech} />
          ))}
          {project.techStack.length > 3 && (
            <span className="text-sm text-gray-500 dark:text-gray-400 self-center">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={() => onViewDetails(project)}
          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
              hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:gap-3"
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-400">{project.name}</h2>
          <button
            onClick={onClose}
            className="p-2 bg-blue-500 hover:bg-gray-100  dark:hover:bg-gray-100 rounded-lg transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Code className="text-emerald-600" size={20} />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <TechStackBadge key={index} tech={tech} />
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <AlertCircle className="text-blue-600" size={20} />
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="text-yellow-600" size={20} />
              Challenges Overcome
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Future Improvements */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <Lightbulb className="text-purple-600" size={20} />
              Future Enhancements
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.improvements}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Github size={16} />
              Client Repo
            </a>

            {project.githubServer && (
              <a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Github size={16} />
                Server Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div id="projects" className="min-h-screen ">
      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Projects</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development
              technologies and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EnhancedPortfolio;
