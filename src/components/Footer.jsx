import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-20 py-10 px-6 md:px-16 text-white overflow-hidden">

      {/* 🔵 SAME BG GLOW (Navbar/About style) */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔲 GLASS CARD */}
      <div className="relative z-10 max-w-5xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-xl">

        {/* 👇 NAME / BRAND */}
        <h2 className="text-xl font-semibold mb-2">
          Anish <span className="text-blue-400">Kumar</span>
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          Full Stack Developer • React • Spring Boot
        </p>

        {/* 🔗 SOCIAL ICONS */}
        <div className="flex justify-center gap-6 text-xl mb-5">

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Anishk01"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/anish-kumar-6a0647252/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:anishkyadav122@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-pink-500/30 transition"
          >
            <FaEnvelope />
          </motion.a>

        </div>

        {/* ⚡ LINE */}
        <div className="border-t border-white/10 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Anish Kumar. Built with React ⚡
        </div>

      </div>
    </footer>
  );
};

export default Footer;