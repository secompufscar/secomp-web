"use client"

import { BiDownArrow } from 'react-icons/bi';
import "./style.css"

function FAQComponent({ faqData }) {

  const toggleClassPurple = (e) => {
    const elementClicked = e.target;
    elementClicked.classList.toggle('bg-[#B4C5FF]')
    elementClicked.classList.toggle('bg-deg-purple')
  }
  const toggleClassVerde= (e) => {
    console.log(e.target)
    const elementClicked = e.target;
    elementClicked.classList.toggle('bg-[#9affdd]')
    elementClicked.classList.toggle('bg-deg-verde')
  }
  const divFaqClasses=`  absolute top-0 mb-6 transition-height duration-300  z-0  relative rounded-3xl glow border-solid peer-checked:border-x-4 
  peer-checked:border-4  h-0   overflow-hidden peer-checked:h-min  peer-checked:py-10`
  const labelFaqClasses = `text-2xl z-20 translate-y-8 transition-all text-white relative rounded-full border-solid   
  glow-2 border-4 font-bold tracking-[1px] h-[60px] flex items-center justify-center peer-checked:text-black`;

  return (
    <div className='flex justify-center items-center flex-col lg:w-full mt-30 pb-50 '>
      {faqData.map((item, index) => (
        <div className='relative w-full md:w-9/12 mb-8' key={index}>
          {/* check */}
          <input
            className='absolute peer opacity-0'
            type='checkbox'
            id={`input${index}`}
          />
          <div className="z-10 translate-y-10 translate-x-2  h-[60px] w-full rounded-full absolute -left-2 -top-2  z-0 bg-black" /> {/* Adiciona uma div de fundo preta sem transparência */}

          <label
            onClick={(e) => { index%2==0 ? toggleClassVerde(e) : toggleClassPurple(e) }}
            className={`
              ${labelFaqClasses}
              ${
                index%2==0 ? 'bg-deg-verde' : 'bg-deg-purple'
              }
              ${index%2==0 ? 'border-[#9affdd]' : 'border-[#B4C5FF]'}
              cursor-pointer
              pr-16 pl-8
            `}
            htmlFor={`input${index}`}
          >
            {item.titulo}
          </label>
          {/* Arrow */}
          <BiDownArrow
            className={`z-20 mr-4 md:mr-8 none text-4xl xsm:text-[24px] text-white translate-y-8 absolute top-[18px] xsm:top-[13px] right-[12px] peer-checked:rotate-180 duration-200`}
          />
          {/* texto */}
          <div className={divFaqClasses.concat(index%2==0?' border-[#9affdd]':' border-[#B4C5FF]')}>
            <p className='p-[20px] text-white text-2xl'>{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQComponent;
