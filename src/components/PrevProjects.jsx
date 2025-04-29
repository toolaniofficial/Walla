import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my web development skills, past projects, and contact information.",
    github: "https://github.com/yourusername/portfolio-website",
    live: "https://yourportfolio.com",
  },
  {
    title: "Task Manager",
    description:
      "A task management web app to help users organize their daily tasks, built with React, Node.js, and MongoDB.",
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "An e-commerce web app for buying and selling products, developed with Laravel and integrated with Stripe for payments.",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce.com",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, edit, and publish articles. Built with React, Node.js, and MySQL.",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://blogplatform.com",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-20" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
