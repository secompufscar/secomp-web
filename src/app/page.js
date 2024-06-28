"use client"

import Image from "next/image";

import { useEffect } from 'react'

import { montserrat, inter } from "@/utils/fonts"
import { MagicMotion } from "react-magic-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Content from "../components/content"
import FAQ from "../components/FAQ/FaqComponent"
import Line from "../components/line"
import Contato from "../components/contato/page"
import Patrocinadores from "../components/patrocinadores/page"
import Cronograma from "../components/cronograma/page";

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

export default function Page() {
  return (
    <>

      <NavBar />


      <div id="home" className="pt-50" style={{ backgroundColor: "#000", backgroundImage: "url('/brilho.svg')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundPosition: "center" }}>
        <div className="w-10/12 m-auto">
          <div>

            <div style={{ height: "calc(100vh - 200px)" }} class="flex items-center justify-between h-full xl:flex-row flex-col">
              <div className={`-mt-20 text-white text-5xl flex flex-col text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${inter.className}`}>
                <h1 className="mt-16 leading-tight md:mt-0 font-extralight">A primeira etapa do processo seletivo da Semana da Computação na UFSCar está disponível!</h1>
                <h6 className="py-2 mt-12 mb-12 text-4xl font-bold">25/03 à 06/04</h6>

                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMIvT2QPPrK7PCNgYJLeWUSfokXpQLQWpQPuITVOXsj87iFg/viewform">
                  <button className={`${montserrat.className} font-bold mb-16`} style={{
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    backgroundColor: '#51b795',
                    padding: '2rem 7rem',
                    borderRadius: '500rem',
                    color: '#0a0a0a',
                    textTransform: 'uppercase',
                    boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset',
                    backdropFilter: 'blur(10px)'
                  }}>
                    INSCREVER
                  </button>
                </Link>
              </div>

              <img className="h-800 mb-64 md:mb-0 hidden md:block" src="/assets/imgs/secomp_logo.svg" alt="Secomp logo" />
            </div>
          </div>
        </div>

        <img className="w-full" src="/main-wave.svg" />
      </div>

      <div className="bg-black">
        <div className="w-10/12 m-auto">
          <div id="sobre" className="py-40 h-full">
            <Line isLeft text='SOBRE' />

            <div className="flex flex-col xl:flex-row justify-between items-center h-full w-full mt-50">
              <p className="text-white text-4xl xl:mr-12 max-w-6xl mb-30 font-extralight leading-snug">A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
                surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
                quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de Computação
                se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas
                são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
                conhecimentos e inovação aos participantes.</p>

              <Carousel showStatus={false} autoPlay infiniteLoop statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}>
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto1.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto2.jpg" />
                <img className="max-w-full md:max-w-4xl rounded-3xl" src="/foto3.jpg" />
              </Carousel>
            </div>
          </div>

          <div id="conteudo">
            <Line text='CONTEÚDO' />

            <div className="hidden md:block">
              <div className="mt-50 mb-30 grid grid-cols-1 md:grid-cols-2 grid-cols-1 xl:md:grid-cols-4">
                {products.map((product, index) => (
                  <div className="mb-8 m-auto">
                    <div className="mb-8">
                      <Content product={product} number={index} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="mt-50 mb-30 block md:hidden">
              <Carousel showStatus={false} showIndicators={false} centerMode centerSlidePercentage={80} autoPlay infiniteLoop statusFormatter={(currentItem, total) => `${currentItem} de ${total}`}>
                {products.map((product, index) => (
                  <div className="mb-8 m-auto">
                    <div className="mb-8">
                      <Content product={product} number={index} />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div  className="my-50" id="cronograma">
            <h1 className="text-white text-6xl font-montserrat pb-10 text-center">ACOMPANHE NOSSO CRONOGRAMA</h1>
            <div className="w-full h-0.5 mb-24 bg-gradient-to-r from-black via-white/80 to-black"/>

            <Cronograma />
          </div>

          <div className="mb-50" id="patrocinadores">
            <Line isLeft text='PATROCINADORES' />

            <Patrocinadores />
          </div>

          <div className="mb-30" id="contato">
            <Line isLeft={false} text='CONTATO' />

            <Contato />
          </div>

          <div id="faq">
            <Line isLeft text='FAQ' />

            <FAQ faqData={faqData} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
