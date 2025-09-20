"use client"

import { inter, robotoMono, oswald } from "@/utils/fonts"
import CustomButton from "../buttons/buttons";

function Downloads() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className={`text-[5rem] xsm:text-[7rem] lg:text-[9rem] w-[90%] text-[#F8F8F8] font-bold text-center uppercase leading-[1.3] ${oswald.className}`}>
            INSTALE NOSSO APLICATIVO
        </h1>

        <div className={`flex flex-row flex-wrap justify-center gap-8 mt-16 ${robotoMono.className} text-2xl text-[#0A0A0A]`}>
          <CustomButton text="Acessar na web" href="" className=""/>
          <CustomButton text="Baixar apk" href="" />
        </div>
    </div>
  );
}

export default Downloads;