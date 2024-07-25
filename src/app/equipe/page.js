"use client"

import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './style.css'

export default function Equipe() {
    return (
        <>
            <NavBar />

            <div id="equipe" className="pt-50 w-screen h-auto" style={{ backgroundColor: "#0a0a0a", backgroundImage: "url('/bg-membros.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="w-9/12 m-auto">

                    <h1 className="text-white text-6xl font-montserrat pb-16 text-center">A NOSSA EQUIPE</h1>
                    <div className="w-full h-0.5 mb-36 bg-gradient-to-r from-black via-white/80 to-black" />

                    <div className="w-full flex-col place-items-center hidden lg:flex">
                        <div className="w-10/12 h-125 mb-28 flex flex-col items-center justify-center">
                            <p className="w-full mt-4 mb-40 text-white text-5xl text-center font-montserrat font-light">COORDENAÇÃO</p>

                            <div className="w-full h-[55%] flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Anderson-Coordenador.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Anderson Soares</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Nathalia-Coordenadora.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Nathália Gimenes</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/JoaoOtavio-Coordenador.jpeg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">João Moraes</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-292.5 mb-20 flex flex-col items-center justify-center">
                            <p className="w-full mb-40 text-white text-5xl text-center font-montserrat font-light">PATROCÍNIO</p>

                            <div className="w-full h-[25%] mb-36 flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Karys-Patrocinio.png" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Karys Barbosa</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Augusto-Patrocinio.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Augusto dos Santos</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/PedroHenrique-Patrocinio.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Pedro Ghiotto</p>
                                </div>
                            </div>

                            <div className="w-full h-[25%] flex justify-center space-x-12 2xl:space-x-28">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Bruno-Patrocinio.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Bruno Marcelo</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Giovanni-Patrocinio.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Giovanni Guidini</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-125 mb-28 flex flex-col items-center justify-center">
                            <p className="w-full mt-4 mb-40 text-white text-5xl text-center font-montserrat font-light">JURÍDICO E FINANCEIRO</p>

                            <div className="w-full h-[55%] flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Leticia-Diretora-JF.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Letícia Suellen</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Kevyn-JF.jpeg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Kevyn Marques</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Luis-JF.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Luis Melo</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-292.5 mb-2 flex flex-col items-center justify-center">
                            <p className="w-full mb-40 text-white text-5xl text-center font-montserrat font-light">TI</p>

                            <div className="w-full h-[25%] mb-40 flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Anna-Diretora-TI.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Anna Carolina</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Enzo-TI.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Enzo Murayama</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Lucas-TI.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Lucas Araújo</p>
                                </div>
                            </div>

                            <div className="w-full h-[25%] flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Yasmin-TI.jpeg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Yasmim Oliveira</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Larissa-TI.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Larissa Dias</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Eugenio-TI.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Eugênio Nishimiya</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-292.5 mb-2 flex flex-col items-center justify-center">
                            <p className="w-full mb-40 text-white text-5xl text-center font-montserrat font-light">DESIGN E MARKETING</p>

                            <div className="w-full h-[25%] mb-36 flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Vitor-Diretor-Marketing.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Vitor Inumaru</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img w-full h-full" src="/fotos-equipe/Nataly-Marketing.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Nataly Cristina</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Leandro-Marketing.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Leandro Nogueira</p>
                                </div>
                            </div>

                            <div className="w-full h-[25%] flex justify-center space-x-12 2xl:space-x-28">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Matheus-Marketing.png" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Matheus Menecucci</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Maylon-Marketing.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Maylon Melo</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-292.5 mb-28 flex flex-col items-center justify-center">
                            <p className="w-full mb-40 text-white text-5xl text-center font-montserrat font-light">CONTEÚDO</p>

                            <div className="w-full h-[25%] mb-40 flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/LuizOtavio-Diretor-Conteudo.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Luiz</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Matheus-Conteudo.png" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Matheus Sousa</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Beatriz-Conteudo.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Beatriz Martins</p>
                                </div>
                            </div>

                            <div className="w-full h-[25%] flex justify-around">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Cicero-Conteudo.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Antônio Cícero</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Leonardo-Conteudo.jpeg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Leonardo Siqueira</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Marlon-Conteudo.jpeg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Marlon Sanches</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-10/12 h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-4 mb-40 text-white text-5xl text-center font-montserrat font-light">SOCIOCULTURAL</p>

                            <div className="w-full h-[55%] flex flex justify-center space-x-12 2xl:space-x-28">
                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Guilherme-Diretor-Sociocultural.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Guilherme Santiago</p>
                                </div>

                                <div className="cartao-membro-web">
                                    <div className="foto-membro">
                                        <img className="foto-membro-img" src="/fotos-equipe/Marcus-Sociocultural.jpg" />
                                    </div>

                                    <p className="nome-membro font-montserrat">Marcus Vinicius</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex-col place-items-center flex lg:hidden">
                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">COORDENAÇÃO</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Anderson-Coordenador.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Anderson Soares</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Nathalia-Coordenadora.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Nathália Gimenes</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/JoaoOtavio-Coordenador.jpeg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">João Moraes</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">PATROCÍNIO</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Karys-Patrocinio.png" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Karys Barbosa</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Augusto-Patrocinio.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Augusto dos Santos</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/PedroHenrique-Patrocinio.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Pedro Ghiotto</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Bruno-Patrocinio.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Bruno Marcelo</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Giovanni-Patrocinio.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Giovanni Guidini</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">JURÍDICO E FINANCEIRO</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Leticia-Diretora-JF.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Letícia Suellen</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Kevyn-JF.jpeg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Kevyn Marques</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Luis-JF.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Luis Melo</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">TI</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Anna-Diretora-TI.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Anna Carolina</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Enzo-TI.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Enzo Murayama</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Lucas-TI.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Lucas Araújo</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Yasmin-TI.jpeg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Yasmim Oliveira</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Larissa-TI.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Larissa Dias</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Eugenio-TI.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Eugênio Nishimiya</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">DESIGN E MARKETING</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Vitor-Diretor-Marketing.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Vitor Inumaru</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img w-full h-full" src="/fotos-equipe/Nataly-Marketing.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Nataly Cristina</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img w-full h-full" src="/fotos-equipe/Leandro-Marketing.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Leandro Nogueira</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Matheus-Marketing.png" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Matheus Menecucci</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Maylon-Marketing.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Maylon Melo</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">CONTEÚDO</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/LuizOtavio-Diretor-Conteudo.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Luiz</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Matheus-Conteudo.png" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Matheus Sousa</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Beatriz-Conteudo.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Beatriz Martins</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Cicero-Conteudo.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Antônio Cícero</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Leonardo-Conteudo.jpeg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Leonardo Siqueira</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Marlon-Conteudo.jpeg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Marlon Sanches</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>

                        <div className="w-full h-125 mb-40 flex flex-col items-center justify-center">
                            <p className="w-full mt-12 text-white text-4xl text-center font-montserrat font-bold">SOCIOCULTURAL</p>

                            <Carousel
                                className="w-full h-125"
                                showStatus={false}
                                showIndicators={false}
                                infiniteLoop
                                emulateTouch
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={50}
                            >
                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Guilherme-Diretor-Sociocultural.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Guilherme Santiago</p>
                                    </div>
                                </div>

                                <div className="carousel-element">
                                    <div className="cartao-membro-mobile">
                                        <div className="foto-membro">
                                            <img className="foto-membro-img" src="/fotos-equipe/Marcus-Sociocultural.jpg" />
                                        </div>

                                        <p className="nome-membro font-montserrat">Marcus Vinicius</p>
                                    </div>
                                </div>

                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}