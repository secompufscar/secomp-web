"use client";

import Image from "next/image";

import LogoSecomp from "../../assets/logo-secomp.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LogoSecompOutline from "../../assets/logo-secomp-outline.svg";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CustomButton from '../../components/buttons/buttons';
import { useEffect, useState } from "react";

export default function Patrocinadores() {
    const [diamante, setDiamante] = useState(0);
    const [apoiadores, setApoiadores] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setDiamante(100)
                setApoiadores(100)
            } else if (window.innerWidth < 900) {
                setDiamante(50)
                setApoiadores(50)
            } else {
                setDiamante(25)
                setApoiadores(14)
            }
        }
    
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div>

            <div className="bg_img w-full flex flex-col justify-center items-center mt-30 md:mt-50">
                <p className="text-center text-white text-3xl font-extralight">
                    A SECOMP UFSCar acontece <br /> graças ao apoio dos <br /> nossos patrocinadores
                </p>

                <h1 className="text-6xl text-white mt-20 mb-10 text-center">SEJA UM PATROCINADOR</h1>

                <CustomButton text_bold="Interesse?" text="Entre em contato" href="#contato" buttonType={1} />
            </div>

            <div className=" mt-30 md:mt-50">
                <div>
                    <div className="flex justify-center items-center mb-20 mt-20">
                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>

                        <p className="font-normal text-3xl text-white font-montserrat ml-8 mr-8 text-center">APOIO DIAMANTE</p>

                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7 items-center">
                        <Carousel showStatus={false} interval={1000} className="items-center flex" autoPlay infiniteLoop showThumbs={false} centerMode centerSlidePercentage={diamante} statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}>

                        </Carousel>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-20 mt-20">
                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>

                        <p className="font-normal text-3xl text-white font-montserrat ml-8 mr-8 text-center">APOIO OURO</p>

                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>
                    </div>

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
                        <div className="flex flex-col items-center gap-y-12">
                           
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-20 mt-20">
                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>

                        <p className="font-normal text-3xl text-white font-montserrat ml-8 mr-8 text-center">APOIO PRATA</p>

                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>
                    </div>

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
                        <div className="flex flex-col items-center gap-y-12">
                            
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center mb-20 mt-20">
                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>

                        <p className="font-normal text-3xl text-white font-montserrat ml-8 mr-8 text-center">APOIADORES</p>

                        <div className="w-20 h-[5px] bg-[#51B795] shadow-md">
                            <div className="w-20 h-[5px] bg-[#51B795] blur-md " />
                        </div>
                    </div>

                    <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7 items-center">
                        <Carousel showStatus={false} interval={1000} autoPlay infiniteLoop showThumbs={false} centerMode centerSlidePercentage={apoiadores} statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
