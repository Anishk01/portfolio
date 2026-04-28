import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    // 👉 Yaha backend/API connect kar sakta hai (EmailJS / Node API)
    setStatus("Message sent successfully 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden">

      {/* SAME BG GLOW (as About) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build something amazing together 🚀
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:scale-105 transition">
            <FaEnvelope className="text-blue-400 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-300">Email</p>
            <a href="mailto:anish@example.com" className="text-white text-sm">
              anishkyadav122@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:scale-105 transition">
            <FaPhoneAlt className="text-pink-400 text-2xl mx-auto mb-2" />
            <p className="text-sm text-gray-300">Phone</p>
            <p className="text-white text-sm">+91 6201917433</p>
          </div>

          {/* Social */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
            <p className="text-sm text-gray-300 mb-2">Connect</p>
            <div className="flex justify-center gap-4 text-xl">
              <a href="https://github.com/Anishk01" target="_blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/anish-kumar-6a0647252/?skipRedirect=true" target="_blank"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 hover:scale-105 transition shadow-lg"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-green-400 mt-2">{status}</p>
          )}
        </motion.form>

        {/* FOOTER LINE */}
        <p className="text-gray-500 text-sm mt-10">
          Or reach me directly via email or LinkedIn
        </p>

      </div>
    </section>
  );
};

export default Contact;