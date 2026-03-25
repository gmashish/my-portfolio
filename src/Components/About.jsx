import React from "react";

function About() {
  return (
    <div id="about" className="mt-16 px-6 sm:px-10 md:px-20 lg:px-36 w-full">
      <div className="flex flex-col items-center text-justify">
        <h1 className="title relative text-2xl sm:text-3xl lg:text-4xl font-[montserrat] tracking-widest font-bold border-2 border-black px-5 py-3 inline uppercase hover:text-white">
          About Me
        </h1>

        <p className="font-[montserrat] mt-8 sm:mt-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
          My name is Ashish G.m. a video editor and motion graphics artist
          currently using adobe premiere pro  , after effects and DaVinci
          Resolve. I build responsive, performant web applications while
          simultaneously producing professional video content and motion
          graphics that elevate brands and engage audiences. My unique  
          combination of skills means I can take projects from scratch and
          delivering seamless multimedia experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
