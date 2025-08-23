'use client'
import UseCountdown from "@/app/hooks/useCountdown";
import { oswald, robotoMono } from "@/utils/fonts"

export default function Countdown() {
    const countdown = UseCountdown(new Date('2025/09/29').getTime());

    return (
        <div className={`flex gap-8 md:gap-24 md:text-3xl mt-24 ${!countdown.init && 'invisible'}`}>
            <div className="flex flex-col gap-6">
                <h6 className={`py-2 md:text-[48px] lg:text-6xl font-semibold ${oswald.className}`}>{countdown.days}</h6>
                <p className={`${robotoMono.className}`}>D</p>
            </div>
            <div className="flex flex-col gap-6">
                <h6 className={`py-2 md:text-[48px] lg:text-6xl font-semibold ${oswald.className}`}>{countdown.hours}</h6>
                <p className={`${robotoMono.className}`}>H</p>
            </div>
            <div className="flex flex-col gap-6">
                <h6 className={`py-2 md:text-[48px] lg:text-6xl font-semibold ${oswald.className}`}>{countdown.minutes}</h6>
                <p className={`${robotoMono.className}`}>M</p>
            </div>
            <div className="flex flex-col gap-6">
                <h6 className={`py-2 md:text-[48px] lg:text-6xl font-semibold ${oswald.className}`}>{countdown.seconds}</h6>
                <p className={`${robotoMono.className}`}>S</p>
            </div>
        </div>
    );
}