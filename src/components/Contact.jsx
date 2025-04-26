import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#071a1b] to-black text-green-100 py-16 px-6 md:px-20 border-t border-green-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left side: Text and Socials */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400">
            Let’s Build Something Great Together
          </h2>

          <p className="text-base text-gray-300">
            Have a project, idea, or opportunity you’d like to discuss? I’m always open to connecting — whether it’s dev talk, or a chess rematch. Drop the idea before you doubt it.
          </p>

          <div className="flex space-x-6 text-2xl text-green-300">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-green-500">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="md:w-1/2 w-full">
          <form
            action="https://formspree.io/f/xkgrnqnw"
            method="POST"
            className="grid gap-4 bg-[#0e2c2c] p-6 rounded-xl shadow-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="bg-black border border-green-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-black border border-green-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-black border border-green-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              required
              className="bg-black border border-green-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
