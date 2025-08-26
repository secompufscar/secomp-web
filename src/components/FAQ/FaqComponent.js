"use client"

import { useState } from "react"; 
import { Plus, Minus } from "lucide-react";
import { inter, robotoMono } from "@/utils/fonts"
import "./style.css"

function FAQComponent({ faqData }) {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index] 
    }));
  };

  const divFaqClasses= `absolute top-0 mb-6 transition-height duration-300 z-0 relative
  h-0 overflow-hidden peer-checked:h-min peer-checked:py-10 ${inter.className}`

  const labelFaqClasses = `text-2xl md:text-3xl z-20 translate-y-8 transition-all text-white relative   
  h-[70px] flex items-center justify-start ${robotoMono.className}`;

  return (
    <div className='flex w-full justify-center items-center flex-col mt-8'>
      {faqData.map((item, index) => {
        const isOpen = openItems[index];

        return (
          <div key={index} className='relative w-full'>
            <button
              onClick={() => handleToggle(index)}
              className={`${labelFaqClasses} w-full text-left group`} 
              aria-expanded={isOpen} 
              aria-controls={`faq-content-${index}`}
            >
              <p className="text-2xl md:text-3xl text-white/50 font-bold mr-12 group-hover:text-secondary transition-all duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </p>

              <p className="mr-10">{item.titulo}</p>

              <div className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                <Plus className={`absolute w-full h-full text-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <Minus className={`absolute w-full h-full text-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </button>
            
            <div 
              id={`faq-content-${index}`}
              className={`${divFaqClasses} ${isOpen ? 'h-min py-10' : 'h-0'}`}
            >
              <p className='text-white text-[1.6rem] leading-[1.8] font-extralight'>{item.texto}</p>
            </div>
          </div>
      )})}
    </div>
  );
}

export default FAQComponent;
