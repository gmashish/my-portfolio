import React from "react";

function About() {
  return (
    <div id="about" className="mt-16 px-6 sm:px-10 md:px-20 lg:px-36 w-full">
      <div className="flex flex-col items-center text-center">
        <h1 className="title relative text-2xl sm:text-3xl lg:text-4xl font-[montserrat] tracking-widest font-bold border-2 border-black px-5 py-3 inline uppercase hover:text-white">
          About Me
        </h1>

        <p className="font-[montserrat] mt-8 sm:mt-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
          My name is Ashish G.m. Frontend developer and motion graphics artist
          who turns complex ideas into polished digital realities using React,
          Next.js, and DaVinci Resolve. I build responsive, performant web
          applications while simultaneously producing professional video content
          and motion graphics that elevate brands and engage audiences. My
          unique combination of development and post-production skills means I
          can take projects from code to camera, delivering seamless multimedia
          experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
