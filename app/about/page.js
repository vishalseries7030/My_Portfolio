"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; // Ensure Navbar is correctly imported

export default function About() {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 md:px-20">
      <Navbar /> {/* Navbar is now available on all pages */}

      {/* Parallax Background Effect */}
      <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/background.jpg')" }}></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Profile Image Section */}
        <motion.div
          className="relative w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-64 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-500 transform transition duration-500 hover:scale-110">
            <Image
              src="/image/profile.jpg"
              width={300}
              height={300}
              alt="Vishal Payyawar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Content Section */}
        <motion.div
          className="w-full md:w-2/3 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* About Me Section */}
          <h1 className="text-4xl font-extrabold text-blue-400 mb-6">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with expertise in building scalable and interactive web applications. I have hands-on experience in{" "}
            <span className="text-purple-400 font-semibold">React.js, Next.js, MongoDB, Node.js, and AI Integration</span>.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold mt-8 text-blue-300">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 mt-3">
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
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Achievements Section */}
          <h2 className="text-2xl font-bold mt-8 text-blue-300">Achievements</h2>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>🏆 Taluka-Level Scholarship for Academic Excellence</li>
            <li>🏏 State-Level Cricket Player (2018)</li>
            <li>📜 Full Stack Web Development Course (LinkedIn Certified)</li>
          </ul>

          {/* Experience Section */}
          <h2 className="text-2xl font-bold mt-8 text-blue-300">Experience</h2>
          <div className="border-l-4 border-blue-400 pl-4 mt-3 space-y-6">
            <motion.div
              className="relative pl-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -left-3 top-2 w-6 h-6 bg-blue-500 rounded-full"></div>
              <p className="text-lg text-blue-400 font-semibold">Website Design & Development Intern</p>
              <p className="text-gray-300">Internship Studio (August 2024 - September 2024)</p>
              <p className="text-gray-400 text-sm">Worked on responsive web pages, UI/UX improvements, and web optimization.</p>
              {/* Experience Certificate Link */}
              <motion.a
                href="https://drive.google.com/file/d/1I-eSo0dRgyC1nmnmfobpilXX6UPIvMys/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                📄 View Experience Certificate
              </motion.a>
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.a
            href="/contact"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.9 }}
          >
            📩 Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}