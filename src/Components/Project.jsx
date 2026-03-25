import React from "react";
import { Link, NavLink } from "react-router-dom";

function Project() {
  const [activeState, setActiveState] = React.useState("Video");

  return (
    <div id="project" className="px-4 sm:px-8 md:px-16">
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="title relative border-2 hover:text-white mt-18 px-5 py-3  font-bold inline text-2xl sm:text-3xl uppercase font-[montserrat] tracking-widest">
          Projects
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center py-5 bg-black mt-6">
        <ul className="flex flex-wrap justify-center px-5 py-3 text-white items-center gap-5 sm:gap-10 text-lg sm:text-xl uppercase font-[montserrat]">
          

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

      


      {/* VIDEO */}
      {activeState === "Video" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-5">
          <video src="/videoediting.mp4" controls ></video>
          <video src="/uiux.mp4" controls ></video>
          <video src="/devops.mp4" controls ></video>
          <video src="/assignment.mp4" controls ></video>
          <video src="/macbook.mp4" controls ></video>

        </div>
      )}
    </div>
  );
}

export default Project;
