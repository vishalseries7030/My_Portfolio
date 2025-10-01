"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    name: "5th Dimension Technologies Website",
    description: "Complete website revamp with modern design, improved UX, and cutting-edge animations. Enhanced performance and SEO optimization.",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    liveLink: "https://www.5thdt.com/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Web Development",
    featured: true,
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    name: "Mumbai Book Fair",
    description: "Interactive event website with real-time schedule updates, registration system, and responsive design for seamless user experience.",
    techStack: ["Next.js", "Tailwind", "React", "Vercel"],
    liveLink: "https://mumbai-book-fair-new.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Web Development",
    featured: true,
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  },
  {
    name: "Gorakhpur Book Fair",
    description: "Real-time event management platform with dynamic schedules, exhibitor listings, and integrated registration for large-scale book fair.",
    techStack: ["Next.js", "Tailwind", "API Integration"],
    liveLink: "https://gorakhpur-book-fair.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Web Development",
    featured: true,
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    name: "Shiv Khera Books",
    description: "Elegant showcase website for renowned author's books with interactive elements, detailed descriptions, and e-commerce integration.",
    techStack: ["Next.js", "Tailwind", "SEO"],
    liveLink: "https://shiv-khera-books-jyic.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Web Development",
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  },
  {
    name: "Full-Stack E-commerce",
    description: "Complete e-commerce solution with product management, shopping cart, payment gateway integration, and admin dashboard.",
    techStack: ["Next.js", "MongoDB", "Node.js", "Stripe"],
    liveLink: "https://ecommerce-ten-beryl-67.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Full-Stack",
    featured: true,
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    name: "FruitTable Manager",
    description: "Interactive data management system with CRUD operations, filtering, sorting, and export functionality for inventory management.",
    techStack: ["Next.js", "Tailwind", "React Hooks"],
    liveLink: "https://fruittable.vercel.app/",
    githubLink: "https://github.com/vishalseries7030",
    category: "Web Development",
    gradient: "from-yellow-500 via-orange-500 to-red-500"
  },
  {
    name: "Story Book Themes",
    description: "Dynamic theming system for storybook websites with real-time preview, custom color schemes, and responsive layouts.",
    techStack: ["Next.js", "CSS Variables", "React Context"],
    liveLink: "https://story-book-themes.vercel.app/",
    githubLink: "#",
    category: "UI/UX",
    gradient: "from-pink-500 via-rose-500 to-red-500"
  },
  {
    name: "Portfolio Risk Optimizer",
    description: "Advanced financial analytics tool using ML algorithms for portfolio optimization, risk assessment, and investment strategy recommendations.",
    techStack: ["Python", "Flask", "Pandas", "ML"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
    category: "AI/ML",
    gradient: "from-blue-600 via-indigo-600 to-purple-600"
  },
  {
    name: "Smart City Platform",
    description: "IoT-integrated smart city management system with real-time monitoring, automated controls, and data analytics dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "IoT"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
    category: "IoT",
    featured: true,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500"
  },
  {
    name: "AI Smart Tiffin Box",
    description: "Revolutionary IoT device with AI-powered meal management, temperature control, nutritional tracking, and mobile app integration.",
    techStack: ["AI", "IoT", "ML", "Raspberry Pi"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
    category: "AI/ML",
    gradient: "from-green-500 via-teal-500 to-cyan-500"
  },
  {
    name: "Car Safety System",
    description: "Intelligent accident detection and prevention system using Raspberry Pi with real-time alerts, GPS tracking, and emergency response.",
    techStack: ["Python", "IoT", "Raspberry Pi", "Sensors"],
    liveLink: "#",
    githubLink: "https://github.com/vishalseries7030",
    category: "IoT",
    gradient: "from-red-500 via-orange-500 to-yellow-500"
  },
];

const categories = ["All", "Web Development", "Full-Stack", "AI/ML", "IoT", "UI/UX"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🚀</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning web development, AI/ML, IoT, and full-stack applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative h-full"
              >
                {/* Animated Glow Border */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: hoveredIndex === index ? Infinity : 0,
                  }}
                />

                {/* Card */}
                <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800 group-hover:border-transparent transition-all duration-500">
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg"
                    >
                      <span>⭐</span>
                      <span>Featured</span>
                    </motion.div>
                  )}

                  {/* Image/Gradient Section */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      animate={{
                        backgroundPosition: hoveredIndex === index ? ['0% 0%', '100% 100%'] : '0% 0%',
                      }}
                      transition={{ duration: 3, repeat: hoveredIndex === index ? Infinity : 0, repeatType: "reverse" }}
                    />
                    
                    {/* Floating Icons */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        y: hoveredIndex === index ? [-5, 5, -5] : 0,
                      }}
                      transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                    >
                      <span className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                        {project.category === "Web Development" && "🌐"}
                        {project.category === "Full-Stack" && "💻"}
                        {project.category === "AI/ML" && "🤖"}
                        {project.category === "IoT" && "📡"}
                        {project.category === "UI/UX" && "🎨"}
                      </span>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold border border-white/20">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <motion.h3
                      className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      animate={{
                        backgroundPosition: hoveredIndex === index ? ['0%', '100%'] : '0%',
                      }}
                      transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0, repeatType: "reverse" }}
                    >
                      {project.name}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium border border-slate-700 hover:border-blue-500/50 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.liveLink !== "#" && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                        >
                          <span>🌐</span>
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.githubLink !== "#" && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold border border-slate-700 hover:border-slate-600 transition-all duration-300"
                        >
                          <span>💻</span>
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "15+", label: "Projects Completed", icon: "🎯" },
            { value: "10+", label: "Technologies Used", icon: "⚡" },
            { value: "100%", label: "Client Satisfaction", icon: "❤️" },
            { value: "24/7", label: "Support Available", icon: "🚀" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 backdrop-blur-sm text-center transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/vishalseries7030"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
          >
            <span>Explore More on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;