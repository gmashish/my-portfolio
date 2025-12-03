import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Herosection() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-10 md:py-0 w-full min-h-screen overflow-hidden"
    >
      {/* LEFT SECTION */}
      <div className="mt-10 md:mt-0 text-center md:text-left">
        <p className="font-serif font-bold text-2xl sm:text-3xl">
          Hi, I am
        </p>

        <p className="font-[montserrat] font-bold mt-5 text-3xl sm:text-4xl lg:text-5xl">
          Ashish G.M
        </p>

        <h1 className="text-gray-500 uppercase font-extrabold font-[montserrat] mt-3 text-sm sm:text-base lg:text-lg">
          I'm a developer / Video editor
        </h1>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-5 mt-4 py-4">
          <Link
            to="https://www.facebook.com/ashish.gm.376"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-2 rounded hover:bg-red-500 hover:text-white transition-all"
          >
            <FaFacebook />
          </Link>

          <Link
            to="https://github.com/gmashish"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-2 rounded hover:bg-red-500 hover:text-white transition-all"
          >
            <FaGithub />
          </Link>

          <Link
            to="https://www.linkedin.com/in/ashish-gm-1a170a29a/"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-2 rounded hover:bg-red-500 hover:text-white transition-all"
          >
            <AiFillLinkedin />
          </Link>
        </div>

        {/* CALL BUTTON */}
        <a
          href="tel:+9779748813503"
          className="inline-flex items-center gap-2 px-4 py-2 mt-3 font-[montserrat] bg-black text-white rounded hover:bg-red-500 transition-all"
        >
          📞 Call me
        </a>
      </div>

      {/* RIGHT SECTION  (IMAGE + BACKGROUND SHAPE) */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 mb-6 md:mb-0">
        {/* Skewed background shape */}
        <div className="absolute bg-black h-[70%] md:h-[90%] w-[80%] md:w-[90%] -skew-x-12 rounded-lg"></div>

        {/* Profile Image */}
        <img
          className="relative z-10 w-52 sm:w-72 md:w-96 lg:w-[450px] object-contain"
          src="/profile.png"
          alt="ashish"
        />
      </div>
    </div>
  );
}

export default Herosection;
