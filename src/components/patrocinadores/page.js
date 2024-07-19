"use client";

import Image from "next/image";

import LogoSecomp from "../../assets/logo-secomp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LogoSecompOutline from "../../assets/logo-secomp-outline.svg";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/buttons/buttons";
import { useEffect, useState } from "react";

export default function Patrocinadores() {
    const [diamante, setDiamante] = useState(0);
    const [apoiadores, setApoiadores] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setDiamante(100);
                setApoiadores(100);
            } else if (window.innerWidth < 900) {
                setDiamante(50);
                setApoiadores(50);
            } else {
                setDiamante(25);
                setApoiadores(14);
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className="bg_img w-full flex flex-col justify-center items-center mt-30 md:mt-50">

                <p className="text-center text-white text-5xl font-extralight px-6 ml-12 mr-12">
                    A SECOMP UFSCar acontece graças ao apoio dos nossos
                    patrocinadores.
                </p>

                <div className="p-4">
                    <button className="font-bold text-3xl bg-[#234B93] py-8 px-20 mt-20 text-white shadow-mg rounded-lg">
                        SEJA UM PATROCINADOR
                    </button>
                </div>
            </div>

            <div className=" mt-30 md:mt-50">
                <div>
                    <div className="flex justify-center items-center mb-6 mt-20">
                        <p className="font-extralight text-6xl text-white font-montserrat ml-8 mr-8 text-center">
                            APOIO DIAMANTE
                        </p>
                    </div>

                    <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

                    <div className="flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7 items-center">
                        <div className="flex-col">
                            <Image
                                src={LogoSecompOutline}
                                alt="Logo Colorida"
                                width="180"
                                height="180"
                            />
                            <div className="flex justify-center mt-12">
                                <p className="text-white text-6xl">SECOMP</p>
                            </div>
                        </div>
                        <div className="flex-col">
                            <Image
                                src={LogoSecompOutline}
                                alt="Logo Colorida"
                                width="180"
                                height="180"
                            />
                            <div className="flex justify-center mt-12">
                                <p className="text-white text-6xl">SECOMP</p>
                            </div>
                        </div>
                        <div className="flex-col">
                            <Image
                                src={LogoSecompOutline}
                                alt="Logo Colorida"
                                width="180"
                                height="180"
                            />
                            <div className="flex justify-center mt-12">
                                <p className="text-white text-6xl">SECOMP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-6 mt-20">
                        <p className="font-extralight text-6xl text-white font-montserrat ml-8 mr-8 text-center">
                            APOIO OURO
                        </p>
                    </div>

                    <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
                        <div className="flex flex-col items-center gap-y-12"></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-6 mt-20">
                        <p className="font-extralight text-6xl text-white font-montserrat ml-8 mr-8 text-center">
                            APOIO PRATA
                        </p>
                    </div>

                    <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
                        <div className="flex flex-col items-center gap-y-12"></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-6 mt-20">
                        <p className="font-extralight text-6xl text-white font-montserrat ml-8 mr-8 text-center">
                            APOIADORES
                        </p>
                    </div>

                    <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
                        <div className="flex flex-col items-center gap-y-12"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
