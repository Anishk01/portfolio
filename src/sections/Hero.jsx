import React from "react";
import profile from "../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";
import {ArrowDownToLine, Send } from "lucide-react";
import Button from "../components/Button";


const Hero = () => {
    return (

        <section

           id="home"
className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20

bg-gradient-to-r 
from-[#f8fafc] via-[#e0f2fe] to-[#eef2ff]   /* LIGHT MODE (clean + soft) */

dark:bg-gradient-to-r 
dark:from-[#020617] dark:via-[#0f172a] dark:to-[#020617]   /* DARK MODE (deep + smooth) */

text-gray-900 dark:text-white 
relative overflow-hidden"
        >

            {/* LEFT */}
            <div className="max-w-xl z-10">
                <p className="inline-block px-4 py-1.5 mb-2 rounded-full 
                    text-sm font-medium 
                    bg-blue-100 text-blue-600 
                    dark:bg-blue-500/10 dark:text-blue-400 
                    backdrop-blur-md border border-white/10 
                    shadow-md">Hello, I am
                </p>

                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Anish <span className="text-blue-500">Kumar</span>
                </h1>

                <h2 className="text-2xl md:text-3xl  mb-4 lg:text-4xl font-bold 
                    bg-gradient-to-r from-blue-400 to-cyan-300 
                    bg-clip-text text-transparent 
                    drop-shadow-[0_5px_15px_rgba(59,130,246,0.4)]">
                    <TypeAnimation
                        sequence={["Full Stack Developer"]}
                        speed={60}
                        repeat={0}
                        cursor={false}
                    />
                </h2>

                <p className="text-gray-900 dark:text-white mb-6 leading-relaxed">
                    I build modern and responsive web applications using React and Spring.
                    I focus on clean code, performance, and great user experience.
                </p>

                <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4">
                    <Button text="Hire me" Icon={Send} />
                    <Button text="Download Resume" Icon={ArrowDownToLine}/>
                </div>

            </div>

            {/* RIGHT */}
            <div className="relative mt-12 md:mt-0 flex justify-center w-full md:w-1/2">

                {/* 🔵 BLUE GLOW */}
                <div className="absolute w-[420px] h-[420px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

                {/* 🟣 PINK GLOW */}
                <div className="absolute w-[320px] h-[320px] bg-pink-500 opacity-20 blur-3xl rounded-full top-10 right-10"></div>

                {/* IMAGE + BORDER */}
                <div className="relative z-10 w-[200px] h-[240px] sm:w-[2800px] sm:h-[360] md:w-[400px] md:h-[500px] rounded-[220px] flex items-center justify-center">

                    {/* GLOW BORDER */}
                    <div className="absolute inset-0 rounded-[220px] border-[6px] border-white/80 
                 shadow-[0_0_40px_rgba(59,130,246,0.6)]"></div>

                    {/* IMAGE */}
                    <img
                        src={profile}
                        alt="profile"
                        className="w-full h-full object-cover object-top rounded-[220px]"
                    />
                </div>

                {/* ===== GLASS TAGS ===== */}

                {/* FRONTEND */}
                <div className="absolute top-1 left-3 md:top-16 md:left-6
                    bg-black/20 dark:bg-white/10
                    backdrop-blur-2xl border border-white/20
                    px-3 py-1.5 sm:px-6 sm:py-3  rounded-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                    flex items-center gap-3">
                    <span className="text-blue-400 text-sm sm:text-xl">💻</span>
                    <p className="text-xs sm-text-sm md-text-base text-white font-medium">
                        Frontend
                    </p>
                </div>

                {/* BACKEND */}
                <div className="absolute top-1 right-0 md:right-16 md:top-[20px]
                    bg-black/20 dark:bg-white/10
                    backdrop-blur-2xl border border-white/20
                    px-3 py-1.5 sm:px-6 sm:py-3 rounded-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                    flex items-center gap-3">
                    <span className="text-green-400 text-sm sm:text-xl">🖥️</span>
                    <p className="text-xs sm-text-sm md-text-base text-white font-medium">
                        Backend
                    </p>
                </div>

                {/* Database */}
                <div className="absolute bottom-1 left-4 md:bottom-16 md:left-8 
                    bg-black/20 dark:bg-white/10
                    backdrop-blur-2xl border border-white/20
                    px-3 py-1.5 sm:px-6 sm:py-3 rounded-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                    flex items-center gap-3">
                    <span className="text-yellow-400 text-sm sm:text-xl">🚀</span>
                    <p className="text-xs sm-text-sm md-text-base text-white font-medium">
                        Database
                    </p>
                </div>

                {/* UI/UX */}
                <div className="absolute bottom-1 right-2 md:bottom-8 md:right-12
                    bg-black/20 dark:bg-white/10
                    backdrop-blur-2xl border border-white/20
                    px-3 py-1.5 sm:px-6 sm:py-3 rounded-2xl
                    shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                    flex items-center gap-3">
                    <span className="text-pink-400 text-sm sm:text-xl">⭐</span>
                    <p className="text-xs sm-text-sm md-text-base text-white font-medium">
                        Clean UI/UX
                    </p>
                </div>





            </div>
        </section>
    );
};

export default Hero;