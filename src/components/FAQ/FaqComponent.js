import React, { useState } from 'react';
import './style.css'
import { BiDownArrow } from 'react-icons/bi';

function FAQComponent({ faqData }) {

  const toggleClassPurple = (e) => {
    const elementClicked = e.target;
    elementClicked.classList.toggle('faq_p')
    elementClicked.classList.toggle('bg-deg-purple')
  }
  const toggleClassVerde= (e) => {
    console.log(e.target)
    const elementClicked = e.target;
    elementClicked.classList.toggle('faq_v')
    elementClicked.classList.toggle('bg-deg-verde')
  }
  const divFaqClasses=`absolute top-0 mb-6 transition-height duration-300  z-0  relative rounded-3xl glow border-solid peer-checked:border-x-4 
  peer-checked:border-4  h-0   overflow-hidden peer-checked:h-min  peer-checked:py-15`
  const labelFaqClasses = ` z-20 translate-y-8 transition-all text-white relative rounded-full border-solid   
  glow-2 border-4 font-bold tracking-[1px] h-[50px] flex items-center justify-center`;

  return (
    <div className='flex justify-center items-center flex-col lg:w-full '>
      {faqData.map((item, index) => (
        <div className='relative w-full md:w-9/12' key={index}>
          {/* check */}
          <input
            className='absolute peer opacity-0'
            type='checkbox'
            id={`input${index}`}
          />
          <div className="z-10 translate-y-10 translate-x-2  h-[50px] w-full rounded-full absolute -left-2 -top-2  z-0 bg-black" /> {/* Adiciona uma div de fundo preta sem transparência */}

          <label
            onClick={(e) => index%2==0 ? toggleClassVerde(e) : toggleClassPurple(e)}
            className={`
              ${labelFaqClasses}
              ${
                index%2==0 ? 'bg-deg-verde' : 'bg-deg-purple'
              }
              ${index%2==0 ? 'border-verde' : 'border-purple'}
            `}
            htmlFor={`input${index}`}
          >
            {item.titulo}
          </label>
          {/* Arrow */}
          <BiDownArrow
            className={`z-20 none text-4xl xsm:text-[24px] text-white translate-y-8 absolute top-[13px] right-[12px] peer-checked:rotate-180 duration-200`}
          />
          {/* texto */}
          <div className={divFaqClasses.concat(index%2==0?' border-verde':' border-purple')}>
            <p className='p-[20px] text-sm'>{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQComponent;
