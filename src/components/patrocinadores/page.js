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
                            <div className="flex flex-col items-center gap-y-12">
                                <img className="w-80" alt={"Logo da empresa"} src={"/rocketseat.svg"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12">
                                <img className="w-80" alt={"Logo da empresa"} src={"/SerasaExperian-TM_Portrait_RGB.svg.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12">
                                <img className="w-80" alt={"Logo da empresa"} src={"/luizalabs-logo-1656CE2B2D-seeklogo.com.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12">
                                <img className="w-80" alt={"Logo da empresa"} src={"/Logo_QI_Tech_RGB_versao_preferencial-1.png"} />
                            </div>
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
                            <img className="w-80" alt={"Logo da empresa"} src={"/nic.br-logo-1.png"} />
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


                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/Logo Açai do Pé.webp"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/logo-japaacai-350x325-1.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/202005212316_TN1Q_i-removebg-preview.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/ca54dd_e7276dc65c604e41901f55cc85d5223e~mv2_d_6746_8525_s_4_2.webp"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/hBuT4anhSP28mgO6JgIM_LOGO_CREMOSO_png-removebg-preview.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/sabordeminas.png"} />
                            </div>

                            <div className="flex flex-col items-center gap-y-12 pr-10">
                                <img className="w-40" alt={"Logo da empresa"} src={"/302678682_614195893544336_2661744382861375878_n-removebg-preview.png"} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
