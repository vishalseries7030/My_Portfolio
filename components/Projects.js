"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "react-icons/fi";

const projects = [
  {
    name: "5th Dimension Technologies Website Revamp",
    description:
      "Revamped the official website for 5th Dimension Technologies, focusing on modern design and improved user experience.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://www.5thdt.com//",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Mumbai Book Fair",
    description:
      "A responsive website for the Mumbai Book Fair event, showcasing event details, schedules, and registration.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://mumbai-book-fair-new.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Gorakhpur Book Fair",
    description:
      "Developed a real-time project for the Gorakhpur Book Fair, featuring event details, schedules, and registration. Built for a company.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://gorakhpur-book-fair.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Shiv Khera Books",
    description:
      "A dedicated website for Shiv Khera's books, featuring book details, author information, and purchase links.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://shiv-khera-books-jyic.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "E-commerce Website",
    description:
      "Developed a fully responsive e-commerce website with Next.js & Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
    liveLink: "https://ecommerce-ten-beryl-67.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "FruitTable",
    description:
      "A responsive and interactive table for managing fruit data, built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://fruittable.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Story Book Themes",
    description:
      "A web application that allows users to apply themes for storybook websites.",
    techStack: ["Next.js", "Vercel", "React"],
    liveLink: "https://story-book-themes.vercel.app/",
    githubLink: "#",
  },
  {
    name: "Portfolio Risk Contribution Optimizer",
    description:
      "Financial tool for portfolio optimization using Python & Flask.",
    techStack: ["Python", "Flask", "Data Analysis"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Smart City Website & App",
    description:
      "Developed a Smart City project integrating IoT and automation.",
    techStack: ["React", "Node.js", "MongoDB", "IoT"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "AI-Powered Smart Tiffin Box",
    description:
      "IoT-based AI-powered smart tiffin box for automated meal management.",
    techStack: ["AI", "IoT", "Machine Learning"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
  {
    name: "Car Safety Mode using Raspberry Pi",
    description:
      "Implemented a safety mode function using Raspberry Pi for accident detection.",
    techStack: ["Python", "IoT", "Raspberry Pi"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white py-20 px-6">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.blue.400)_1px,_transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest works showcasing expertise in web development,
            IoT, and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              {/* Card Content */}
              <div className="relative h-full bg-gray-900 bg-opacity-80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
                {/* Project Title */}
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  {project.liveLink !== "#" && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">🌐</span>
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubLink !== "#" && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-2">💻</span>
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/vishalseries7030"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;