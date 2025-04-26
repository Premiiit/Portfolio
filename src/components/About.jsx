import React from "react";
import aboutImg from "../assets/aboutIMG1.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-[80vh] w-full bg-gradient-to-b from-[#071a1b] to-[#0e282a] px-6 md:px-20 py-12 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:w-1/2 w-full flex justify-center items-center relative mb-10 md:mb-0 h-[80vh]">
        <div className="relative h-full w-full max-w-sm md:max-w-md flex items-center justify-center">
          {/* Image with transparent background */}
          <div className="relative w-full h-full">
            <img
              src={aboutImg}
              alt="About me sketch"
              className="h-full w-full object-contain"
              style={{
                filter: "brightness(0.9) contrast(1.1) drop-shadow(0 0 3px rgba(0,200,100,0.3))",
                mixBlendMode: "screen"
              }}
            />

            {/* Subtle edge fade for seamless integration */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#071a1b] opacity-70 pointer-events-none" />

            {/* Very subtle edge highlights to make the sketch "pop" */}
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,200,100,0.03)] via-transparent to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full text-left text-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-green-400">About Me</h2>

        <p className="mb-4 text-xl leading-relaxed text-gray-200">
          I’m a full-stack developer who values clarity, collaboration, and thoughtful execution. I enjoy building real-world solutions with clean, scalable code and have a strong grasp of React, Node.js, and Tailwind CSS. Lately, I’ve been exploring machine learning and diving into the world of deep learning and generative AI — learning steadily, one model at a time.
        </p>

        <p className="mb-4 text-xl leading-relaxed text-gray-200">
          Hackathons have taught me how to think fast, adapt quickly, and build under pressure — lessons I carry into every team project. I'm also part of <span className="text-green-300 font-semibold">Canopux</span>, our little tech group, where I’ve grown through collaboration and problem-solving.
        </p>

        <p className="text-xl leading-relaxed text-gray-300">
          Off the keyboard, I’m a chess enthusiast and an admirer of minimalist design. Chess influences how I think: a balance of vision, patience, and precision. It inspires me to build not just for now, but for the next ten moves ahead.
        </p>

      </div>
    </motion.section>
  );
};

export default About;