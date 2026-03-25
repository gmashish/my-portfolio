import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
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
              ? "bg-white/10 border-white shadow-lg shadow-black/30"
              : "bg-white/5 border-white/20"
          }
        `}
      >
        {/* Logo */}
        <img src="/mylogo.png" alt="logo" className="h-10 drop-shadow-md" />

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.label}`}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-red-500 hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMobileOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40
          bg-black/50 backdrop-blur-xl
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

        <ul className="p-6 flex flex-col gap-6 text-xl">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.label}`}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;