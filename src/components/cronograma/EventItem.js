import React from 'react';

const EventItem = ({ startTime, endTime, title, subtitle }) => {
  return (
    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
      {/* Ball with time */}
      <div className="w-36 h-36 flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full shrink-0">
        <p className="text-lg text-white font-montserrat truncate text-center">
          {startTime}
        </p>
        <p className="text-lg text-white font-montserrat truncate text-center">
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
