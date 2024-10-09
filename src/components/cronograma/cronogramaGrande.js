"use client";

import React from 'react';
import WeekdayHeader from './WeekdayHeader';
import CalendarColumn from './CalendarColumn';
import { AiFillLock } from 'react-icons/ai';

const Cronograma = () => {
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
        endTime: '20:00',
        title: 'HACKATHON TRACTIAN',
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
      {
        startTime: '20:00',
        endTime: '08:00',
        title: 'GAMENIGHT',
        subtitle: '',
      },
    ],
  };

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
