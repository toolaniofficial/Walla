import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaGitAlt,
  } from "react-icons/fa";
  import {
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiFirebase,
    SiTypescript,
    SiVite,
  } from "react-icons/si";
  
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ];
  
  export default function Skills() {
    return (
      <section className="bg-gray-50 dark:bg-gray-800 py-12 px-6 md:px-20" id="skills">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  