import { motion, useAnimation, useMotionValue } from "framer-motion";
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
import reactIcon from "../assets/icons/react.webp";
import nextIcon from "../assets/icons/next.png";
import nestIcon from "../assets/icons/nest.png";
import nodeIcon from "../assets/icons/node.png";
import sklearnIcon from "../assets/icons/sklearn.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import postgreIcon from "../assets/icons/postgre.png";
import gitIcon from "../assets/icons/git.png";
import postmanIcon from "../assets/icons/postman.png";
import jupyterIcon from "../assets/icons/jupyter.png";
import oopIcon from "../assets/icons/oop.png";
import restAPIIcon from "../assets/icons/restAPI.png";
import authIcon from "../assets/icons/auth.png";
import problemIcon from "../assets/icons/problemsolving.png";

const icons = [
  jsIcon, tsIcon, javaIcon, pythonIcon, cppIcon,
  reactIcon, nextIcon, nestIcon, nodeIcon, sklearnIcon,
  mongodbIcon, postgreIcon, gitIcon, postmanIcon, jupyterIcon,
  oopIcon, restAPIIcon, authIcon, problemIcon,
];

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 1450;

  return (
    <section
      id="skills"
      className={`bg-green-100 ${isDesktop ? "py-20" : "py-10"} px-6 md:px-20 text-black overflow-hidden`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-green-800 text-center">Skills</h2>

      {isDesktop ? <DesktopSkills /> : <MobileSkills />}
    </section>
  );
}

function DesktopSkills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsData = [
    {
      title: "Languages",
      icons: [jsIcon, tsIcon, javaIcon, pythonIcon, cppIcon],
      bgImage: jsBg,
      gradient: "from-green-300 to-lime-300",
    },
    {
      title: "Frameworks & Libraries",
      icons: [reactIcon, nextIcon, nestIcon, nodeIcon, sklearnIcon],
      bgImage: frameworkBg,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Databases & Tools",
      icons: [mongodbIcon, postgreIcon, gitIcon, postmanIcon, jupyterIcon],
      bgImage: dbBg,
      gradient: "from-green-500 to-emerald-400",
    },
    {
      title: "Developer Mindset",
      icons: [oopIcon, restAPIIcon, authIcon, problemIcon],
      bgImage: conceptsBg,
      gradient: "from-slate-300 to-gray-400",
    },
  ];

  return (
    <div className="flex gap-6 justify-center items-start w-full">
      {skillsData.map((skill, idx) => (
        <motion.div
          key={idx}
          onHoverStart={() => setHoveredIndex(idx)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="relative h-[300px] rounded-xl shadow-md border border-gray-300 bg-white overflow-hidden cursor-pointer flex-shrink-0"
          animate={{
            width: hoveredIndex === idx ? "50vw" : hoveredIndex === null ? "20vw" : "12vw",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{
            backgroundImage: hoveredIndex === idx ? "none" : `url(${skill.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay only when hovered */}
          {hoveredIndex === idx && (
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-90`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}

          {/* Card Title */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <h3 className="text-2xl font-semibold text-green-900 bg-white px-4 py-1 rounded shadow">
              {skill.title}
            </h3>
          </div>

          {/* Icons inside */}
          {hoveredIndex === idx && (
            <motion.div
              className="absolute inset-0 z-30 flex items-center justify-center gap-8 flex-wrap p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icons.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon}
                  alt="tech icon"
                  className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MobileSkills() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duration = windowWidth < 640 ? 8 : windowWidth < 1024 ? 12 : 14;

  // Function to start auto-scrolling from current position
  const startAutoScroll = () => {
    const currentX = x.get();
    controls.start({
      x: [currentX, currentX - 500],
      transition: {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  useEffect(() => {
    startAutoScroll();
  }, [duration]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-8 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -1000, right: 1000 }}
        dragElastic={0.2}
        onDragStart={() => {
          controls.stop(); // stop while dragging
        }}
        onDragEnd={() => {
          startAutoScroll(); // resume smoothly from current
        }}
        animate={controls}
      >
        {[...icons, ...icons].map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt="skill icon"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}