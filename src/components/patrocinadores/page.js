"use client";

import { robotoMono } from "@/utils/fonts"
import AnimatedContent from "@/components/animation/animatedContent";

const sponsors = [
    {
        img: "/patrocinio/magalu-cloud.png",
        alt: "Magalu Cloud"
    },
    {
        img: "/patrocinio/alura.png",
        alt: "Alura"
    },
    {
        img: "/patrocinio/rocketseat.png",
        alt: "Rocket Seat"
    },
    {
        img: "/patrocinio/visagio.png",
        alt: "Visagio"
    },
    {
        img: "/patrocinio/csdbr.png",
        alt: "CSDBR"
    },
    {
        img: "/patrocinio/liven.png",
        alt: "Liven"
    },
    {
        img: "/patrocinio/grupo-criar.png",
        alt: "Grupo Criar"
    },
];

export default function Patrocinadores() {
    return (
        <div className={`w-full flex flex-col mt-12 text-white ${robotoMono.className}`}>
            {sponsors.length &&
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
                    <div className="w-full flex flex-wrap items-center justify-center gap-8 sm:gap-24">
                        {sponsors.map((src, i) => (
                            <div
                                key={i}
                                className="basis-[140px] flex-grow flex items-center justify-center"
                            >
                                <img
                                    src={src.img}
                                    alt={src.alt}
                                    className="w-full max-w-[120px] md:max-w-[150px] h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </AnimatedContent>
            }
        </div>
    );
}
