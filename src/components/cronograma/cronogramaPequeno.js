"use client"

import { Carousel } from 'react-responsive-carousel';
import WeekdayHeader from './WeekdayHeader';
import { schedule } from './schedule';
import CalendarColumn from './CalendarColumn';

// Breakpoint prefix: sm
// Minimum width: 640px

export default function CronogramaPequeno() {

    const weekdays = [
        'SEGUNDA-FEIRA',
        'TERÇA-FEIRA',
        'QUARTA-FEIRA',
        'QUINTA-FEIRA',
        'SEXTA-FEIRA',
      ];
    
   
    
    return (
        <Carousel showStatus={false} showIndicators={false} emulateTouch preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
            {weekdays.map((day, index) => (
                <div className='w-full h-auto'>
                    <div className="w-full h-[5%] mb-10 flex items-center justify-around">
                        <WeekdayHeader key={index} day={day} />
                    </div>

                    <div className="w-full h-[95%] flex justify-around">
                        <CalendarColumn key={index} events={schedule[day] || []} />
                    </div>
                </div>
            ))}
            
        </Carousel>
    );
}