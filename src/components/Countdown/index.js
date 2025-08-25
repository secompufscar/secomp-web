'use client'
import { useEffect, useState } from "react";
import UseCountdown from "@/app/hooks/useCountdown";
import { oswald, robotoMono } from "@/utils/fonts"

export default function Countdown() {
  const countdown = UseCountdown(new Date('2025/09/29').getTime());
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex gap-8 md:gap-20 md:text-3xl mt-20 
        transition-opacity duration-1000 
        ${countdown.init && show ? "opacity-100" : "opacity-0"}
        ${robotoMono.className}
      `}
    >
      <div className="min-w-[3ch] text-center flex flex-col gap-5">
        <h6 className={`py-2 md:text-[48px] lg:text-5xl font-semibold`}>{countdown.days}</h6>
        <p className={`font-light`}>D</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 md:text-[48px] lg:text-5xl font-semibold`}>{countdown.hours}</h6>
        <p className={`font-light`}>H</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 md:text-[48px] lg:text-5xl font-semibold`}>{countdown.minutes}</h6>
        <p className={`font-light`}>M</p>
      </div>
      <div className="flex flex-col gap-5">
        <h6 className={`py-2 md:text-[48px] lg:text-5xl font-semibold`}>{countdown.seconds}</h6>
        <p className={`font-light`}>S</p>
      </div>
    </div>
  );
}
