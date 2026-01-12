import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const navItems = [
    { title: "Home", label: "home" },
    { title: "About", label: "about" },
    { title: "Skills", label: "skill" },
    { title: "Project", label: "project" },
    { title: "Contact", label: "contact" }
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Header Bar */}
      <div className="bg-black text-white flex justify-between items-center h-16 px-6 md:px-14">
        <img src="/logos.svg" alt="logo" className="h-10 md:h-16 mt-2 md:mt-6" />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 md:space-x-10">
            {navItems.map((val, i) => (
              <li
                key={i}
                className="relative cursor-pointer px-3 py-2 before:absolute before:inset-0 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
              >
                <a href={`#${val.label}`} className="relative z-10 text-white">
                  {val.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Open navigation"
          className="md:hidden text-white z-30"
          onClick={() => setMobileOpen(true)}
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <img src="/logos.svg" alt="logo" className="h-10" />
          <button aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>

        <div className="p-6">
          <ul className="flex flex-col gap-4 text-xl">
            {navItems.map((val, i) => (
              <li
                key={i}
                className="relative cursor-pointer px-3 py-3 before:absolute before:inset-0 before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 rounded-lg overflow-hidden"
              >
                <a
                  href={`#${val.label}`}
                  onClick={() => setMobileOpen(false)}
                  className="relative z-10 block w-full text-white"
                >
                  {val.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
