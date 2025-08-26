"use client"

import { useState, useEffect } from "react";
import { inter, oswald, robotoMono } from "@/utils/fonts"
import { Presentation, BookOpen, Trophy, Users, Mic, Gamepad2 } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import AnimatedContent from "@/components/animation/animatedContent";
import TextType from "@/components/text/textType";
import SpotlightCard from "@/components/animation/spotlight";
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
    texto: 'Para se inscrever na SECOMP, cadastre-se em nosso aplicativo. Após criar sua conta, basta acessar a tela inicial e clicar no botão de inscrição para participar do evento.'
  },
  {
    titulo: 'Como faço para me inscrever em competições?',
    texto: 'As inscrições para as competições devem ser feitas por meio dos formulários disponíveis em nosso Instagram. Fique atento em nossas redes sociais!'
  },
  {
    titulo: 'Como faço para me inscrever em minicursos?',
    texto: 'A inscrição nos minicursos deve ser feita diretamente pelo nosso aplicativo. Lembre-se de estar previamente registrado no evento e de trazer 1 kg de alimento não perecível no dia da atividade.'
  },
  {
    titulo: 'Como garantir o meu certificado de participação?',
    texto: 'Para receber o seu certificado de participação na SECOMP, é necessário estar inscrito no evento e registrar pelo menos 75% de presença nas atividades. Após o evento, o certificado será enviado para o e-mail cadastrado. Certifique-se de preencher todos os dados corretamente no momento da inscrição.'
  },
  {
    titulo: 'Estou interessado em patrocinar a SECOMP! O que devo fazer?',
    texto: 'Se você deseja se tornar um patrocinador da SECOMP, entre em contato conosco através do e-mail. Forneceremos todas as informações sobre as oportunidades de patrocínio, benefícios e como sua empresa pode apoiar o evento. Não perca a chance de fazer parte desta experiência!'
  },
];

