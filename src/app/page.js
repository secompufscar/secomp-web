"use client"

import { useState, useEffect } from "react";
import { inter, oswald, robotoMono } from "@/utils/fonts"
import Lenis from "@studio-freight/lenis";
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

const conteudo = [
  "Palestras",
  "Minicursos",
  "Competições",
  "Mesa redonda",
  "Flash Talks",
  "Gamenight"
];

export default function Page() {
  const [show, setShow] = useState(false);
  const words = ["SECOMP XIII", "•", "UFSCAR", "•"];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.05, wheelMultiplier: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

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

          <div id="sobre" className="w-full pt-24 sm:pt-40 px-16 md:px-48">
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
                <div className={`flex-1 flex flex-col gap-10 text-textColor text-[1.75rem] font-extralight leading-[1.8] text-justify ${inter.className}`}>
                  <p>
                    A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
                    surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
                    quanto de entusiastas. A cada ano, os alunos se mobilizam para realizar este grande evento, no qual  
                    <b className="text-secondary"> pessoas de diferentes áreas relacionadas
                    são convidadas a apresentar, discutir e debater</b> experiências e novidades que trarão informações,
                    conhecimentos e inovação aos participantes!
                  </p>

                  <p>
                    Nossa programação conta com atividades para todos os gostos: aprimore seus conhecimentos com <b className="text-secondary">palestras</b> e <b className="text-secondary">minicursos</b> práticos, 
                    teste suas habilidades em <b className="text-secondary">competições</b> como o Hackathon, o Desafio de Programadores e o CTF, e relaxe com a galera na nossa 
                    tradicional <b className="text-secondary">Gamenight</b>. E isso é só o começo de uma experiência inesquecível, cheia de aprendizado e conexões!
                  </p>
                </div>
                
                <div class={`flex-1 2xl:mt-3 ${inter.className}`}>
                  <img src="/mesa-redonda.png" loading="lazy" alt="Mesa Redonda XII" class="h-full w-full rounded-2xl object-cover object-center" />
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div id="conteudo" className="w-full mt-36 md:mt-64 px-16 md:px-48">
            <TextType 
              text={["CONTEÚDO"]}
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
              <div className="w-full mt-20 grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {conteudo.map((text, i) => (
                  <div 
                    key={i} 
                    className={`
                      w-full aspect-square border border-white/20 rounded-2xl flex items-end justify-start p-8 
                      text-white text-xl ${robotoMono.className} transition-all duration-300 hover:scale-105
                    `}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </div>

          <div id="patrocinadores" className="w-full mt-36 md:mt-64 px-16 md:px-48">
            <div className="flex flex-row flex-wrap items-center gap-12">
              <TextType 
                text={["PATROCINADORES"]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="."
                startOnVisible={true}
                cursorBlinkDuration={0.8}
                className={`text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
              />

              <a href="mailto:coordenacao@secompufscar.com.br">
                <p 
                  className={`
                    min-w-[200px] py-7 px-10 text-secondary text-center border border-secondary rounded-full text-xl md:text-2xl uppercase 
                    ${robotoMono.className} transition-all duration-300 hover:scale-105
                  `}
                >
                  Começar parceria
                </p>
              </a>
            </div>

            <p className={`mt-12 text-white text-[1.75rem] font-extralight ${inter.className}`}>Empresas que confiam em nós e fazem o evento acontecer</p>

            <Patrocinadores />
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
          */}

          <div id="faq" className="w-full mt-36 md:mt-64 px-16 md:px-48">
            <TextType 
              text={["FAQ"]}
              typingSpeed={80}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
              startOnVisible={true}
              cursorBlinkDuration={0.8}
              className={`text-white text-5xl md:text-7xl font-bold text-start ${oswald.className}`}
            />

            {/* <FAQ faqData={faqData} /> */}
          </div>

          <div id="contato" className="flex items-center justify-end py-24 w-full text-black mt-36 md:mt-64 px-8 sm:px-16 bg-[url('/estande-magalu.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[480px] w-full h-full bg-white p-16 rounded-xl">
              <TextType 
                text={["CONTATO"]}
                typingSpeed={80}
                pauseDuration={1500}
                cursorCharacter=""
                startOnVisible={true}
                cursorBlinkDuration={0.8}
                textColors={"#0a0a0a"}
                className={`text-4xl md:text-5xl font-bold text-start ${oswald.className}`}
              />

              <p className={`mt-8 text-black text-[1.6rem] font-extralight ${inter.className}`}>Entre em contato com a nossa equipe</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>coordenacao@secompufscar.com.br</p>

              <p className={`mt-12 text-black text-[1.6rem] font-extralight ${inter.className}`}>Você pode nos encontrar aqui</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>Departamento de Computação - DC</p>
              
              <p className={`mt-12 text-black text-[1.6rem] font-extralight ${inter.className}`}>UFSCar</p>
              <p className={`mt-3 text-[#000] text-[1.6rem] break-words ${robotoMono.className}`}>Rodovia Washington Luís, km 235, São Carlos - SP, CEP 13565-905</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* <FloatingButton /> */}
    </>
  );
}

