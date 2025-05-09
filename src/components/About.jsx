import React from "react";
import aboutImg from "../assets/aboutIMG1.png";
import profile from "../assets/profile.jpg"
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-gradient-to-b from-[#071a1b] to-[#0e282a] px-6 md:px-20 py-12 flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* Title on Top */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-green-400 text-center">
        About Me
      </h2>

      {/* Layout changes based on screen size */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative mb-8 lg:mb-0 lg:mr-8">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            <img
              src={profile}
              alt="About me sketch"
              className="h-full w-full object-cover object-[50%_50%] rounded-full border-4 border-green-400 shadow-lg"
              // style={{
              //   filter: "brightness(0.9) contrast(1.1) drop-shadow(0 0 3px rgba(0,200,100,0.3))",
              //   mixBlendMode: "screen",
              // }}
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#071a1b] opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,200,100,0.03)] via-transparent to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-left text-gray-100">
          <p className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
            I’m a full-stack developer who values clarity, collaboration, and thoughtful execution. I enjoy building real-world solutions with clean, scalable code and have a strong grasp of React, Node.js, and Tailwind CSS. Lately, I’ve been exploring machine learning and diving into the world of deep learning and generative AI — learning steadily, one model at a time.
          </p>

          <p className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
            Hackathons have taught me how to think fast, adapt quickly, and build under pressure — lessons I carry into every team project. I'm also part of <span className="text-green-300 font-semibold">Canopux</span>, our little tech group, where I’ve grown through collaboration and problem-solving.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            Off the keyboard, I enjoy reading, brainstorming new ideas, and drawing inspiration from chess — always thinking a few steps ahead.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
