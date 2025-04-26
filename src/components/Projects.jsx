import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ats from "../assets/Homepage-illustration.svg";
import messege from "../assets/AnonymmousMessenger.png";
import creator from "../assets/CreatersConnect.jpg";

// Projects data
const projects = [
  {
    title: "Applicant Tracking System",
    description:
      "Built a scalable ATS backend with NestJS and PostgreSQL, automating resume parsing and candidate scoring to streamline recruitment. The system ranks candidates, cuts screening time, and improves hiring precision.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    link: "https://github.com/Premiiit/ats-engine",
    image: ats,
  },
  {
    title: "Anonymous Messenger",
    description:
      "Developed an anonymous email app with Next.js, Resend API, and Gemini AI, enabling secure, untraceable communication with smart reply suggestions. This empowers whistleblowers, journalists, and privacy-conscious users to communicate safely while maintaining anonymity.",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    link: "https://github.com/Premiiit/Anynomous-messenger",
    image: messege,
  },
  {
    title: "CreatorConnect",
    description:
      "Built a fan-to-creator support platform with Razorpay integration for seamless payments and post engagement tracking to help creators monetize their content. The platform empowers creators with direct fan funding while providing supporters exclusive perks and interactions.",
    tech: ["Next.js", "Razorpay", "TailwindCSS"],
    link: "https://github.com/Premiiit/CreatorConnect",
    image: creator,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Main Component
export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-black py-20 px-6 md:px-20 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-teal-400 text-center"
        variants={cardVariants}
      >
        Projects
      </motion.h2>

      {/* Grid of project cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
