"use client"

import { Carousel } from 'react-responsive-carousel';
import WeekdayHeader from './WeekdayHeader';
import { schedule } from './schedule';
import CalendarColumn from './CalendarColumn';

// Breakpoint prefix: lg 
// Minimum width: 1024px

export default function CronogramaMedio() {
    const weekdays = [
        'SEGUNDA-FEIRA',
        'TERÇA-FEIRA',
        'QUARTA-FEIRA',
        'QUINTA-FEIRA',
        'SEXTA-FEIRA',
      ];

    return (
        <Carousel showStatus={false} showIndicators={false} emulateTouch preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
            <div className='w-full h-auto px-6'>
                {/* <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">SEGUNDA-FEIRA</p>
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">TERÇA-FEIRA</p>
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">QUARTA-FEIRA</p>
                </div> */}

                <div className="w-full h-[5%] mb-10 flex items-center justify-around">
                    <WeekdayHeader key={1} day={'SEGUNDA-FEIRA'} />
                    <WeekdayHeader key={2} day={'TERÇA-FEIRA'} />
                    <WeekdayHeader key={3} day={'QUARTA-FEIRA'} />
                </div>

                <div className="w-full h-[95%] flex justify-around gap-4">
                    <CalendarColumn key={1} events={schedule['SEGUNDA-FEIRA'] || []} />
                    <CalendarColumn key={2} events={schedule['TER\u00C7A-FEIRA'] || []} />
                    <CalendarColumn key={3} events={schedule['QUARTA-FEIRA'] || []} />
                </div>

            </div>
            <div className='w-full h-auto px-6'>
                <div className="w-full h-[5%] mb-10 flex items-center justify-around">
                    <WeekdayHeader key={2} day={'QUINTA-FEIRA'} />
                    <WeekdayHeader key={3} day={'SEXTA-FEIRA'} />
                </div>

                <div className="w-full h-[95%] flex justify-around gap-4">
                    <CalendarColumn key={2} events={schedule['QUINTA-FEIRA'] || []} />
                    <CalendarColumn key={3} events={schedule['SEXTA-FEIRA'] || []} />
                </div>
            </div>
        </Carousel>
    );
}