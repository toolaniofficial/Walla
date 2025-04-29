import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaravel, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-20" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Hello! I’m a passionate <span className="text-blue-500 font-semibold">Full-Stack Web App Developer</span> who loves building clean, scalable, and efficient solutions using modern technologies. I have experience working with startups and teams, and I enjoy turning ideas into functional digital products.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">My Core Skills</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Frontend Development (React, Tailwind, Blade)</li>
              <li>Backend APIs (Laravel, Node.js)</li>
              <li>RESTful API Integration</li>
              <li>Authentication & Security</li>
              <li>Database Design (MySQL, MongoDB)</li>
              <li>Version Control with Git & GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap items-center gap-4 text-3xl text-blue-500 dark:text-blue-400">
              <FaReact title="React" />
              <FaNodeJs title="Node.js" />
              <FaLaravel title="Laravel" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiMysql title="MySQL" />
              <SiMongodb title="MongoDB" />
              <FaGithub title="GitHub" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
