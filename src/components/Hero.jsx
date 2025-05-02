// src/components/Hero.jsx
import { motion } from "framer-motion";
import heroBg from "../assets/herobg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 text-white bg-black bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay to darken the background slightly */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Main content */}
      <div className="relative z-10 text-center space-y-6">
        <motion.h2
          className="text-2xl md:text-4xl font-medium text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-teal-400 relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="group-hover:text-white transition duration-300">
            Prem Chandra Prasad
          </span>
          <span className="absolute inset-0 rounded blur-sm opacity-0 group-hover:opacity-5 bg-teal-400 transition duration-500" />
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-300 max-w-[38rem] mx-auto leading-relaxed relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="group-hover:text-white transition duration-300">
            Engineering is progress — built step by step, not just with code, but with care.
            I’m learning to navigate that space between creativity and execution, where even
            small ideas can grow into something meaningful.
          </span>
          <span className="absolute inset-0 rounded blur-sm opacity-0 group-hover:opacity-5 bg-teal-400 transition duration-500" />
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/Resume.pdf"
            target="_blank"
            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-xl text-white font-semibold transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
