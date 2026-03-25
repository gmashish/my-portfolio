import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activePath, setActivePath] = useState("home");

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

      // Detect active section on scroll
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
  }, []);

  return (
    <header
      className={`fixed w-full py-2 max-w-7xl pl-6 pr-2 left-1/2 -translate-x-1/2 z-50 transition-all rounded-full duration-500 ${
        scrolled
          ? "bg-gray-900/60 backdrop-blur-md top-5 border border-white/20 shadow-2xl"
          : "bg-transparent top-0 border-none"
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="/" className="shrink-0">
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

            const isPillUnderMe =
              isHovered || (!hoveredPath && isActive);

            return (
              <a
                key={item.label}
                href={`#${item.label}`}
                onMouseEnter={() => setHoveredPath(item.label)}
                onClick={() => setActivePath(item.label)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 rounded-full 
                ${
                  isHovered || isActive
                    ? "text-white"
                    : scrolled
                      ? "text-white/80"
                      : "text-black/60"
                }`}
              >
                {/* Animated Pill */}
                {isPillUnderMe && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      duration: 0.5,
                    }}
                  />
                )}

                {item.title}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;