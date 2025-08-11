import React from "react";
import { useParams, Link } from "react-router";
import ReactiveButton from "reactive-button";

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
      " JWT Authentication",
    ],
    description:
      "ThreadNest is a fresh and all-encompassing community forum platform crafted to spark meaningful interactions and discussions among its users. It gives users the power to create and share posts on a wide range of topics, engage in conversations through comments, and voice their opinions with upvotes and downvotes. The platform features role-based authentication, ensuring secure access and tailored privileges for both regular users and administrators. With its real-time sorting capabilities, users can effortlessly explore the latest content or dive into the most popular discussions, enhancing their overall experience. ThreadNest also boasts a solid reporting system, allowing community members to flag inappropriate content, which helps keep the environment respectful and safe. Administrators benefit from a dedicated dashboard that enables them to manage users effectively, moderate posts and comments, oversee reports, and analyze site activity through detailed analytics. The platform’s flexible tagging system makes it easy for users to categorize their posts, ensuring seamless content discovery. Built on a modern tech stack that includes React, Node.js, Express, and MongoDB, ThreadNest delivers a scalable, fast, and responsive user experience, making it the perfect hub for online communities to connect, share, and grow.",
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
      "This project is a well-thought-out web application designed to bring gardening enthusiasts together and promote the sharing of knowledge, no matter their skill level. Built on the robust MERN stack (MongoDB, Express, React, and Node.js), the platform offers a smooth and engaging user experience that encourages community involvement and learning. Members of this gardening community can easily find a variety of local and regional gardening events that cater to different interests and skill levels, complete with detailed descriptions, schedules, and information about the hosts. The platform also showcases rich profiles of fellow gardeners, highlighting their experiences, expertise, and helpful tips, making it easier for users to find inspiration and connect with others who share their passion. The application prioritizes usability and responsiveness, utilizing Tailwind CSS and DaisyUI to create a modern, intuitive interface that looks great on any device.",
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
    image: "https://i.ibb.co.com/JFHk5BCK/bd-proframming.png",
    techStack: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Tailwind CSS",
    ],
    description:
      "BD Programming is an exciting web application crafted to help learners gain hands-on coding skills in essential web development technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. The platform boasts a user-friendly course catalog, comprehensive course details, and a smooth enrollment process. With strong authentication and user management features, learners can securely monitor their progress. The backend is designed for scalability and performance, while the frontend presents a sleek, responsive interface that works beautifully on any device. This project highlights my skills in mern-stack development, covering everything from API design and state management to authentication flows, all wrapped up in a modern UI powered by React and Tailwind CSS. Dive into the project to see how I blend technology and design to craft engaging educational experiences.",
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
      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg mb-6 w-full h-auto object-cover"
      />

      <h1 className="text-4xl font-bold text-green-700 mb-6">{project.name}</h1>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Technology Stack
      </h3>
      <div className="list-disc list-inside mb-6 flex flex-wrap gap-3 text-white">
        {project.techStack.map((tech, i) => (
          <p className="" key={i}>
            <span className="btn border-none text-white bg-green-700">
              {tech}
            </span>
          </p>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-2  text-white">Description</h3>
      <p className="mb-6  text-white text-justify">{project.description}</p>
      <h3 className="text-2xl font-semibold mb-2  text-white">
        Challenges Faced
      </h3>
      <p className="mb-6  text-white">{project.challenges}</p>

      <h3 className="text-2xl font-semibold mb-2  text-white">
        Potential Improvements & Future Plans
      </h3>
      <p className=" text-white mb-5">{project.improvements}</p>

      <div className="flex flex-wrap gap-5">
        {/* live demo  */}
        <Link to={project.liveLink} target="_blank">
          <ReactiveButton
            className="btn rounded-md"
            idleText="Live Demo"
            color="green"
            shadow
          />
        </Link>

        {/* GitHub Repository */}
        <Link to={project.githubClient} target="_blank">
          <ReactiveButton
            className="btn rounded-md"
            idleText="GitHub Repo"
            color="green"
            shadow
          />
        </Link>

        {/* back to project */}
        <Link to="/">
          <ReactiveButton
            className="btn rounded-md"
            idleText="Back to Home"
            color="green"
            shadow
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
