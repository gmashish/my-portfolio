import React from "react";
import { NavLink } from "react-router-dom";

function Project() {
  const [activeState, setActiveState] = React.useState("All");

  return (
    <div id="portfolio" className="px-4 sm:px-8 md:px-16">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="title relative border-2 hover:text-white mt-6 px-5 py-3 font-bold inline text-2xl sm:text-3xl uppercase font-[montserrat] tracking-widest">
          Projects
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center py-5 bg-black mt-6">
        <ul className="flex flex-wrap justify-center px-5 py-3 text-white items-center gap-5 sm:gap-10 text-lg sm:text-xl uppercase font-[montserrat]">
          <NavLink
            className={`cursor-pointer ${
              activeState === "All" ? "border-b-2 border-gray-400" : ""
            }`}
            onClick={() => setActiveState("All")}
          >
            All
          </NavLink>

          <NavLink
            className={`cursor-pointer ${
              activeState === "Codes" ? "border-b-2 border-gray-400" : ""
            }`}
            onClick={() => setActiveState("Codes")}
          >
            Codes
          </NavLink>

          <li
            className={`cursor-pointer ${
              activeState === "Video" ? "border-b-2 border-gray-400" : ""
            }`}
            onClick={() => setActiveState("Video")}
          >
            Video Edited
          </li>
        </ul>
      </div>

      {/* ALL PROJECTS */}
      {activeState === "All" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5">
          <img src="/project1.png" alt="project" />
          <img src="/project2.png" alt="project" />
          <img src="/project3.png" alt="project" />
          <img src="/project4.png" alt="project" />
          <img src="/project5.png" alt="project" />
          <img src="/project6.png" alt="project" />
        </div>
      )}

      {/* CODES */}
      {activeState === "Codes" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5">
          <img src="/project1.png" alt="project" />
          <img src="/project2.png" alt="project" />
          <img src="/project3.png" alt="project" />
        </div>
      )}

      {/* VIDEO */}
      {activeState === "Video" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5">
          <img src="/project1.png" alt="project" />
          <img src="/project2.png" alt="project" />
          <img src="/project3.png" alt="project" />
        </div>
      )}
    </div>
  );
}

export default Project;
