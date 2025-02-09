"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center select-none text-center py-20 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Floating Abstract Elements */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url('/hero-bg.svg')" }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Animated Intro Text */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Vishal 👋
      </motion.h2>

      {/* Typing Effect for Roles */}
      <motion.p
        className="text-xl md:text-2xl mt-4 font-medium text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <span className="text-blue-400">MERN Stack Developer</span> |{" "}
        <span className="text-purple-400">Web Enthusiast</span> |{" "}
        <span className="text-pink-400">AI Innovator</span>
      </motion.p>

      {/* Buttons for Resume & Contact */}
      <div className="mt-6 flex space-x-4">
        {/* View Resume Button (Google Drive Link) */}
        <motion.button
          onClick={() => window.open("https://drive.google.com/file/d/17_TQud7cyg_I7KES8IscVH8a5B_XXRd1/view?usp=drive_link", "_blank")}
          role="button"
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          📄 View Resume
        </motion.button>

        {/* Contact Me Button */}
        <Link href="/contact" passHref>
          <motion.button
            className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg backdrop-blur-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✉️ Contact Me
          </motion.button>
        </Link>
      </div>

      {/* Floating Background Circles */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-2xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl"
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;









// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center select-none text-center py-20 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
//       {/* Floating Abstract Elements */}
//       <motion.div
//         className="absolute inset-0 w-full h-full bg-no-repeat bg-cover opacity-10"
//         style={{ backgroundImage: "url('/hero-bg.svg')" }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       />

//       {/* Profile Image with Animation */}
//       <motion.div
//         className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl mb-8"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <Image
//           src="/image/profile.jpg" // Path to your profile image
//           alt="Vishal Payyawar"
//           width={256}
//           height={256}
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Animated Intro Text */}
//       <motion.h2
//         className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hey, I'm Vishal 👋
//       </motion.h2>

//       {/* Typing Effect for Roles */}
//       <motion.p
//         className="text-xl md:text-2xl mt-4 font-medium text-gray-300"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//       >
//         <span className="text-blue-400">MERN Stack Developer</span> |{" "}
//         <span className="text-purple-400">Web Enthusiast</span> |{" "}
//         <span className="text-pink-400">AI Innovator</span>
//       </motion.p>

//       {/* Buttons for Resume & Contact */}
//       <div className="mt-6 flex space-x-4">
//         {/* View Resume Button (Google Drive Link) */}
//         <motion.button
//           onClick={() => window.open("https://drive.google.com/file/d/17_TQud7cyg_I7KES8IscVH8a5B_XXRd1/view?usp=drive_link", "_blank")}
//           role="button"
//           className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg backdrop-blur-md"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           📄 View Resume
//         </motion.button>

//         {/* Contact Me Button */}
//         <Link href="/contact" passHref>
//           <motion.button
//             className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg backdrop-blur-md"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             ✉️ Contact Me
//           </motion.button>
//         </Link>
//       </div>

//       {/* Floating Background Circles */}
//       <motion.div
//         className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-2xl"
//         animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 4, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl"
//         animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.6, 0.4] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />
//     </section>
//   );
// };

// export default Hero;