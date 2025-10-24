"use client"

import { inter, robotoMono, oswald } from "@/utils/fonts"
import CustomButton from "../buttons/buttons";

function Downloads() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h1 className={`text-[5rem] xsm:text-[7rem] lg:text-[9rem] w-[90%] text-textColor font-bold text-center uppercase leading-[1.3] ${oswald.className}`}>
            O evento na palma da sua mão
        </h1>

        <div className="mb-20 mt-14">
          <p className={`text-textColor text-[1.75rem] text-center font-extralight leading-[1.8] ${inter.className}`}>
            Instale o app e tenha acesso à programação completa, notificações e muito mais, tudo em um só lugar.
          </p>
        </div>

        <div className={`flex flex-row flex-wrap justify-center gap-8 text-2xl text-black`}>
          <CustomButton text="Acessar na web" href="https://app.secompufscar.com.br/" />
          <CustomButton text="Baixar apk" href="https://expo.dev/accounts/secomp_ti/projects/secomp/builds/88df7881-6015-4405-bb2f-ad991d0879de" />
        </div>
    </div>
  );
}

export default Downloads;