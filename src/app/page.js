"use client"

import { inter, oswald, robotoMono } from "@/utils/fonts"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ/FaqComponent"
import Patrocinadores from "../components/patrocinadores/page"
import Cronograma from "../components/cronograma/cronogramaGrande";
import CronogramaMedio from "../components/cronograma/cronogramaMedio";
import CronogramaPequeno from "../components/cronograma/cronogramaPequeno";
import Countdown from '../components/Countdown'

import styles from './page.module.css'
import "./gradient.css"

import products from "../data/products.json"
import Link from "next/link";
import FloatingButton from "@/components/FAB";

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

// const ArrowPrev = (clickHandler, hasPrev, label) => 
//   hasPrev ? (
//     <button type="button" onClick={clickHandler} title={label} style={{ ...arrowStyles, left: 90}}>
//       &lt;
//     </button>
//   ) : null;

// const ArrowNext = (clickHandler, hasNext, label) =>
//   hasNext ? (
//     <button type="button" onClick={clickHandler} title={label} style={{ ...arrowStyles, right: 90 }}>
//       &gt;
//     </button>
//   ) : null;

//   const arrowStyles = {
//     position: 'absolute',
//     zIndex: 2,
//     top: 'calc(50% - 15px)',
//     height: 40,
//     border: 'none',
//     color: 'white',
//     display: 'flex',
//     cursor:'pointer',
//     fontSize: '22px',
//     alignItems: 'center',
//     justifyContent: 'between',
//     background: 'transparent', 
//   };

export default function Page() {
  return (
    <>
      <NavBar />

      <div className={`gradient flex justify-center items-center md:pt-36`}>
        <div className={`px-4 pt-16 text-white text-[2.6rem] flex flex-col text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${oswald.className}`}>
          <h1 className="text-6xl mx-6 md:text-9xl mb-4 font-bold uppercase leading-[1.5]">Vem aí a SECOMP UFSCAR 2025</h1>
          <h6 className={`mt-24 md:text-[48px] lg:text-8xl font-light px-16 py-12 border border-[#4361ee] rounded-full leading-[1.5] ${robotoMono.className}`}>29.09 até 03.10</h6>

          <Countdown />
        </div>
      </div>

      <div className="bg-black">
        <div className="w-10/12 m-auto">
          <div id="sobre" className="py-40 h-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 mb-10 text-center">SOBRE NÓS</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <div className="flex flex-col xl:flex-row justify-between items-center h-full w-full mt-50">
              <p className="text-white text-4xl xl:mr-12 max-w-6xl mb-30 font-extralight leading-snug text-justify">
                A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
                surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
                quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de
                se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas
                são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
                conhecimentos e inovação aos participantes!
              </p>


              <Carousel
                showStatus={false}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showArrows={false}
                statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}
              >
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto1.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto2.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto3.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto4.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto5.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto6.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto7.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto8.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto9.jpg" />
              </Carousel>
            </div>
          </div>

          <div id="conteudo">
            <h1 className="text-white text-5xl md:text-6xl font-bold mt-4 mb-10 text-center">CONTEÚDO</h1>
            <div className="w-full h-0.5 mb-20 bg-gradient-to-r from-black via-white/80 to-black" />

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

