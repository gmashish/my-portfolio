import React from "react";

function Skill() {
  return (
    <div
      id="skill"
      className="mt-16 px-6 sm:px-10 md:px-20 lg:px-36 w-full"
    >
      {/* Title */}
      <div className="flex justify-center">
        <h1 className="title relative text-2xl sm:text-3xl lg:text-4xl font-[montserrat] tracking-widest font-bold border-2 border-black px-6 py-3 inline uppercase hover:text-white">
          Skills
        </h1>
      </div>

      {/* USING NOW */}
      <div className="mt-10">
        <h1 className="text-xl sm:text-2xl font-[montserrat]">Using now:</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10 place-items-center">
          <img className="h-16 sm:h-20 md:h-24" src="/ae.png" alt="After Effects logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/davinci12.png" alt="Davinci Resolve logo" />
        </div>
      </div>

      {/* LEARNING */}
      <div className="mt-16">
        <h1 className="text-xl sm:text-2xl font-[montserrat]">Learning:</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10 place-items-center">
          <img className="h-16 sm:h-20 md:h-24" src="/blender.png" alt="Blender logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/ai.png" alt="Ai logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/ps.png" alt="Photoshop logo" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
