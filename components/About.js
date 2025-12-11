"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";

export default function About() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "MERN Stack", icon: "⚡", color: "from-cyan-500 to-blue-600", level: 90 },
    { name: "Next.js", icon: "▲", color: "from-slate-700 to-slate-900", level: 85 },
    { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-500", level: 92 },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-600", level: 88 },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-teal-600", level: 85 },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700", level: 80 },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-600", level: 75 },
    { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-pink-600", level: 70 },
    { name: "Gen AI", icon: "✨", color: "from-violet-500 to-purple-600", level: 78 },
    { name: "LLM Integration", icon: "🧠", color: "from-indigo-500 to-purple-600", level: 82 },
    { name: "MCP Servers", icon: "🔌", color: "from-orange-500 to-red-600", level: 75 },
    { name: "TensorFlow", icon: "🔥", color: "from-orange-600 to-red-500", level: 70 },
    { name: "DevOps", icon: "🚀", color: "from-red-500 to-pink-600", level: 80 },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-600", level: 85 },
    { name: "CI/CD", icon: "⚙️", color: "from-gray-600 to-gray-800", level: 78 },
    { name: "AWS/Cloud", icon: "☁️", color: "from-amber-500 to-orange-600", level: 75 },
    { name: "Tailwind CSS", icon: "🎨", color: "from-teal-500 to-cyan-600", level: 95 },
    { name: "Git & GitHub", icon: "📦", color: "from-gray-700 to-gray-900", level: 90 },
  ];

  const expertise = [
    {
      title: "Full-Stack Development",
      icon: "💻",
      description: "Building end-to-end web applications with MERN stack, ensuring scalability and performance.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Implementing Gen AI solutions, LLM integrations, and ML models for intelligent applications.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "MCP Server Development",
      icon: "🔌",
      description: "Creating Model Context Protocol servers for AI infrastructure and seamless AI integrations.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      description: "Deploying applications with Docker, CI/CD pipelines, and cloud platforms like AWS.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgb(59, 130, 246), transparent 50%)`,
        }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & AI Innovator passionate about building intelligent, 
              scalable applications that push the boundaries of technology
            </p>
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Image */}
         <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-2"
>
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-800">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

      <Image
        src="/image/profile.jpg"
        alt="Vishal Payyawar"
        fill
        className="object-cover"
        priority
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-white mb-1">Vishal Payyawar</h3>
        <p className="text-blue-400 font-medium">Full-Stack Developer | AI Enthusiast</p>
        <div className="flex gap-2 mt-3">
          <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 border border-blue-500/30">
            Open to Work
          </span>
          <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-300 border border-green-500/30">
            Available for Freelance
          </span>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                <span>👨‍💻</span> Who I Am
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I'm a passionate developer specializing in building modern web applications with the 
                <span className="text-blue-400 font-semibold"> MERN Stack</span>. My expertise extends beyond traditional web development into the exciting world of 
                <span className="text-purple-400 font-semibold"> Artificial Intelligence and Machine Learning</span>.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I work with <span className="text-pink-400 font-semibold">Gen AI technologies</span>, build 
                <span className="text-orange-400 font-semibold"> MCP Servers</span> for AI infrastructure, implement 
                <span className="text-green-400 font-semibold"> ML models</span>, and manage 
                <span className="text-cyan-400 font-semibold"> DevOps pipelines</span>. I love transforming complex problems into elegant solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "20+", label: "Projects", icon: "🚀" },
                { value: "3+", label: "Years Exp.", icon: "⏱️" },
                { value: "50+", label: "Technologies", icon: "💡" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Areas of Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${area.gradient} rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500`} />
                <div className="relative p-6 bg-slate-900 rounded-2xl">
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-400">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Technologies I work with to build exceptional digital experiences
          </p>
          
          {/* Auto-Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll hover:pause">
              {/* Duplicate skills for infinite scroll */}
              {[...skills, ...skills].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group flex-shrink-0"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300`} />
                  <div className="relative p-4 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-transparent transition-all duration-300 min-w-[140px] glass-dark">
                    <div className="text-3xl mb-2 text-center group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                    <div className="text-sm text-gray-300 text-center font-medium whitespace-nowrap">{skill.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-12">
              {/* Experience 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="flex items-center justify-end lg:justify-start lg:w-1/2 lg:pr-12">
                  <div className="relative group w-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                    <div className="relative p-6 bg-slate-900 rounded-xl">
                      <div className="absolute -right-3 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950" />
                      <h3 className="text-xl font-bold text-blue-400 mb-2">MERN Full Stack Developer Intern</h3>
                      <p className="text-gray-400 mb-2">5th Dimension Technology, Hyderabad</p>
                      <p className="text-sm text-gray-500 mb-3">January 2025 – June 2025</p>
                      <p className="text-gray-300 mb-4">
                        Completed intensive 6-month internship building scalable web applications, 
                        optimizing APIs, and implementing modern UI/UX practices with MERN stack.
                      </p>
                      <motion.a
                        href="https://drive.google.com/file/d/1HV5TUqyBWYPSE-hsWZSMx4XY9El9cCxJ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      >
                        <span>View Certificate</span>
                        <span>→</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <div className="flex items-center justify-start lg:justify-end lg:w-1/2 lg:ml-auto lg:pl-12">
                  <div className="relative group w-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500" />
                    <div className="relative p-6 bg-slate-900 rounded-xl">
                      <div className="absolute -left-3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-950" />
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Website Design & Development Intern</h3>
                      <p className="text-gray-400 mb-2">Internship Studio</p>
                      <p className="text-sm text-gray-500 mb-3">August 2024 – September 2024</p>
                      <p className="text-gray-300 mb-4">
                        Developed responsive web pages, enhanced UI/UX, and optimized web performance.
                      </p>
                      <motion.a
                        href="https://drive.google.com/file/d/1I-eSo0dRgyC1nmnmfobpilXX6UPIvMys/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                      >
                        <span>View Certificate</span>
                        <span>→</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements & Recognition
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏆", title: "Academic Excellence", desc: "Taluka-Level Scholarship Winner", color: "from-yellow-500 to-orange-500" },
              { icon: "🏏", title: "Sports Achievement", desc: "State-Level Cricket Player (2018)", color: "from-green-500 to-emerald-500" },
              { icon: "📜", title: "Certified Developer", desc: "LinkedIn Full Stack Web Development", color: "from-blue-500 to-cyan-500" },
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500`} />
                <div className="relative p-6 bg-slate-900 rounded-xl text-center">
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}