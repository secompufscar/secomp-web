import React from 'react';

const EventItem = ({ startTime, endTime, title, subtitle, extend }) => {
  return (
    <div className={`${extend ? 'h-screen rounded-b-[64px] rounded-t-[100px]' : 'h-36 rounded-full'} relative w-full flex flex-row bg-gradient-to-b from-darkblue to-blue`}>
      {/* Ball with time */}
      <div className={`${extend ? 'absolute w-full rounded-t-[64px] flex-row space-x-1' : 'w-36 rounded-full flex-col space-y-1'} h-36 flex items-center justify-center  bg-gradient-to-b from-darkblue to-lightgreen shrink-0`}>
        <p className={`${extend ? 'text-2xl' : 'text-lg '} text-white font-montserrat truncate text-center`}>
          {startTime} {extend && '-'}
        </p>
        <p className={`${extend ? 'text-2xl' : 'text-lg'} text-white font-montserrat truncate text-center`}>
          {endTime}
        </p>
      </div>

      {/* Title and subtitle */}
      <div className="grow h-full flex flex-col items-center justify-center space-y-2 p-5">
        {title && (
          <p
            className={`text-lg text-white font-montserrat font-extrabold 2xl:text-xl text-center`}
          >
            {title}
          </p>
        )}
        {subtitle && (
          <p className="text-lg text-white font-montserrat font-light italic text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default EventItem;
