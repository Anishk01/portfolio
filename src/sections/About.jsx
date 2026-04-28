import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/images/p1.png";

const About = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-pink-500 blur-xl opacity-40 rounded-2xl"></div>

            <img
              src={p1}
              alt="Anish"
              className="relative w-72 md:w-80 rounded-2xl border border-white/20 shadow-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-200 mb-4 leading-relaxed">
            I'm <span className="text-white font-semibold">Anish Kumar</span>, a passionate 
            Full Stack Developer. I build building modern and scalable web applications.
          </p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            I specialize in React and Spring Boot, focusing on clean code, performance, 
            and user-friendly interfaces.
          </p>

          {/* 🔥 TIMELINE (REPLACED SKILLS) */}
<div className="border-l border-white/20 pl-6 space-y-6">

  {/* 10th */}
  <div className="relative">
    <div className="absolute -left-3 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
    <h4 className="text-white font-semibold">10th (CBSE)</h4>
    <span className="text-sm text-blue-400">2020</span>
    <p className="text-gray-400 text-sm">DAV Public School — 83.4%</p>
  </div>

  {/* 12th */}
  <div className="relative">
    <div className="absolute -left-3 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
    <h4 className="text-white font-semibold">12th (CBSE)</h4>
    <span className="text-sm text-blue-400">2022</span>
    <p className="text-gray-400 text-sm">DAV Public School — 76.6%</p>
  </div>

  {/* B.Tech */}
  <div className="relative">
    <div className="absolute -left-3 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
    <h4 className="text-white font-semibold">B.Tech CSE</h4>
    <span className="text-sm text-blue-400">2022 - 2026</span>
    <p className="text-gray-400 text-sm">Galgotias University — CGPA: 8.22</p>
  </div>

  {/* Frontend */}
  <div className="relative">
    <div className="absolute -left-3 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
    <h4 className="text-white font-semibold">Frontend Developer</h4>
    <span className="text-sm text-blue-400">2024</span>
    <p className="text-gray-400 text-sm">Worked on HTML, CSS, Tailwind CSS, JS, React Projects</p>
  </div>

  {/* Full Stack */}
  <div className="relative">
    <div className="absolute -left-3 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
    <h4 className="text-white font-semibold">Full Stack Developer</h4>
    <span className="text-sm text-blue-400">2025-26</span>
    <p className="text-gray-400 text-sm">React + Spring boot Projects</p>
  </div>

</div>

          {/* BUTTON */}
          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105 transition-all duration-300 shadow-lg">
            Read More
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default About;