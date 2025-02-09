"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative  from-gray-500  to-gray500   text-white py-10 mt-20 select-none">
      {/* Gradient Border */}
      {/* <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> */}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Footer Text */}
        <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0 hover:text-white transition duration-300 transform hover:scale-105">
          &copy; {new Date().getFullYear()} Vishal Payyawar. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/vishalseries7030"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition duration-300"
          >
            <div className="relative p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="text-gray-400 group-hover:text-white transition duration-300"
              />
              <span className="absolute left-1/2 bottom-12 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-payyawar-46a211276/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition duration-300"
          >
            <div className="relative p-3 rounded-lg bg-gray-700 hover:bg-blue-600 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-gray-400 group-hover:text-white transition duration-300"
              />
              <span className="absolute left-1/2 bottom-12 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
                LinkedIn
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transition duration-300"
          >
            <div className="relative p-3 rounded-lg bg-gray-700 hover:bg-blue-400 transition duration-300 transform hover:scale-110">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                className="text-gray-400 group-hover:text-white transition duration-300"
              />
              <span className="absolute left-1/2 bottom-12 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
                Twitter
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> */}
    </footer>
  );
};

export default Footer;