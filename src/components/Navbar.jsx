import { useEffect, useState } from "react";
import sign from "../assets/sign.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center shadow-sm transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <img
        className="h-12 md:h-18 object-contain filter invert brightness-0"
        src={sign}
        alt="signature"
      />
      <ul className="flex space-x-6 text-white font-medium">
        <li>
          <a href="#home" className="hover:text-teal-400">
            Home
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
