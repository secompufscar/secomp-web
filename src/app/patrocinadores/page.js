import React from "react";
import LogoSecomp from "../../assets/logo-secomp.svg";
import LogoSecompOutline from "../../assets/logo-secomp-outline.svg";
import Image from "next/image";

export default function Patrocinadores(){
  return(
    <body className="bg-[#0A0A0A] w-full h-full px-[8%]">
      <div className="mt-[15rem]">
        <div className="flex flex-col gap-y-1 ">
          <p className="text-4xl text-white font-montserrat">NOSSOS</p>
          <p className="text-6xl font-semibold text-white font-montserrat">PATROCINADORES</p>
        </div>

        <p className="w-auto text-2xl mt-12 text-white">A SECOMP UFSCar acontece graças ao apoio dos nossos patrocinadores. Eles não apenas compartilham nossa paixão por disseminar conhecimento, mas também são essenciais para tornar o evento educativo, inovador e enriquecedor. </p>
        
        <button className="px-7 py-4 bg-[#B4C5FF] rounded-3xl mt-8">
          <p className="text-[#0A0A0A] font-bold font-montserrat">SEJA UM PATROCINADOR</p>
        </button>
      </div>

      <div className="mt-40">
        <div>
          <p className="font-normal text-3xl text-white font-montserrat">APOIO DIAMANTE</p>
          <div className="w-full h-[5px] bg-[#51B795] shadow-md mt-7"> 
            <div className="w-full h-[5px] bg-[#51B795] blur-md "/>
          </div>

          <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

          </div>
        </div>

        <div>
          <p className="font-normal text-3xl text-white font-montserrat text-right">APOIO OURO</p>
          <div className="w-full h-[5px] bg-[#586DB2] shadow-md mt-7"> 
            <div className="w-full h-[5px] bg-[#586DB2] blur-md "/>
          </div>

          <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-normal text-3xl text-white font-montserrat">APOIO PRATA</p>
          <div className="w-full h-[5px] bg-[#51B795] shadow-md mt-7"> 
            <div className="w-full h-[5px] bg-[#51B795] blur-md "/>
          </div>

          <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>
          </div>
        </div>


        <div>
          <p className="font-normal text-3xl text-white font-montserrat text-right">APOIADORES</p>
          <div className="w-full h-[5px] bg-[#586DB2] shadow-md mt-7"> 
            <div className="w-full h-[5px] bg-[#586DB2] blur-md "/>
          </div>

          <div className="mt-22 flex flex-row justify-center gap-x-[5%] max-md:flex-col max-md:gap-y-7">
            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecomp}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>

            <div className="flex flex-col items-center gap-y-12">
              <Image 
                alt="Logo da empresa"
                src={LogoSecompOutline}
              />
              <p className="text-3xl text-white">SECOMP</p>
            </div>
          </div>
        </div>


      </div>
    </body>
  )
}