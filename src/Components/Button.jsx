import React from "react";
import "aos/dist/aos.css"; 

const Button = ({ href,children, onClick, aosType }) => {
  return (
    <a href={href}>
      <button
        onClick={onClick}
        className="
        relative inline-flex items-center justify-center
        touch-manipulation rounded-2xl
        px-6 py-4
        bg-[#f0f7fa]
        shadow-[inset_0_-4px_8px_#87bfd8,0_4px_6px_rgba(0,0,0,0.2)]
        text-primaryDark 
        font-semibold
        text-md 
        transition-transform
        duration-400 ease-[cubic-bezier(0.55,1,0.15,1)]
        focus:outline-none
        active:scale-[0.92]
      "
        data-aos={aosType}
        data-aos-duration="1000" 
        data-aos-delay="1000" 
      >
        {children}
        <span
          className="
          absolute inset-0 
          border border-transparent
          border-solid
          opacity-0
          transition-opacity duration-400 ease-[cubic-bezier(0.55,1,0.15,1)]
          active:opacity-100
          focus-visible:opacity-100
          animate-[pulsate_1s_infinite]
          [transform:scale(1.04,1.08)]
          [filter:brightness(0) invert(0.1)]
        "
        ></span>
      </button>
    </a>
  );
};
export default Button;
