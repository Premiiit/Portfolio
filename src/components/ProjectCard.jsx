import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react"; // Import useState and useEffect

// Card scaling variant (remains simple)
const cardVariants = {
  rest: { scale: 1 },
  active: { scale: 1.02 }, // Changed 'hover' to 'active' for consistency
};

// Description slide-in variant
const descVariants = {
  rest: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  active: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Tech stack slide-in variant
const techVariants = {
  rest: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } },
  active: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.1 } },
};

export default function ProjectCard({ title, description, tech, link, image }) {
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation(); // Controls for the main card + children animations

  // Function to handle entering the active state (hover or click)
  const handleActivate = () => {
    controls.start("active");
  };

  // Function to handle leaving the active state (hover end or click again)
  // Only deactivate if not currently in the clicked state after a hover ends.
  const handleDeactivate = () => {
    if (!isClicked) {
      controls.start("rest");
    }
  };

  // Function to handle click
  const handleClick = () => {
    const newState = !isClicked;
    setIsClicked(newState);
    controls.start(newState ? "active" : "rest"); // Directly control state on click
  };

  // Ensure initial state is set
  useEffect(() => {
    controls.start("rest");
  }, [controls]);


  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg border border-gray-700 bg-gray-800 group cursor-pointer"
      variants={cardVariants} // Use variants for scaling
      initial="rest"
      animate={controls} // Control via useAnimation (handles click)
      onHoverStart={handleActivate} // Activate on hover start
      onHoverEnd={handleDeactivate} // Deactivate on hover end (if not clicked)
      onClick={handleClick} // Handle click state toggle
      layout
    >
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-center py-3 text-white bg-gray-900/80 z-20 relative"> {/* Ensure title is above potential image overlap */}
        {title}
      </h3>

      {/* Image Section */}
      <div className="relative aspect-video">
        {/* Image - Give it a base z-index */}
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="absolute inset-0 w-full h-full object-cover z-0" // Image is base layer
        />

        {/* Overlay Container - Appears on hover/click */}
        {/* Controls opacity based on parent's 'active' state via group */}
         <div className="absolute inset-0 z-10"> {/* Overlay container itself doesn't need complex variants */}

            {/* Description slide-in - Uses variants, inherits state from parent 'animate' prop */}
            <motion.div
              className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-r from-black/90 via-black/80 to-transparent flex items-center p-4 md:p-6 pointer-events-none" // Added pointer-events-none
              variants={descVariants}
              // No 'initial' or 'animate' here - inherits from parent 'animate={controls}'
            >
              <p className="text-gray-200 text-sm md:text-base">
                {description}
              </p>
            </motion.div>

            {/* Tech stack slide-in - Uses variants, inherits state from parent 'animate={controls}' */}
            <motion.div
              className="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-l from-black/90 via-black/80 to-transparent flex items-center justify-end p-4 md:p-6 pointer-events-none" // Added pointer-events-none
              variants={techVariants}
               // No 'initial' or 'animate' here - inherits from parent 'animate={controls}'
           >
              <div className="flex flex-wrap gap-2 justify-end">
                {tech.map((t, i) => (
                  <span key={i} className="bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
        </div>
      </div>

      {/* GitHub Link */}
      {link && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-teal-700 text-white font-medium py-2 px-4 transition-colors duration-300 w-full text-center z-20 relative" // Ensure link is clickable
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          // Prevent link click from triggering card's main onClick
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub /> GitHub
        </motion.a>
      )}
    </motion.div>
  );
}