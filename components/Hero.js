'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, experience: 0, technologies: 0 });
  const fullText = 'Vishal Payyawar';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 15, experience: 3, technologies: 50 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          experience: Math.floor(targets.experience * progress),
          technologies: Math.floor(targets.technologies * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Gen AI', icon: '✨' },
    { name: 'DevOps', icon: '🚀' }
  ];

  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Technologies Used' }
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/vishal-payyawar-46a211276/', 
      label: 'LinkedIn', 
      hoverColor: 'hover:text-blue-500' 
    },
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/vishalseries7030', 
      label: 'GitHub', 
      hoverColor: 'hover:text-white' 
    },
    { 
      icon: <FaSquareXTwitter />, 
      href: 'https://twitter.com/your-twitter-handle', 
      label: 'Twitter', 
      hoverColor: 'hover:text-sky-400' 
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Animated Orbs - Using Tailwind's animate-pulse */}
      <div className="absolute top-20 left-20 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 backdrop-blur-lg border border-blue-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-gray-300 font-medium">Available for Work</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block origin-bottom-right ml-2"
                >
                  👋
                </motion.span>
              </motion.h1>

              {/* Animated Role Titles */}
              <div className="h-14 sm:h-16 md:h-20 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -70, -140, -210, -280, 0] }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1] 
                  }}
                  className="space-y-3 md:space-y-4"
                >
                  {[
                    { role: 'Full-Stack Developer', gradient: 'from-blue-400 to-cyan-400', tech: 'MERN Stack' },
                    { role: 'AI Innovator', gradient: 'from-purple-400 to-pink-400', tech: 'Gen AI Integration' },
                    { role: 'ML Engineer', gradient: 'from-green-400 to-emerald-400', tech: 'Model Deployment' },
                    { role: 'DevOps Engineer', gradient: 'from-orange-400 to-red-400', tech: 'CI/CD & Cloud' },
                    { role: 'MCP Server Developer', gradient: 'from-indigo-400 to-purple-400', tech: 'AI Infrastructure' }
                  ].map((item, idx) => (
                    <p key={idx} className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap">
                      <span className={`bg-gradient-to-r ${item.gradient} text-transparent bg-clip-text`}>
                        {item.role}
                      </span>
                      {' '}
                      <span className="text-gray-600">|</span>
                      {' '}
                      <span className="text-gray-400">{item.tech}</span>
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I craft scalable web applications with the MERN stack, turning ideas into reality with clean code and modern design. Passionate about AI integration and creating seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => window.open("https://drive.google.com/file/d/18FP_oShTuWnV4BsWz3gmiSmOOqFNU9KV/view?usp=sharing", "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Download Resume
              </motion.button>

              <motion.button
                onClick={() => window.location.href = '#contact'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <span className="text-gray-500 text-sm">Connect:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 transition-all duration-300 text-xl text-gray-300 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ 
                    delay: 0.8 + idx * 0.1, 
                    type: 'spring', 
                    stiffness: 120 
                  }}
                  className="group relative p-4 md:p-6 rounded-2xl bg-slate-900/60 backdrop-blur-lg border border-slate-800/50 text-center overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-1 md:mb-2">
                      {idx === 0 ? `${counters.projects}+` : 
                       idx === 1 ? `${counters.experience}+` : 
                       `${counters.technologies}+`}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.08, 
                    rotate: 3 
                  }}
                  transition={{ 
                    delay: 1 + idx * 0.05, 
                    type: 'spring', 
                    stiffness: 120 
                  }}
                  className="group relative flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-slate-900/60 backdrop-blur-lg border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-2xl md:text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-xs md:text-sm text-gray-300 font-medium relative z-10">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;