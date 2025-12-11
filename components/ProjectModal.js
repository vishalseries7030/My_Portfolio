"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-dark rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-700 transition-colors"
            >
              <FaTimes className="w-5 h-5 text-gray-400" />
            </button>

            {/* Project Image/Preview */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
              </div>
              {project.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                  ⭐ Featured
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">{project.name}</h2>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-lg text-sm font-medium border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Responsive Design & Mobile Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Modern UI/UX with Smooth Animations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Performance Optimized & SEO Friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Cross-browser Compatibility
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {project.liveLink !== "#" && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
                
                {project.githubLink !== "#" && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;