import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEllipsisV, FaTimes } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activePath, setActivePath] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { title: "Home", label: "home" },
    { title: "About", label: "about" },
    { title: "Skills", label: "skill" },
    { title: "Project", label: "project" },
    { title: "Contact", label: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Hide navbar on scroll down
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);

      // Active section detection
      navItems.forEach((item) => {
        const section = document.getElementById(item.label);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActivePath(item.label);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`w-full max-w-7xl pl-6 pr-2 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-full
        ${showNav ? "top-5" : ""}
        ${
          scrolled
            ? "bg-white/20 backdrop-blur-md border border-white/20 shadow-2xl py-2"
            : "bg-white/10 border-none py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="shrink-0">
            <img src="/mylogo.png" alt="Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="relative hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navItems.map((item) => {
              const isHovered = hoveredPath === item.label;
              const isActive = activePath === item.label;
              const isPillUnderMe = isHovered || (!hoveredPath && isActive);

              return (
                <button
                  key={item.label}
                  onMouseEnter={() => setHoveredPath(item.label)}
                  onClick={() => scrollToSection(item.label)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 rounded-full 
                  ${
                    isHovered || isActive
                      ? "text-red-600 scale-120 transition-all ease-in duration-300"
                      : scrolled
                      ? "text-red-400"
                      : "text-black/60"
                  }`}
                >
                  {/* Animated Pill */}
                  {isPillUnderMe && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}

                  {item.title}
                </button>
              );
            })}
          </nav>

          {/* Mobile 3-dot */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMobileOpen(true)}
          >
            <FaEllipsisV size={18} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xl z-50 transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <img src="/mylogo.png" alt="logo" className="h-10" />
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes size={22} className="text-white" />
          </button>
        </div>

        <ul className="p-6 flex flex-col gap-5 text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.label)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition
                ${
                  activePath === item.label
                    ? "bg-red-500 text-white"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;