import Image from "next/image";
import { montserrat, inter } from "@/utils/fonts";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "./globals.css";
import "./home.page.css";
import Line from "./contato/line";

export default function Home() {
  function teste(){
    console.log('eeeeeee')
  }
  return (
    <>
      <div className="home-container">
        <div className="gradient-container">
          <NavBar />

          <div className="about-container">
            <div className={`info-container ${inter.className}`}>
              <h5>O aguardado retorno da Semana da Computação na UFSCar está chegando!</h5>
              <h6>27/11/2023 à 01/12/2023</h6>

              <div className="button-container">
                <button className={`${montserrat.className} btn`}>Saiba mais</button>
              </div>
            </div>

            <div className="logo-container">
              <Image src="/assets/imgs/secomp_logo.svg" alt="Secomp logo" width={779} height={332} />
            </div>
          </div>
        </div>
      </div>

      <Image className="wave-img" src="/assets/imgs/wave_1.svg" width={900} height={100} />
      <div className="bg-black py-40">
        <Line color='white' text='sobre' position='left' textSize={"4xl"}/>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-10/12 md:w-9/12 h-max m-auto max-w-3xl md:max-w-none">
          <div className="h-min w-11/12 mb-20 md:mb-0  xl:w-5/12 ">
            <p className="text-white text-2xl mr-10">A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar)
              surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica
              quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de Computação
              se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas
              são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações,
              conhecimentos e inovação aos participantes.</p>
          </div>
          <div className="h-90 w-11/12  xl:w-5/12 bg-gray rounded-3xl">
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
