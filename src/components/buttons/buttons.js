import React from 'react';
import './style.css'
function CustomButton({ text_bold,text, buttonType }) {
  if (buttonType === 0) {
    return (
      <button
        type="submit"
        className=" bg-purple text-white px-4 py-2 w-min self-end rounded-2xl mt-4 hover:bg-white hover:text-purple hover:shadow-lg hover:transform hover:scale-105 transition duration-300"
      >
        {text}
      </button>
    );
  } else if (buttonType === 1) {
    return (
      <button className="text-xl text-black py-3 px-10 bg-verde btn-inner-shadow rounded-full mt-12">
        <span className="font-bold">{text_bold}</span> {text}
      </button>
    );
  } else {
    return null; // Pode lidar com outros valores se necessário
  }
}

export default CustomButton;
