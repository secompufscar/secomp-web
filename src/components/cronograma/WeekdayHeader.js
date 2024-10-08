import React from 'react';

const WeekdayHeader = ({ day }) => {
  return (
    <p className="w-full text-white text-4xl text-center font-montserrat font-light">
      {day.toUpperCase()}
    </p>
  );
};

export default WeekdayHeader;