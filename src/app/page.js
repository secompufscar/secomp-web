"use client"

import {  inter, montserrat } from "@/utils/fonts"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ/FaqComponent"
import Patrocinadores from "../components/patrocinadores/page"
import Cronograma from "../components/cronograma/cronogramaGrande";
import CronogramaMedio from "../components/cronograma/cronogramaMedio";
import CronogramaPequeno from "../components/cronograma/cronogramaPequeno";

import styles from './page.module.css'

import products from "../data/products.json"
import Link from "next/link";

const faqData = [
  {
    titulo: 'Como faço para me inscrever na SECOMP?',
    texto: 'Para se inscrever na SECOMP, clique no botão "INSCREVER" na tela inicial "Home", onde será redirecionado para a página de inscrição. Após isso, basta clicar em "Nova Inscrição" e preencher o formulário com os dados solicitados.'
  },
  {
    titulo: 'Como faço para acompanhar a minha inscrição?',
    texto: 'Para acompanhar a sua inscrição na SECOMP, clique no botão "INSCREVER" na tela inicial "Home", onde será redirecionado para a página de inscrição. Após isso, basta clicar em "Acompanhar Inscrição" e digitar seu CPF e senha de acesso.'
  },
  {
    titulo: 'Como faço para redefinir a minha senha?',
    texto: 'Para redefinir a sua senha de acesso, clique no botão "INSCREVER" na tela inicial "Home", onde será redirecionado para a página de inscrição. Após isso, basta clicar em "Acompanhar Inscrição" e, logo abaixo do campo de digitar sua senha, haverá uma opção de clique "Esqueci minha senha". Após isso, basta informar seu email.'
  },
  {
    titulo: 'O que fazer caso eu não receba o email?',
    texto: 'Primeiramente, verifique a caixa de SPAM do seu provedor de email, onde pode estar. Caso não esteja, use a opção CONTATO do site informando seus dados e retornaremos assim que possível.'
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
      <div className={`${styles['gradient-container']}`}>
        <NavBar />
        <div id="home" className={`pt-10`} >
          <div className="w-10/12 m-auto">
            <div>

              <div style={{ height: "calc(100vh - 200px)" }} class=" mt-80 xl:flex-row flex-col">
                <div className={`-mt-20 text-white text-5xl flex flex-col text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${inter.className}`}>
                  <h1 className="mt-16 leading-tight md:mt-0 font-light">Em 2024, teremos mais uma edição de sucesso da</h1>
                  <h1 className="mt-16 leading-tight md:mt-0 font-light">Semana Acadêmica da Computação da UFSCar!</h1>
                  <h6 className={`py-2 mt-12 mb-12 text-9xl font-semibold tracking-[.4em] ${montserrat.className}`}>28/10 à 01/11</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="w-10/12 m-auto">
          <div id="sobre" className="py-40 h-full">
            <h1 className="text-white text-6xl font-bold mt-4 mb-10 text-center">SOBRE NÓS</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <div className="flex flex-col xl:flex-row justify-between items-center h-full w-full mt-50">
              <p className="text-white text-4xl xl:mr-12 max-w-6xl mb-30 font-extralight leading-snug text-justify">
                A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
                surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
                quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de
                se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas
                são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
                conhecimentos e inovação aos participantes.
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
            <h1 className="text-white text-6xl font-bold mt-4 mb-10 text-center">CONTEÚDO</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

          </div>

          <div className="my-50" id="cronograma">
            <h1 className="text-white text-6xl font-bold mt-4 mb-10 text-center">ACOMPANHE NOSSO CRONOGRAMA</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <div className="w-full h-320 block lg:hidden 2xl:hidden">
              <CronogramaPequeno />
            </div>

            <div className="w-full h-320 hidden lg:block 2xl:hidden">
              <CronogramaMedio />
            </div>

            <div className="w-full h-320 hidden 2xl:block">
              <Cronograma />
            </div>
          </div>

          <div className="mb-50" id="patrocinadores">
            <h1 className="text-white text-6xl font-bold mt-4 mb-10 text-center">PATROCINADORES</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <Patrocinadores />
          </div>

          <div id="faq">
            <h1 className="text-white text-6xl font-bold mt-4 mb-10 text-center">FAQ</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black" />

            <FAQ faqData={faqData} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

