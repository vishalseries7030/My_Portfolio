"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      "Web Development": "🌐",
      "Full-Stack": "💻",
      "AI/ML": "🤖",
      "IoT": "📡",
      "UI/UX": "🎨"
    };
    return icons[category] || "💼";
  };

  return (
    <motion.div
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
        animate={hoveredIndex === index ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
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

        {/* Project Image Section */}
        <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          ) : (
            <>
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
                animate={{ y: hoveredIndex === index ? [-5, 5, -5] : 0 }}
                transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
              >
                <span className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {getCategoryIcon(project.category)}
                </span>
              </motion.div>
            </>
          )}

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
            {project.techStack.slice(0, 5).map((tech, i) => (
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
            {project.techStack.length > 5 && (
              <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-medium border border-slate-700">
                +{project.techStack.length - 5}
              </span>
            )}
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
        <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;