import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import jsBg from "../assets/js-bg.webp";
import frameworkBg from "../assets/framework-bg.webp";
import dbBg from "../assets/db-bg.png";
import conceptsBg from "../assets/concepts-bg.png";
import jsIcon from "../assets/icons/js.png";
import tsIcon from "../assets/icons/ts.png";
import javaIcon from "../assets/icons/java.svg";
import pythonIcon from "../assets/icons/python.webp";
import cppIcon from "../assets/icons/cpp.png";
import react from "../assets/icons/react.webp";
import oop from "../assets/icons/oop.png";
import next from "../assets/icons/next.png";
import nest from "../assets/icons/nest.png";
import node from "../assets/icons/node.png";
import sklearn from "../assets/icons/sklearn.png";
import mongodb from "../assets/icons/mongodb.png";
import postgre from "../assets/icons/postgre.png";
import git from "../assets/icons/git.png";
import postman from "../assets/icons/postman.png";
import jupyter from "../assets/icons/jupyter.png";
import restAPI from "../assets/icons/restAPI.png";
import auth from "../assets/icons/auth.png";
import problem from "../assets/icons/problemsolving.png";

const skillsData = [
  {
    title: "Languages",
    image: jsBg,
    gradient: "from-green-300 to-lime-300",
    icons: [jsIcon, tsIcon, javaIcon, pythonIcon, cppIcon],
  },
  {
    title: "Frameworks & Libraries",
    image: frameworkBg,
    gradient: "from-pink-500 to-purple-500",
    icons: [react, nest, next, node, sklearn],
  },
  {
    title: "Databases & Tools",
    image: dbBg,
    gradient: "from-green-500 to-emerald-400",
    icons: [mongodb, postgre, git, postman, jupyter],
  },
  {
    title: "Developer Mindset",
    image: conceptsBg,
    gradient: "from-slate-300 to-gray-400",
    icons: [oop, restAPI, auth, problem],
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="bg-green-100 py-20 px-6 md:px-20 text-black overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-green-800 text-center">Skills</h2>

      <div className="flex gap-4 justify-center items-stretch w-full">
        {skillsData.map((skill, idx) => (
          <HoverCard
            key={idx}
            index={idx}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            skill={skill}

          />
        ))}
      </div>
    </section>
  );
}

function HoverCard({ skill, index, hoveredIndex, setHoveredIndex }) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && !isHovered;

  let width = "300px";
  if (isHovered) width = "50vw";
  else if (isOtherHovered) width = "12vw";

  const iconSize = skill.title === "Developer Mindset" || skill.title === "Databases & Tools" ? "w-24 h-24" : "w-20 h-20";

  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="relative h-[300px] rounded-xl shadow-md border border-gray-300 bg-white overflow-hidden cursor-pointer flex-shrink-0"
      animate={{ width }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      style={{ backgroundImage: isHovered ? `none` : `url(${skill.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {isHovered && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-90`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Title */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <h3 className="text-2xl font-semibold text-green-900 bg-white px-4 py-1 rounded shadow">{skill.title}</h3>
      </div>

      {/* Icons */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center gap-10 flex-wrap p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2, delay: 0 } }}  
          >
            {skill.icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="tech icon"
                className={`${iconSize} object-contain hover:scale-110 transition-transform duration-300`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>



    </motion.div>
  );
}
