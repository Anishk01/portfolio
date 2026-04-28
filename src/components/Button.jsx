import { Send } from "lucide-react";

const Button = ({
  text = "Click",
  Icon = null,
  hideOnMobile = false,
  className = "",
}) => {
  return (
    <button
      className={`
      ${hideOnMobile ? "hidden md:inline-flex" : "inline-flex"}
      items-center justify-center gap-2
      px-4 py-2.5 sm:px-6 sm:py-3 
      text-sm sm:text-base font-medium 
      whitespace-nowrap rounded-full 
      bg-gradient-to-r from-blue-500 to-pink-500 text-white
      backdrop-blur-md border border-white 
      shadow-md cursor-pointer
      transition-all duration-300 ease-in-out 
      hover:scale-105 
      hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
      leading-none
      ${className}
      `}
    >
      <span className="leading-none">{text}</span>

      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;