"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main 
      ref={containerRef} 
      className="relative min-h-screen bg-[#030014] overflow-hidden"
    >
      <Navbar />
      
      {/* Interactive Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgb(59, 130, 246), transparent 70%)`,
        }}
      />
      
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.blue.400)_1px,_transparent_0)] bg-[size:40px_40px]"
          style={{ y: backgroundY }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Hero Section with Floating Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.div 
            className="text-center space-y-4 relative"
            style={{ y: textY }}
          >
            <motion.h1 
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to My Portfolio
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Passionate MERN Stack Developer crafting exceptional digital experiences
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Profile Section with Card Effect */}
        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <div className="relative group cursor-pointer">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
                animate={{
                  background: [
                    "linear-gradient(to right, #2563eb, #7c3aed, #ec4899)",
                    "linear-gradient(to left, #2563eb, #7c3aed, #ec4899)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/image/profile.jpg"
                  width={400}
                  height={400}
                  alt="Vishal Payyawar"
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">Vishal Payyawar</h3>
                    <p className="text-sm">MERN Stack Developer</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section with Animated Border */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 space-y-8"
          >
            <div className="relative group p-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl" />
              <div className="relative space-y-4">
                <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in building scalable and interactive web applications using the
                  <span className="text-blue-400 font-semibold"> MERN Stack</span>. With expertise in
                  <span className="text-purple-400 font-semibold"> React.js, Next.js, MongoDB, Node.js</span>, 
                  and AI integration, I transform ideas into powerful digital solutions.
                </p>
              </div>
            </div>

            {/* Skills Section with Hover Effects */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "MERN Stack",
                  "Next.js",
                  "MongoDB",
                  "React.js",
                  "Node.js",
                  "Tailwind CSS",
                  "Python",
                  "SQL",
                  "AI & Automation",
                  "Git & GitHub",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience & Achievements with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* Experience Section */}
<div className="group relative">
  <motion.div
    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
    animate={{
      background: [
        "linear-gradient(to right, #3b82f6, #8b5cf6)",
        "linear-gradient(to left, #3b82f6, #8b5cf6)",
      ],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl p-6">
    <h3 className="text-2xl font-bold text-blue-400 mb-4">Experience</h3>
    <div className="space-y-8">
      
      {/* Internship at 5th Dimension Technology */}
      <div className="relative pl-6 border-l-2 border-blue-400">
        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
        <h4 className="text-lg font-semibold text-blue-300">
          MERN Full Stack Developer Intern
        </h4>
        <p className="text-gray-400">5th Dimension Technology, Hyderabad (January 2025 – June 2025)</p>
        <p className="text-gray-300 mt-2">
          Successfully completed a 6-month internship focusing on full stack development using MERN stack. 
          Contributed to building scalable web applications, optimizing backend APIs, and improving UI/UX with modern tools and practices.
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1HV5TUqyBWYPSE-hsWZSMx4XY9El9cCxJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <span>View Certificate</span>
          <FiExternalLink className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Previous Internship */}
      <div className="relative pl-6 border-l-2 border-blue-400">
        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full" />
        <h4 className="text-lg font-semibold text-blue-300">
          Website Design & Development Intern
        </h4>
        <p className="text-gray-400">Internship Studio (August 2024 – September 2024)</p>
        <p className="text-gray-300 mt-2">
          Worked on responsive web pages, UI/UX improvements, and web optimization.
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1I-eSo0dRgyC1nmnmfobpilXX6UPIvMys/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <span>View Certificate</span>
          <FiExternalLink className="w-4 h-4" />
        </motion.a>
      </div>

    </div>
  </div>
</div>

          {/* Achievements Section */}
          <div className="group relative">
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
              animate={{
                background: [
                  "linear-gradient(to right, #8b5cf6, #ec4899)",
                  "linear-gradient(to left, #8b5cf6, #ec4899)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Achievements</h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: "🏆",
                    text: "Taluka-Level Scholarship for Academic Excellence",
                  },
                  {
                    icon: "🏏",
                    text: "State-Level Cricket Player (2018)",
                  },
                  {
                    icon: "📜",
                    text: "Full Stack Web Development Course (LinkedIn Certified)",
                  },
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl transform transition-transform group-hover:scale-125">
                      {achievement.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Button with Animated Background */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="/contact"
            className="relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-bold text-lg shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Get In Touch</span>
            <FiArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}
