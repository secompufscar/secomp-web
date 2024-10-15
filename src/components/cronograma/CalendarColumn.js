import React from 'react';
import EventItem from './EventItem';

const CalendarColumn = ({ events }) => {
  return (
    <div className="w-full h-full flex flex-col  gap-4 justify-around">
      {events.map((event, index) => (
        <EventItem
          key={index}
          startTime={event.startTime}
          endTime={event.endTime}
          title={event.title}
          extend={event.extend}
          subtitle={event.subtitle}
        />
      ))}
    </div>
  );
};

export default CalendarColumn;
