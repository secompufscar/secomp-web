'use client'
import { useState, useEffect } from "react"
export default function UseCountdown(date){
   const [init, setInit] = useState(false);
   const [days, setDays] = useState(0);
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

   useEffect(() => {

      const id = setInterval(() => {
         const now = new Date().getTime();
         const distance = (date - now) / 1000;

         if(distance > 0) {
            const days = Math.floor(distance / 60 / 60 / 24);
            const hours = Math.floor(distance / 60 / 60 % 24);
            const minutes = Math.floor((distance / 60) % 60);
            const seconds = Math.floor(distance % 60);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            if(!init)
               setInit(true);

         } else {
            clearInterval(id)
         }
      }, 1000)
      return () => clearInterval(id)
   }, [date])

   return {days, hours, minutes, seconds, init}
}