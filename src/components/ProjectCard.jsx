import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

const descVariants = {
  rest: { x: "-100%", opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const techVariants = {
  rest: { x: "100%", opacity: 0 },
  hover: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.1 } },
};

export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative rounded-xl overflow-hidden border border-gray-700 shadow-md bg-gray-900 h-[420px] flex flex-col"
    >
      {/* Title (outside image area) */}
      <div className="p-4 border-b border-gray-800 bg-gray-900 z-30">
        <h3 className="text-2xl font-bold text-teal-400 text-center">{title}</h3>
      </div>

      {/* Image section */}
      <div className="relative flex-1">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 z-0"
        />

        {/* Description slide-in from left */}
        <motion.div
          variants={descVariants}
          className="absolute top-12 left-4 right-4 z-20"
        >
          <p className="text-base md:text-lg text-gray-200 bg-black/80 p-4 rounded-md">
            {description}
          </p>
        </motion.div>

        {/* Tech stack slide-in from right */}
        <motion.div
          variants={techVariants}
          className="absolute bottom-12 left-4 right-4 z-20"
        >
          <div className="flex flex-wrap gap-3 justify-end bg-black/80 p-3 rounded-md">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-sm md:text-base bg-gray-700 px-3 py-1 rounded-full text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* GitHub Link */}
      {link && (
        <div className="absolute bottom-4 left-4 z-30">
          <a
            href={link}
            target="_blank"
            className="text-sm text-teal-400 hover:underline flex items-center"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        </div>
      )}
    </motion.div>
  );
}
