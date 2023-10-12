import React from 'react';
import Image from 'next/image';

const ImageWithText = ({ imageUrl, altText, title, text, obs }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 rounded-lg w-80 md:w-96 min-w-[20rem] bg-gradient-to-r from-[#008CB5] via-[#00CEA1] to-[#00CEA1] shadow-md transition-transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg mt-4 mb-4">
      <div className="flex-shrink-0 w-24 md:w-28">
        <Image className="w-full h-auto" src={imageUrl} alt={altText} width={40} height={40} />
      </div>
      <div className="w-full text-center text-shadow-[2px 2px 4px rgba(0, 0, 0, 0.5)]">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg font-bold text-white">{text}</p>
        <p className="text-base">{obs}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
