'use client'
import UseCountdown from "@/app/hooks/useCountdown";

import { montserrat } from "@/utils/fonts"

import styles from './styles.module.css'

export default function Countdown() {
    const countdown = UseCountdown(new Date('2024/10/28').getTime());

    return (
        <>
            <hr className={`${styles.hr} w-full lg:w-1/2`}/>
            <div className={`flex gap-12 md:gap-36 mb-16 text-3xl ${!countdown.init && 'invisible'}`}>
                    <div>
                        <h6 className={`py-2 md:mb-12 md:text-[48px] lg:text-9xl font-semibold ${montserrat.className}`}>{countdown.days}</h6>
                        <p>Dias</p>
                    </div>
                    <div>
                        <h6 className={`py-2 md:mb-12 md:text-[48px] lg:text-9xl font-semibold ${montserrat.className}`}>{countdown.hours}</h6>
                        <p>Horas</p>
                    </div>
                    <div>
                        <h6 className={`py-2 md:mb-12 md:text-[48px] lg:text-9xl font-semibold ${montserrat.className}`}>{countdown.minutes}</h6>
                        <p>Minutos</p>
                    </div>
                    <div>
                        <h6 className={`py-2 md:mb-12 md:text-[48px] lg:text-9xl font-semibold ${montserrat.className}`}>{countdown.seconds}</h6>
                        <p>Segundos</p>
                    </div>
            </div>
        </>
    );
}