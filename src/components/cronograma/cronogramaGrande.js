"use client";

import React from 'react';
import WeekdayHeader from './WeekdayHeader';
import CalendarColumn from './CalendarColumn';
import { schedule } from './schedule';

const Cronograma = () => {
  const weekdays = [
    'SEGUNDA-FEIRA',
    'TERÇA-FEIRA',
    'QUARTA-FEIRA',
    'QUINTA-FEIRA',
    'SEXTA-FEIRA',
  ];


  return (
    <div className="w-full h-full">
      <div className="w-full h-[5%] mb-10 flex items-center justify-around">
        {weekdays.map((day, index) => (
          <WeekdayHeader key={index} day={day} />
        ))}
      </div>

      <div className="w-full h-[95%] flex justify-around gap-4">
        {weekdays.map((day, index) => (
          <CalendarColumn key={index} events={schedule[day] || []} />
        ))}
      </div>
    </div>
  );
};

export default Cronograma;
