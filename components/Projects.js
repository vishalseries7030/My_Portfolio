"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "E-commerce Website",
    description: "Developed a fully responsive e-commerce website with Next.js & Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    liveLink: "https://ecommerce-ten-beryl-67.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },

  {
    name: "FruitTable",
    description: "A responsive and interactive table for managing fruit data, built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://fruittable.vercel.app/",
    githubLink: "https://github.com/vishalseries7030", 
  },
  {
    name: "Story Book Themes",
    description: "A web application that allows users to apply themes for storybook websites.",
    techStack: ["Next.js", "Vercel", "React"],
    liveLink: "https://story-book-themes.vercel.app/",
    githubLink: "#",
  },
  {
    name: "Portfolio Risk Contribution Optimizer",
    description: "Financial tool for portfolio optimization using Python & Flask.",
    techStack: ["Python", "Flask", "Data Analysis"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Smart City Website & App",
    description: "Developed a Smart City project integrating IoT and automation.",
    techStack: ["React", "Node.js", "MongoDB", "IoT"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "AI-Powered Smart Tiffin Box",
    description: "IoT-based AI-powered smart tiffin box for automated meal management.",
    techStack: ["AI", "IoT", "Machine Learning"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Car Safety Mode using Raspberry Pi",
    description: "Implemented a safety mode function using Raspberry Pi for accident detection.",
    techStack: ["Python", "IoT", "Raspberry Pi"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
 
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 select-none px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center text-blue-400 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects 🚀
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Name & Description */}
              <h3 className="text-2xl font-bold text-blue-300 mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg shadow-md"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex space-x-4">
                {project.liveLink !== "#" && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="mr-2">🌐</span> Live Demo
                  </motion.a>
                )}
                {project.githubLink !== "#" && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="mr-2">💻</span> GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;