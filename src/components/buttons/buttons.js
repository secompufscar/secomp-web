import React from 'react';
import { robotoMono } from "@/utils/fonts"

function CustomButton({ text, href, className }) {

  return (
    <a href={href}>
      <p 
        className={`
          min-w-[120px] py-6 px-12 text-secondary text-center border border-secondary rounded-full text-xl md:text-2xl uppercase 
          ${robotoMono.className} transition-all duration-500 hover:bg-secondary hover:text-[#0A0A0A] ${className}
        `}
      >
        {text}
      </p>
    </a>
  )
}

export default CustomButton;
