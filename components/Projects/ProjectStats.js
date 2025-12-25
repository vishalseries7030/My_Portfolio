"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15+", label: "Projects Completed", icon: "🎯" },
  { value: "10+", label: "Technologies Used", icon: "⚡" },
  { value: "100%", label: "Client Satisfaction", icon: "❤️" },
  { value: "24/7", label: "Support Available", icon: "🚀" },
];

const ProjectStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
    >
      {stats.map((stat, idx) => (
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
  );
};

export default ProjectStats;