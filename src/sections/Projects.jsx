import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Doctor Patient System",
      image: "/icons/doctor-patient.avif",
      link: "https://github.com/yourusername/project1",
      desc: "Built a healthcare system with symptom-based prediction and doctor consultation APIs.",
    },
    {
      name: "E-Commerce Backend",
      image: "/icons/e-commerce-solutions.jpg",
      link: "https://github.com/yourusername/project2",
      desc: "Developed REST APIs for product, order and user management with secure authentication.",
    },
    {
      name: "Portfolio Website",
      image: "/icons/portfolio.png",
      link: "https://github.com/yourusername/project3",
      desc: "Designed a modern responsive portfolio using React, Tailwind and animations.",
    },
    {
      name: "Chat Application",
      image: "/icons/chat.png",
      link: "https://github.com/yourusername/project4",
      desc: "Created a real-time chat app with WebSocket integration and messaging features.",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden">

      {/* SAME BG GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 tracking-widest text-sm mb-2">
            MY WORK
          </p>
          <h2 className="text-5xl font-bold">Projects</h2>
          <p className="text-gray-400 mt-3">
            Some of my recent work and projects
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
              bg-white/5 backdrop-blur-xl border border-white/10 
              hover:scale-105 transition duration-300 shadow-xl"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-4 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-pink-400 text-lg font-semibold transition"
                >
                  {project.name}
                </a>

                {/* 🔥 Only Added This */}
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;