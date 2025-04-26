import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
import sign from "../assets/sign.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-sm transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <img
        className="h-10 md:h-14 object-contain filter invert brightness-0"
        src={sign}
        alt="signature"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-white font-medium">
        <li><a href="#home" className="hover:text-teal-400">Home</a></li>
        <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <motion.div
        className="md:hidden text-white text-3xl cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        initial={false}
        animate={{
          scale: menuOpen ? 1.1 : 1,
          rotate: menuOpen ? 90 : 0,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full right-6 bg-black/80 backdrop-blur-lg py-4 px-6 rounded-xl flex flex-col space-y-4 text-white font-medium"
          >
            <li><a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-teal-400">Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>

    </nav>
  );
}
