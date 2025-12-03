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
          <img className="h-16 sm:h-20 md:h-24" src="/html.png" alt="HTML Logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/CSS.png" alt="css logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/js.png" alt="js logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/react.png" alt="React logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/GIT.png" alt="Git logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/davinci.png" alt="Davinci logo" />
        </div>
      </div>

      {/* LEARNING */}
      <div className="mt-16">
        <h1 className="text-xl sm:text-2xl font-[montserrat]">Learning:</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10 place-items-center">
          <img className="h-16 sm:h-20 md:h-24" src="/mongodb.png" alt="MongoDB Logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/nodejs.png" alt="Node.js logo" />
          <img className="h-16 sm:h-20 md:h-24" src="/sql.png" alt="SQL logo" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
