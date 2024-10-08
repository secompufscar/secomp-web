"use client"

import { AiFillLock } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';
import WeekdayHeader from './WeekdayHeader';
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
    
    const schedule = {
    'SEGUNDA-FEIRA': [
        {
        startTime: '08:00',
        endTime: '18:00',
        title: 'HACKATHON TRACTIAN',
        subtitle: '',
        },
        {
        startTime: '18:00',
        endTime: '19:00',
        title: 'INTERVALO',
        subtitle: '',
        },
        {
        startTime: '19:00',
        endTime: '-',
        title: 'GAMENIGHT',
        subtitle: '',
        },
    ],
    'TERÇA-FEIRA': [
        {
        startTime: '13:00',
        endTime: '14:00',
        title: 'CREDENCIAMENTO',
        subtitle: '',
        },
        {
        startTime: '14:00',
        endTime: '14:30',
        title: 'ABERTURA',
        subtitle: '',
        },
        {
        startTime: '14:30',
        endTime: '15:30',
        title: 'Python 4ever:',
        subtitle: 'o poder dos geradores',
        },
        {
        startTime: '15:30',
        endTime: '16:00',
        title: 'COFFEE BREAK',
        subtitle: '',
        },
        {
        startTime: '16:00',
        endTime: '17:00',
        title: 'Desvendando o universo da cybersegurança',
        subtitle: '',
        },
        {
        startTime: '17:00',
        endTime: '18:00',
        title: 'Inteligência Artificial e Multimodalidade',
        subtitle: ''
        }, 
        {
        startTime: '18:00',
        endTime: '19:00',
        title: 'INTERVALO',
        subtitle: ''
        }, 
        {
        startTime: '19:00',
        endTime: '23:00',
        title: 'MINICURSOS A',
        subtitle: ''
        }, 
    ],
    'QUARTA-FEIRA': [
        {
        startTime: '08:00',
        endTime: '09:00',
        title: 'ROADMAP DE CARREIRA',
        subtitle: 'Tempest',
        },
        {
        startTime: '09:00',
        endTime: '10:00',
        title: 'WORKSHOP TRACTIAN',
        subtitle: '',
        },
        {
        startTime: '10:00',
        endTime: '11:00',
        title: 'PALESTRA TEMPEST',
        subtitle: 'por Luckas Judocka',
        },
        {
        startTime: '11:00',
        endTime: '12:00',
        title: 'PALESTRA TRACTIAN',
        subtitle: '',
        },
        {
        startTime: '12:00',
        endTime: '16:00',
        title: 'INTERVALO',
        subtitle: '',
        },
        {
        startTime: '16:00',
        endTime: '17:00',
        title: 'PALESTRAS',
        subtitle: 'QITECH / VISAGIO / PÓS-GRAD / MAGALU',
        },
        {
        startTime: '17:00',
        endTime: '19:00',
        title: 'INTERVALO',
        subtitle: '',
        },
        {
        startTime: '19:00',
        endTime: '23:00',
        title: 'CONTEST M@U',
        subtitle: '',
        },
    ],
    'QUINTA-FEIRA': [
        {
        startTime: '08:00',
        endTime: '09:00',
        title: 'Java e IA Generativa',
        subtitle: '',
        },
        {
        startTime: '09:00',
        endTime: '10:00',
        title: 'O papel de UX Security',
        subtitle: 'Em cibersegurança',
        },
        {
        startTime: '10:00',
        endTime: '10:30',
        title: 'COFFEE BREAK',
        subtitle: '',
        },
        {
        startTime: '11:30',
        endTime: '12:30',
        title: 'Desenvolvimento e Finanças:',
        subtitle: 'Onde está a Ponte?',
        },
        {
        startTime: '14:00',
        endTime: '18:00',
        title: 'MINICURSOS C',
        subtitle: '',
        },
        {
        startTime: '18:00',
        endTime: '19:00',
        title: 'INTERVALO',
        subtitle: '',
        },
        {
        startTime: '19:00',
        endTime: '18:00',
        title: 'HACKATHON MAGALU',
        subtitle: '',
        },
    ],
    'SEXTA-FEIRA': [
        {
        startTime: '08:00',
        endTime: '12:00',
        title: 'MINICURSOS D',
        subtitle: '',
        },
        {
        startTime: '12:00',
        endTime: '14:00',
        title: 'INTERVALO',
        subtitle: '',
        },
        {
        startTime: '14:00',
        endTime: '15:00',
        title: 'Funcional:',
        subtitle: 'História e Padrões de Desenvolvimento',
        },
        {
        startTime: '15:00',
        endTime: '16:00',
        title: 'COMO ACOPLAMENTO AFETA A ESCALABILIDADE DO SISTEMA',
        subtitle: '',
        },
        {
        startTime: '16:00',
        endTime: '16:30',
        title: 'COFFEE BREAK',
        subtitle: '',
        },
        {
        startTime: '16:30',
        endTime: '17:30',
        title: 'De átomos ao assembler',
        subtitle: '',
        },
        {
        startTime: '17:30',
        endTime: '18:30',
        title: 'FLASH TALKS',
        subtitle: '',
        },
        {
        startTime: '19:00',
        endTime: '20:00',
        title: 'ENCERRAMENTO',
        subtitle: '',
        },
    ],
    };

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

                <div className="w-full h-[95%] flex justify-around">
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

                <div className="w-full h-[95%] flex justify-around">
                    <CalendarColumn key={2} events={schedule['QUINTA-FEIRA'] || []} />
                    <CalendarColumn key={3} events={schedule['SEXTA-FEIRA'] || []} />
                </div>
            </div>
        </Carousel>
    );
}