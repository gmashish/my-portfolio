import React, { useState,  useEffect }  from "react";
import { FaEllipsisV, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  const navItems = [
    { title: "Home", label: "home" },
    { title: "About", label: "about" },
    { title: "Skills", label: "skill" },
    { title: "Project", label: "project" },
    { title: "Contact", label: "contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active section detection
      navItems.forEach((item) => {
        const section = document.getElementById(item.label);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(item.label);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu with ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
        className="fixed top-0 left-0 h-1 bg-red-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-40 w-full">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`
            flex items-center justify-between
            h-16 px-6 md:px-10
            mx-4 md:mx-10 my-4
            rounded-2xl
            backdrop-blur-xl
            border
            transition-all duration-300

            ${
              scrolled
                ? "bg-black/30 border-white/30 shadow-lg shadow-black/30"
                : "bg-white/5 border-white/20"
            }
          `}
        >
          {/* Logo */}
          <img src="/mylogo.png" alt="logo" className="h-10" />

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item, i) => (
                <li key={i} className="relative">
                  <button
                    onClick={() => scrollToSection(item.label)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                      ${
                        active === item.label
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                  >
                    {item.title}
                  </button>

                  {/* Active underline */}
                  {active === item.label && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-red-500 rounded"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile 3-dot Menu */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMobileOpen(true)}
          >
            <FaEllipsisV size={20} />
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-0 z-40
            bg-black/70 backdrop-blur-xl
            transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/10">
            <img src="/mylogo.png" alt="logo" className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition"
            >
              <FaTimes size={22} className="text-white" />
            </button>
          </div>

          <ul className="p-6 flex flex-col gap-5 text-lg">
            {navItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(item.label)}
                  className={`w-full text-left px-4 py-3 rounded-lg border transition
                    ${
                      active === item.label
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
      </header>
    </>
  );
}

export default Header;