const conteudo = [
  { 
    label: "Palestras", 
    icon: <Presentation size={36} />, 
    text: "Aprenda com especialistas sobre tendências e inovações em computação." 
  },
  { 
    label: "Minicursos", 
    icon: <BookOpen size={36} />, 
    text: "Atividades práticas para desenvolver novas habilidades técnicas." 
  },
  { 
    label: "Competições", 
    icon: <Trophy size={36} />, 
    text: "Teste seus conhecimentos em desafios práticos junto com sua equipe!" 
  },
  { 
    label: "Mesa Redonda", 
    icon: <Users size={36} />, 
    text: "Discussões abertas com profissionais e pesquisadores da área." 
  },
  { 
    label: "Flash Talks", 
    icon: <Mic size={36} />, 
    text: "Apresentações rápidas e dinâmicas sobre diversos temas da computação." 
  },
  { 
    label: "Gamenight", 
    icon: <Gamepad2 size={36} />, 
    text: "Momento de descontração com jogos e muita interação entre os participantes." 
  },
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
            className={`mt-16 md:mt-20 md:text-[48px] lg:text-8xl font-light px-16 py-12 border border-primary rounded-full leading-[1.5] transition-opacity duration-1000
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
                <span key={i} className="px-4 text-2xl text-secondary">
                  {words[i % words.length]}
                </span>
              ))}
            </div>
          </div>

          <div id="sobre" className="w-full pt-24 sm:pt-40 px-8 sm8:px-16 lg:px-48">
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

            <div className="flex flex-col 2xl:flex-row justify-between items-start gap-16 md:gap-24 2xl:gap-40 w-full mt-16 md:mt-20">
              <AnimatedContent
                distance={70}
                direction="vertical"
                reverse={false}
                duration={1.5}
                initialOpacity={0.6}
                animateOpacity
                scale={1.01}
                threshold={0.1}
                delay={0.1}
              >
                <div className={`flex-1 flex flex-col gap-16 text-textColor text-[1.75rem] font-extralight leading-[1.8] sm8:text-justify ${inter.className}`}>
                  <p>
                    A Semana Acadêmica da Computação da UFSCar (SECOMP) nasceu com o <b className="text-secondary">propósito de trazer temas relevantes para a comunidade acadêmica 
                    e para entusiastas da área</b>. Todos os anos, estudantes se mobilizam para realizar esse grande evento, que reúne convidados de diferentes 
                    áreas para compartilhar experiências, discutir novidades e promover inovação.
                  </p>

                  <img src="/mesa-redonda.png" loading="lazy" alt="Participantes no Auditório" class="min-h-[260px] max-h-[380px] h-full w-full rounded-xl object-cover object-center" />
                </div>
              </AnimatedContent>
              
              <AnimatedContent
                distance={70}
                direction="vertical"
                reverse={false}
                duration={1.5}
                initialOpacity={0.6}
                animateOpacity
                scale={1.01}
                threshold={0.1}
                delay={0.3}
              >
                <div className={`flex-1 flex flex-col gap-16 text-textColor text-[1.75rem] font-extralight leading-[1.8] sm8:text-justify ${inter.className}`}>
                  <p>
                    A programação é diversa e feita para todos os gostos: <b className="text-secondary">palestras</b> e <b className="text-secondary"> minicursos </b> 
                    práticos para ampliar conhecimentos, <b className="text-secondary">competições</b> como Hackathon, Desafio de Programadores e CTF para testar habilidades, 
                    além da tradicional <b className="text-secondary">Gamenight</b> para relaxar e se divertir. Uma experiência completa, cheia de aprendizado, desafios e novas conexões!
                  </p>

                  <img src="/hackathon.png" loading="lazy" alt="Participantes no Auditório" class="min-h-[260px] max-h-[380px] h-full w-full rounded-xl object-cover object-center" />
                </div>
              </AnimatedContent>
            </div>
          </div>

          <div id="conteudo" className="w-full mt-36 md:mt-64 px-8 sm8:px-16 lg:px-48">
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
              distance={70}
              direction="vertical"
              reverse={false}
              duration={1.5}
              initialOpacity={0.6}
              animateOpacity
              scale={1.01}
              threshold={0.1}
              delay={0.1}
            >
              <div className="w-full mt-16 md:mt-20 grid grid-cols-1 sm8:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
                {conteudo.map((item, i) => (            
                  <SpotlightCard 
                    key={i} 
                    className={`
                      group w-full sm9:aspect-square border border-white/20 rounded-2xl flex flex-col items-start justify-end p-[40px] sm9:p-8 
                      text-white text-2xl ${robotoMono.className} transition-all duration-300 hover:scale-105 hover:border-secondary/80
                    `} 
                    spotlightColor="rgba(0, 170, 255, 0.3)"
                  >
                    <div className="text-secondary">{item.icon}</div>
                    <span className="mt-6">{item.label}</span>
                    
                    <p
                      className={`
                        text-textColor font-light leading-[1.8] ${inter.className}
                        mt-8 
                        sm:mt-0 sm:max-h-0 sm:opacity-0 sm:translate-y-2 sm:overflow-hidden
                        sm:transition-all sm:duration-700
                        sm:group-hover:mt-6 sm:group-hover:max-h-40 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                      `}
                    >
                      {item.text}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </AnimatedContent>
          </div>

          <div id="patrocinadores" className="w-full mt-36 md:mt-64 px-8 sm8:px-16 lg:px-48">
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

          <div id="faq" className="w-full mt-36 md:mt-64 px-8 sm8:px-16 lg:px-48">
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

            <FAQ faqData={faqData} /> 
          </div>

          <div id="contato" className="flex items-center justify-end py-24 w-full text-black mt-32 md:mt-64 px-8 sm:px-16 bg-[url('/estande-magalu.png')] bg-cover bg-center bg-no-repeat">
            <div className="max-w-[460px] w-full h-full bg-white p-[3.7rem] sm:p-20 rounded-xl">
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

