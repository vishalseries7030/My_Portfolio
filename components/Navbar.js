"use client";
import { useState, useEffect } from "react";
import { FiHome, FiUser, FiBriefcase, FiMail } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { href: "home", text: "Home", icon: FiHome },
    { href: "about", text: "About", icon: FiUser },
    { href: "skills", text: "Skills", icon: FiBriefcase },
    { href: "projects", text: "Projects", icon: FiBriefcase },
    { href: "contact", text: "Contact", icon: FiMail },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 select-none
        ${scrolled 
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with animated gradient */}
          <button onClick={() => scrollToSection("home")}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Portfolio
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                {...item}
                active={activeSection === item.href}
                onClick={() => scrollToSection(item.href)}
              />
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out
                  ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`}
              />
              <span
                className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out
                  ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.href}
                {...item}
                onClick={() => scrollToSection(item.href)}
                active={activeSection === item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, text, icon: Icon, active, onClick }) => (
  <button
    onClick={onClick}
    className="group relative flex items-center space-x-1 text-lg text-gray-300 hover:text-white cursor-pointer"
  >
    <Icon className="w-4 h-4" />
    <span>{text}</span>
    {/* Animated underline with gradient */}
    <span
      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left transition-all duration-300
        ${active ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
    />
  </button>
);

const MobileNavItem = ({ href, text, icon: Icon, onClick, active }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-2 cursor-pointer transition-all duration-300
      ${active 
        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white" 
        : "text-gray-300 hover:bg-gray-800/50"}`}
  >
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </button>
);

export default Navbar;