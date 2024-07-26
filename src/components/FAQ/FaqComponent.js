import { FaCaretDown } from 'react-icons/fa';
import "./style.css"

function FAQComponent({ faqData }) {

  const toggleClassPurple = (e) => {
    const elementClicked = e.target;
    elementClicked.classList.toggle('bg-[#B4C5FF]')
    elementClicked.classList.toggle('bg-deg-purple')
  }
  const toggleClassVerde = (e) => {
    const elementClicked = e.target;
    elementClicked.classList.toggle('bg-[#B4C5FF]')
    elementClicked.classList.toggle('bg-deg-verde')
  }
  const divFaqClasses = `absolute top-0 mb-6 transition-height duration-300 z-0 relative bottom-border-radius glow  h-0  overflow-hidden  peer-checked:h-min peer-checked:py-10 gradient-opacity inner-shadow background-blur`
  const labelFaqClasses = `text-2xl z-20 translate-y-8 transition-all text-white relative custom-border-radius border-solid   
  glow-2 border-4 border-transparent font-bold tracking-[1px] h-[70px] flex items-center justify-center peer-checked:text-black background-blur`; //titulo

  return (
    <div className='flex justify-center items-center flex-col lg:w-full mt-30 pb-50 '>
      {faqData.map((item, index) => (
        <div className='relative w-full lg:w-11/12 xl:w-10/12 mb-8' key={index}>
          {/* check */}
          <input
            className='absolute peer opacity-0'
            type='checkbox'
            id={`input${index}`}
          />
          <div className="z-10 translate-y-10 translate-x-2  h-[70px] w-full rounded-full absolute -left-2 -top-2  z-0 gradient-opacity inner-shadow background-blur" /> {/* Adiciona uma div de fundo preta sem transparência */}

          <label
            onClick={(e) => { index % 2 == 0 ? toggleClassVerde(e) : toggleClassPurple(e) }}
            className={`
              ${labelFaqClasses}
              ${
              index % 2 == 0 ? 'bg-deg-verde' : 'bg-deg-purple'
              }
              cursor-pointer
              pr-16 pl-8
            `}
            htmlFor={`input${index}`}
          >
            {item.titulo}
          </label>
          {/* Arrow */}
          <FaCaretDown
            className={`z-20 mr-4 md:mr-8 none text-4xl xsm:text-[24px] arrow-icon translate-y-8 absolute top-[18px] xsm:top-[13px] right-[12px] peer-checked:rotate-180 duration-200 peer-checked:text-black`}
          />
          {/* texto */}
          <div className={`${divFaqClasses}`}>
            <p className='p-[20px] text-white text-2xl'>{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQComponent;
