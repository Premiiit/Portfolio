import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ats from "../assets/Homepage-illustration.svg";
import messege from "../assets/AnonymmousMessenger.png";
import creator from "../assets/CreatersConnect.jpg";

// --- projects array and variants remain the same ---
const projects = [
  {
    title: "Applicant Tracking System",
    description: "Built a scalable ATS backend with NestJS and PostgreSQL, automating resume parsing and candidate scoring to streamline recruitment. The system ranks candidates and improves hiring precision.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://github.com/Premiiit/ats-engine",
    image: ats,
  },
  {
    title: "Anonymous Messenger",
    description: "Developed an anonymous email app with Next.js, Resend API, and Gemini AI, enabling secure, untraceable communication with smart reply suggestions.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    link: "https://github.com/Premiiit/Anynomous-messenger",
    image: messege,
  },
  {
    title: "CreatorConnect",
    description: "Built a fan-to-creator support platform with Razorpay integration for seamless payments and post engagement tracking to help creators monetize their content.",
    tech: ["Next.js", "Razorpay", "TailwindCSS"],
    link: "https://github.com/Premiiit/CreatorConnect",
    image: creator,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
// --- end of unchanged part ---

export default function Projects() {
  // Removed titleControls and titleRef since we don't want title animation

  const containerControls = useAnimation(); // Controls for the card container
  const { ref: containerRef, inView: containerInView } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Start card animation when 10% of grid is visible
  });

  // Removed the title animation effect

  // Effect for Container/Card Animation (Staggered Fade In)
  useEffect(() => {
    if (containerInView) {
      console.log("Card container in view, starting card animation."); // Debug log
      containerControls.start("visible");
    } else {
      containerControls.start("hidden"); // Ensure it's hidden initially or if scrolled out before triggerOnce
    }
  }, [containerControls, containerInView]);

  return (
    <section id="projects" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      {/* Title Section - No Animation */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Projects
        </h2>
      </div>

      {/* Projects Grid - Animation Preserved */}
      <motion.div
        ref={containerRef} // Attach ref for container animation trigger
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12" // Adjusted md to 3 cols as requested
        variants={containerVariants}
        initial="hidden"
        animate={containerControls} // Control via useAnimation
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardItemVariants}> {/* Children inherit from parent animate */}
             <ProjectCard
                // Pass project props
                {...project} // Use spread syntax for brevity
             />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}