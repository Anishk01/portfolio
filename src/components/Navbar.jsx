import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Send } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);

  // 🌙 Dark Mode
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className=" w-full fixed top-0 left-0 z-50  bg-gradient-to-r from-[#eef2f7] via-[#dbeafe] to-[#e0e7ff] 
       text-black dark:text-white transition-all duration-300 ark:bg-gradient-to-r 
dark:from-[#020617] dark:via-[#0f172a] dark:to-[#020617]   /* DARK MODE (deep + smooth) */">

      <div className="max-w-7xl px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">

        {/* 🔹 LEFT */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Anish<span className="text-blue-500">.</span>
          </h1>

          {/* 🔥 TOGGLE (Premium) */}
          <button
            onClick={() => setDark(!dark)}
            className="relative w-12 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:bg-gray-700 rounded-full transition flex items-center"
          >
            <div
              className={`w-5 h-5 flex items-center justify-center bg-white rounded-full shadow-md transform transition duration-300 ${dark ? "translate-x-6" : "translate-x-0"
                }`}
            >
              {dark ? (
                <Moon size={14} className="text-gray-700" />
              ) : (
                <Sun size={14} className="text-yellow-500" />
              )}
            </div>
          </button>
        </div>

        {/* 🔹 CENTER MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔹 RIGHT BUTTON */}
       <a href="mailto:anishkyadav122@gmail.com"><Button text="Hire Me" Icon={Send}/></a>


        {/* 🔹 MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden px-6 py-4 bg-gradient-to-r 
from-[#eef2f7] via-[#dbeafe] to-[#e0e7ff]  dark:from-[#0f172a] dark:via-[#111827] dark:to-[#020617] shadow-md space-y-4 ">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <p key={item} className="hover:text-blue-500 cursor-pointer">
              {item}
            </p>
          ))}
          <a href="mailto:anishkyadav122@gmail.com"><Button text="Hire Me" Icon={Send}/></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;