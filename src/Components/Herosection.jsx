import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Herosection() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 py-10 w-full min-h-screen"
    >
      {/* LEFT SECTION */}
      <div className="mt-10 md:mt-0 text-center md:text-left flex-1">
        <p className="font-serif font-bold text-2xl sm:text-3xl">
          Hi, I am
        </p>

        <p className="font-[montserrat] font-bold mt-4 text-3xl sm:text-4xl lg:text-5xl">
          Ashish G.M
        </p>

        <h1 className="text-gray-500 uppercase font-extrabold font-[montserrat] mt-3 text-sm sm:text-base lg:text-lg">
          I'm a developer / Video editor
        </h1>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-5 mt-5 py-4">
          <a
            href="https://www.facebook.com/ashish.gm.376"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-3 rounded-full hover:bg-red-500 hover:text-white transition-all"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/gmashish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-3 rounded-full hover:bg-red-500 hover:text-white transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-gm-1a170a29a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl bg-[#D7D7D7] p-3 rounded-full hover:bg-red-500 hover:text-white transition-all"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* CALL BUTTON */}
        <a
          href="tel:+9779748813503"
          className="inline-flex items-center gap-2 px-5 py-3 mt-3 font-[montserrat] bg-black text-white rounded-md hover:bg-red-500 transition-all"
        >
          📞 Call me
        </a>
      </div>

      {/* RIGHT SECTION - IMAGE + BACKGROUND */}
      <div className="relative flex justify-center items-center w-full md:w-1/2 h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px]">
        {/* Background Shape */}
        <div className="absolute bg-black h-[65%] sm:h-[75%] md:h-[85%] w-[70%] sm:w-[75%] md:w-[85%] -skew-x-12 rounded-lg"></div>

        {/* Profile Image */}
        <img
          className="absolute drop-shadow-amber-200 drop-shadow-xl bottom-0 z-10 w-52 sm:w-72 md:w-80 lg:w-[430px] object-contain"
          src="/op.png"
          alt="ashish"
        />
      </div>
    </div>
  );
}
export default Herosection;

