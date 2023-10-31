import Image from "next/image";
import { montserrat, inter } from "@/utils/fonts";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Content from "../components/content";

import "./globals.css";
import "./home.page.css";
import Line from "./contato/line";

const products =
  [
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: true
    },
    {
      curso: "Work  Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: true
    },
  ]

export default function Home() {
  function teste() {
    console.log('eeeeeee')
  }
  return (
    <>
      <div className="bg-black">
        <div className="gradient-container">
          <NavBar />

          <div class="flex flex-col sm:flex-col-reverse md:flex-row-reverse items-center justify-evenly py-8 px-4">
            <div className="flex flex-grow-4 justify-center items-center  ">
              <Image className="w-1500" src="/assets/imgs/secomp_logo.svg" alt="Secomp logo" width={779} height={332} />
            </div>

            <div className={`text-white text-4xl flex flex-col text-center justify-center items-center flex-1 flex-grow flex-shrink-4 ${inter.className}`}>
              <h5>O aguardado retorno da Semana da Computação na UFSCar está chegando!</h5>
              <h6 className="py-2 mt-4">27/11/2023 à 01/12/2023</h6>

              <div className="justify-center mt-8">
                {/* Pedir ajuda para trocar aqui */}
                <button className={`${montserrat.className}`} style={{
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  backgroundColor: '#51b795',
                  padding: '1rem 3rem',
                  borderRadius: '500rem',
                  color: '#0a0a0a',
                  textTransform: 'uppercase',
                  boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset',
                  backdropFilter: 'blur(10px)'
                }}>
                  Saiba mais
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>


      <div className="bg-black py-40">
        <Line color='white' text='Sobre' position='left' textSize={"4xl"} />

        <div className="flex flex-col md:flex-row justify-evenly items-center w-10/12 md:w-9/12 h-max m-auto max-w-3xl md:max-w-none">
          <div className="h-min w-11/12 mb-20 md:mb-0  xl:w-5/12">
            <p className="text-white text-2xl mr-10">A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
              surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
              quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de Computação
              se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas
              são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
              conhecimentos e inovação aos participantes.</p>
          </div>

          <div className="h-90 w-11/12  xl:w-5/12 bg-gray rounded-3xl"></div>
        </div>
      </div>

      <div className="bg-black py-40">
        <Line color='white' text='Conteúdo' position='left' textSize={"4xl"} />

        <div className="grid grid-cols-2   w-10/12 md:w-9/12 h-max m-auto max-w-3xl md:grid-cols-4 md:max-w-none">
          {products.map((product, index) => (
            <div className="mb-8 w-full flex justify-evenly items-center">
              <Content product={product} number={index} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
