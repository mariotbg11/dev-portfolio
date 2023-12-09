import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Mario Christofell
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Junior Frontend Web Developer
      </p>
      <p className="text-sm max-w-xl font-semibold mb-6">
        I'm a self-taught Junior Frontend Developer who like to create visually
        appealing and user-friendly interfaces. I'm currently focus on learning
        Javascript and other frontend tech, all coding projects are built from
        scratch, such as starting from slicing figma designs, online course
        final projects, coding challenges and others.
      </p>
    </div>
  );
}

export default Intro;
