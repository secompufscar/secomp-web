"use client";

import { inter, oswald, robotoMono } from "@/utils/fonts"
import AnimatedContent from "@/components/animation/animatedContent";

const diamante = [
  "",
  "",
  "",
  "",
];

const ouro = [

];

const prata = [

];

export default function Patrocinadores() {
    return (
        <div className={`w-full flex flex-col mt-8 py-16 text-white gap-20 md:gap-36 ${robotoMono.className}`}>
            {diamante.length > 0 && 
                <AnimatedContent
                    distance={70}
                    direction="vertical"
                    reverse={false}
                    duration={1.5}
                    initialOpacity={0.6}
                    animateOpacity
                    scale={1.01}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div className="flex flex-col uppercase text-2xl font-light gap-4">
                        <h3>Diamante</h3>

                        <div className="w-full grid grid-cols-1 sm8:grid-cols-2 xl:grid-cols-4 gap-6">
                            {diamante.map((src, i) => (
                                <div 
                                key={i} 
                                className={`
                                    flex-1  rounded-2xl flex items-center justify-center p-13 
                                    text-white text-xl ${robotoMono.className}
                                `}
                                >
                                    <img src={src} alt={`Patrocinador ${i + 1}`} className="w-[65%] h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            }
            
            {ouro.length > 0 && 
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.1}
                    initialOpacity={0.8}
                    animateOpacity
                    scale={1.01}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div className="flex flex-col uppercase text-2xl font-light gap-4">
                        <h3>Ouro</h3>

                        <div className="w-full grid grid-cols-1 sm8:grid-cols-2 xl:grid-cols-4 gap-6">
                            {ouro.map((src, i) => (
                                <div 
                                key={i} 
                                className={`
                                    flex-1  rounded-2xl flex items-center justify-center p-13 
                                    text-white text-xl ${robotoMono.className}
                                `}
                                >
                                    <img src={src} alt={`Imagem ${i + 1}`} className="w-[65%] h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            }
            
            {prata.length > 0 && 
                <AnimatedContent
                    distance={60}
                    direction="vertical"
                    reverse={false}
                    duration={1.1}
                    initialOpacity={0.8}
                    animateOpacity
                    scale={1.01}
                    threshold={0.1}
                    delay={0.1}
                >
                    <div className="flex flex-col uppercase text-2xl font-light gap-4">
                        <h3>Prata</h3>

                        <div className="w-full grid grid-cols-1 sm8:grid-cols-2 xl:grid-cols-4 gap-6">
                            {prata.map((src, i) => (
                                <div 
                                key={i} 
                                className={`
                                    flex-1  rounded-2xl flex items-center justify-center p-13 
                                    text-white text-xl ${robotoMono.className}
                                `}
                                >
                                    <img src={src} alt={`Imagem ${i + 1}`} className="w-[65%] h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedContent>
            }
        </div>
    );
}
