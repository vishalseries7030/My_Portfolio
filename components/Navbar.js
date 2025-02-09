"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed select-none w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
          Vishal Payyawar
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl hover:text-blue-400 transition duration-300"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 text-white py-4 space-y-4">
          <NavItem href="/" text="Home" mobile onClick={() => setMenuOpen(false)} />
          <NavItem href="/about" text="About" mobile onClick={() => setMenuOpen(false)} />
          <NavItem href="/projects" text="Projects" mobile onClick={() => setMenuOpen(false)} />
          <NavItem href="/contact" text="Contact" mobile onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ href, text, mobile, onClick }) => (
  <Link href={href}>
    <span
      onClick={onClick}
      className={`cursor-pointer relative text-lg ${
        mobile ? "text-white" : "text-gray-300"
      } hover:text-blue-400 transition duration-300 group`}
    >
      {text}
      {/* Underline Animation */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

export default Navbar;