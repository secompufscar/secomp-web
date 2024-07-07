"use client"

import { AiFillLock } from 'react-icons/ai'

// Breakpoint prefix: 2xl 
// Minimum width: 1536px

export default function Cronograma() {
    return (
        <div className='w-full h-full'>
            <div className="w-full h-[5%] mb-10 flex items-center justify-around">
                <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light">SEGUNDA-FEIRA</p>
                <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light">TERÇA-FEIRA</p>
                <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light">QUARTA-FEIRA</p>
                <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light">QUINTA-FEIRA</p>
                <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light">SEXTA-FEIRA</p>
            </div>

            <div className="w-full h-[95%] flex justify-around">
                <div className="w-[18%] h-full flex flex-col justify-around">
                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat">08:00</p>
                            <p className="text-2xl text-white font-montserrat">10:00</p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold 2xl:text-xl">CREDENCIAMENTO</p>
                            <p className="text-lg text-white font-montserrat font-light italic 2xl:text-xl">BENTO PRADO</p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>
                </div>

                <div className="w-[18%] h-full flex flex-col justify-around">
                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat">08:00</p>
                            <p className="text-2xl text-white font-montserrat">10:00</p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold 2xl:text-xl">CREDENCIAMENTO</p>
                            <p className="text-lg text-white font-montserrat font-light italic 2xl:text-xl">BENTO PRADO</p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>
                </div>

                <div className="w-[18%] h-full flex flex-col justify-around">
                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat">08:00</p>
                            <p className="text-2xl text-white font-montserrat">10:00</p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold 2xl:text-xl">CREDENCIAMENTO</p>
                            <p className="text-lg text-white font-montserrat font-light italic 2xl:text-xl">BENTO PRADO</p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>
                </div>

                <div className="w-[18%] h-full flex flex-col justify-around">
                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat">08:00</p>
                            <p className="text-2xl text-white font-montserrat">10:00</p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold 2xl:text-xl">CREDENCIAMENTO</p>
                            <p className="text-lg text-white font-montserrat font-light italic 2xl:text-xl">BENTO PRADO</p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>

                    <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                        <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                            <p className="text-2xl text-white font-montserrat"> </p>
                            <p className="text-2xl text-white font-montserrat"> </p>
                        </div>

                        <div className="grow h-full flex flex-col items-center justify-center space-y-2">
                            <p className="text-lg text-white font-montserrat font-extrabold"> </p>
                            <p className="text-lg text-white font-montserrat font-light italic"> </p>
                        </div>
                    </div>
                </div>

                <div className="w-[18%] h-[98%] my-4 flex flex-col items-center justify-around bg-gradient-to-b from-blue to-darkblue rounded-[52px]">
                    <AiFillLock color="black" className='w-44 h-44' />
                </div>
            </div>
        </div>
    );
}