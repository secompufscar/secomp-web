import React from 'react';
import EventItem from './EventItem';

const CalendarColumn = ({ events }) => {
  return (
    <div className="w-full h-full flex flex-col justify-around">
      {events.map((event, index) => (
        <EventItem
          key={index}
          startTime={event.startTime}
          endTime={event.endTime}
          title={event.title}
          subtitle={event.subtitle}
        />
      ))}
    </div>
  );
};

export default CalendarColumn;
