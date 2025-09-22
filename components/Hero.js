"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014] text-white py-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#1e293b,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808,transparent_1px),linear-gradient(to_bottom,#080808,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-60 h-60 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-purple-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <div className="inline-block relative">
            <motion.span
              className="text-sm md:text-base bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-medium"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              Welcome to my portfolio
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-purple-500/0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Hey, I'm Vishal
            </span>
            <motion.span
              className="inline-block ml-2"
              animate={{
                rotate: [0, 20, 0],
                transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
              }}
            >
              👋
            </motion.span>
          </h1>
          
          <div className="relative">
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-blue-400">MERN Stack Developer</span>{" "}
              <span className="text-gray-500">|</span>{" "}
              <span className="text-purple-400">Web Enthusiast</span>{" "}
              <span className="text-gray-500">|</span>{" "}
              <span className="text-pink-400">AI Innovator</span>
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => window.open("https://drive.google.com/file/d/18FP_oShTuWnV4BsWz3gmiSmOOqFNU9KV/view?usp=sharing", "_blank")}
            className="relative group px-8 py-4 rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center text-lg font-semibold">
              <span className="mr-2">📄</span> Download CV
            </span>
          </motion.button>

          <Link href="/contact" passHref>
            <motion.button
              className="relative group px-8 py-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center text-lg font-semibold">
                <span className="mr-2">✉️</span> Contact Me
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://github.com/vishalseries7030", icon: <FaGithub />, color: "from-gray-400 to-gray-600" },
            { href: "https://www.linkedin.com/in/vishal-payyawar-46a211276/", icon: <FaLinkedin />, color: "from-blue-400 to-blue-600" },
            { href: "https://twitter.com/your-twitter-handle", icon: <FaTwitter />, color: "from-sky-400 to-sky-600" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-300" />
                <div className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </section>
  );
};

export default Hero;