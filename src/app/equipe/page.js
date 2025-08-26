"use client"

import { useEffect } from "react";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Lenis from "@studio-freight/lenis";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './style.css'

export default function Equipe() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.05, wheelMultiplier: 1.2 });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);
    

    return (
        <>
            <NavBar sticky={true}/>

            <div className="h-[100vh]">

            </div>


            <Footer />
        </>
    );
}