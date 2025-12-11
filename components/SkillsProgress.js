"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillsProgress = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 92, color: "from-blue-400 to-cyan-500" },
        { name: "Next.js", level: 85, color: "from-slate-700 to-slate-900" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-500 to-cyan-600" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-emerald-600" },
        { name: "MongoDB", level: 85, color: "from-green-600 to-teal-600" },
        { name: "Python", level: 75, color: "from-yellow-500 to-blue-600" },
        { name: "REST APIs", level: 90, color: "from-purple-500 to-pink-600" },
      ]
    },
    {
      title: "AI/ML & DevOps",
      skills: [
        { name: "AI/ML", level: 70, color: "from-purple-500 to-pink-600" },
        { name: "Gen AI", level: 78, color: "from-violet-500 to-purple-600" },
        { name: "Docker", level: 85, color: "from-blue-500 to-cyan-600" },
        { name: "AWS/Cloud", level: 75, color: "from-amber-500 to-orange-600" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My proficiency levels across different technologies and domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.2 }}
              className="glass-dark p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIdx * 0.2 + skillIdx * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;