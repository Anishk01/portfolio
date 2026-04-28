import React from "react";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React", icon: "/icons/rc.webp" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "HTML5", icon: "/icons/htm.png" },
        { name: "CSS3", icon: "/icons/css.webp" },
        { name: "Tailwind", icon: "/icons/tailwind.webp" },
      ],
    },
    {
      title: "Backend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Java", icon: "/icons/java.webp" },
        { name: "JDBC", icon: "/icons/jdbc.png" },
        { name: "Spring Boot", icon: "/icons/spring-boot-logo.png" },
        { name: "REST API", icon: "/icons/api.webp" },
        { name: "MVC Architecture", icon: "/icons/mvc.webp" }
      ],
    },
    {
      title: "Database",
      color: "from-pink-500 to-red-400",
      skills: [
        { name: "MySQL", icon: "/icons/mysql.webp" },

      ],
    },
    {
      title: "Tools",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Git", icon: "/icons/git.webp" },
        { name: "GitHub", icon: "/icons/ghub.webp" },
        { name: "VS Code", icon: "/icons/vs code.webp" },
      ],
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 text-white overflow-hidden">

      {/* 🔥 SAME BG GLOW AS ABOUT */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-blue-400 tracking-widest text-sm mb-2">
            MY EXPERTISE
          </p>
          <h2 className="text-5xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-3">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border border-white/10 
              bg-white/5 backdrop-blur-xl shadow-xl 
              hover:scale-105 transition duration-300`}
            >

              {/* Glow Effect (card wala same rahega) */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-30 blur-3xl`}
              ></div>

              <h3 className="text-xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center 
                    p-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 mb-2"
                    />
                    <span className="text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">
          Always learning. Always building. Always improving.
        </p>

      </div>
    </section>
  );
};

export default Skills;