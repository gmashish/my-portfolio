import React from "react";
import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
import Herosection from "./Components/Herosection.jsx";
import About from "./Components/About.jsx";
import Skill from "./Components/Skill.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  return (
    <div>
      <div className="sticky top-5 z-50">
      <Navbar /></div>
      <main className="relative">
        <Herosection />
        <About />
        <Skill />
        <Project />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
