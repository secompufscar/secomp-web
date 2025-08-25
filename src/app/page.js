"use client"

import { useState, useEffect } from "react";
import { inter, oswald, robotoMono } from "@/utils/fonts"
import AnimatedContent from "@/components/animation/animatedContent";
import TextType from "@/components/text/textType";
import Link from "next/link";
import products from "../data/products.json"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ/FaqComponent"
import Patrocinadores from "../components/patrocinadores/page"
import Cronograma from "../components/cronograma/cronogramaGrande";
import CronogramaMedio from "../components/cronograma/cronogramaMedio";
import CronogramaPequeno from "../components/cronograma/cronogramaPequeno";
import Countdown from '../components/Countdown'
import FloatingButton from "@/components/FAB";
import styles from './page.module.css'
import "./gradient.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const faqData = [
  {
    titulo: 'Como faço para me inscrever na SECOMP?',
    texto: 'Para se inscrever na SECOMP, realize o cadastro em nosso aplicativo. Ao criar uma conta, basta se inscrever no evento por meio de um botão disponível na tela inicial.'
  },
  {
    titulo: 'Como faço para me inscrever em competições?',
    texto: 'As inscrições nas competições são realizadas por forms que estão disponíveis no nosso instagram.'
  },
  {
    titulo: 'Como faço para me inscrever em minicursos?',
    texto: 'A inscrição para os minicursos é relizada diretamente pelo nosso aplicativo.'
  },
];

export default function Page() {
  const [show, setShow] = useState(false);
  const words = ["SECOMP XIII", "•", "UFSCAR", "•"];

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NavBar />

      <div className={`gradient flex justify-center items-center md:pt-36`}>
        <div className={`px-4 pt-28 text-white flex flex-col text-[2.5rem] text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${oswald.className}`}>
          <TextType 
            text={["Vem aí a SECOMP UFSCAR 2025"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="."
            cursorBlinkDuration={0.8}
            className="text-7xl mx-6 md:text-9xl mb-4 font-bold uppercase leading-[1.5]"
          />

          <h6 
            className={`mt-20 md:text-[48px] lg:text-8xl font-light px-16 py-12 border border-primary rounded-full leading-[1.5] transition-opacity duration-1000
            ${robotoMono.className} 
            ${show ? "opacity-100" : "opacity-0"}`}
          >
              29.09 até 03.10
          </h6>

          <Countdown />
        </div>
      </div>

      <div className="bg-black">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full overflow-hidden bg-black text-white py-8 px-4">
            <div className={`flex whitespace-nowrap ${robotoMono.className}`}>
              {Array(30).fill(null).map((_, i) => (
                <span key={i} className="px-4 text-3xl text-secondary">
                  {words[i % words.length]}
                </span>
              ))}
            </div>
          </div>

          <div id="sobre" className="w-full py-24 sm:py-40 px-16 md:px-48">
            <TextType 
              text={["SOBRE NÓS"]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              startOnVisible={true}
              cursorBlinkDuration={0.8}
              className={`text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
            />

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
              <div className="flex flex-col 2xl:flex-row justify-between items-start gap-20 2xl:gap-32 w-full mt-20">
                <div className={`flex-1 flex flex-col gap-10 text-textColor text-3xl font-light leading-[1.8] text-justify ${inter.className}`}>
                  <p>
                    A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
                    surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
                    quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de
                    se mobilizam para realizar este grande evento, no qual <b className="text-white font-[500]">pessoas de diferentes áreas relacionadas
                    são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
                    conhecimentos e inovação aos participantes!</b>
                  </p>

                  <p>
                    Nossa programação conta com atividades para todos os gostos: aprimore seus conhecimentos com <b className="text-white font-[500]">palestras</b> e <b className="text-white font-[500]">minicursos</b> práticos, 
                    teste suas habilidades em <b className="text-white font-[500]">competições</b> como o Hackathon, o Desafio de Programadores e o CTF, e relaxe com a galera na nossa 
                    tradicional <b className="text-white font-[500]">Gamenight</b>. E isso é só o começo de uma experiência inesquecível, cheia de aprendizado e conexões!
                  </p>
                </div>
                
                <div class={`flex-1 w-full grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8 ${inter.className}`}>
                  <div class="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                      <img src="/estande-magalu.png" loading="lazy" alt="Estande Magalu Cloud" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200" />

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Estande Magalu Cloud</span>
                  </div>

                  <div class="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                      <img src="/mesa-redonda.png" loading="lazy" alt="Mesa Redonda XII" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200" />

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Mesa Redonda</span>
                  </div>

                  <div class="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                      <img src="/hackathon.png" loading="lazy" alt="Hackathon XII" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200" />

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Hackathon XII</span>
                  </div>

                  <div class="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                      <img src="/equipe-xi.jpg" loading="lazy" alt="Equipe XI" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200" />

                      <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Equipe XI</span>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div id="conteudo" className="w-full py-24 sm:py-40 px-16 md:px-48">
            <TextType 
              text={["SOBRE NÓS"]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              startOnVisible={true}
              cursorBlinkDuration={0.8}
              className={`text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
            />

            <h3 className="text-white text-3xl text-center mb-32">Em criação...</h3>
          </div>

          {/* <div className="my-50" id="cronograma">
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 mb-10 text-center">ACOMPANHE NOSSO CRONOGRAMA</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <div className="w-full h-full block lg:hidden 2xl:hidden">
              <CronogramaPequeno />
            </div>

            <div className="w-full h-full hidden lg:block 2xl:hidden">
              <CronogramaMedio />
            </div>

            <div className="w-full h-full hidden 2xl:block">
              <Cronograma />
            </div>
          </div>

          <div className="mb-50" id="patrocinadores">
            <h1 className="text-white text-5xl md:text-7xl font-bold mt-4 mb-10 text-center">PATROCINADORES</h1>
            <div className="w-full md:w-6/12 h-0.5 md:mx-auto bg-gradient-to-r from-black via-white/80 to-black" />

            <Patrocinadores />
          </div> */}

          <div id="faq">
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 mb-10 text-center">FAQ</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <FAQ faqData={faqData} />
          </div>
        </div>
      </div>

      <Footer />

      {/* <FloatingButton /> */}
    </>
  );
}

