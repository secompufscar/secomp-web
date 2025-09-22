"use client"

import { useEffect } from "react";
import { inter, oswald, robotoMono } from "@/utils/fonts"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Lenis from "@studio-freight/lenis";
import TextType from "@/components/text/textType";
import AnimatedContent from "@/components/animation/animatedContent";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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

            <div className="w-full px-8 sm8:px-16 lg:px-48">
                <div className="w-full flex flex-col items-center justify-center pt-56">
                    <TextType 
                        text={["A EQUIPE DOS SONHOS", "UM TIME QUE INSPIRA", "MUITO MAIS QUE UM GRUPO"]}
                        loop={true}
                        typingSpeed={80}
                        deletingSpeed={80}
                        pauseDuration={3000}
                        showCursor={false}
                        startOnVisible={true}
                        className={`h-24 text-center text-white text-3xl md:text-4xl font-bold ${oswald.className} py-6 px-10 border border-white rounded-full transition-all duration-500`}
                    />

                    <div className="w-full flex flex-col items-center text-white mt-16 xl:w-[60%] xl:mt-24">                          
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            duration={1.5}
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.01}
                            threshold={0.1}
                            delay={0.2}
                        >
                            <h3 className={`text-center text-[3.5rem] sm:text-[4.8rem] font-bold leading-[1.4] mb-8 xl:mb-12 ${inter.className}`}>
                                Conheça a equipe responsável por organizar a Secomp
                            </h3>
                        </AnimatedContent>

                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            duration={1.5}
                            initialOpacity={0.6}
                            animateOpacity
                            scale={1.01}
                            threshold={0.1}
                            delay={0.4}
                        >
                            <p className={`text-center text-[1.5rem] sm:text-[1.75rem] font-light leading-[2] ${inter.className}`}>
                                A equipe da Secomp é formada por estudantes dos cursos de computação da UFSCar, que se dedicam a promover conhecimento, inovação e interação entre a comunidade acadêmica e a indústria de tecnologia.
                            </p>
                        </AnimatedContent>
                    </div>

                    <div className="w-full xl:w-[75%] mt-20 md:mt-32">
                        <img src="./equipe-xii.png"/>
                    </div>
                </div>
            </div> 

            <Footer />
        </>
    );
}