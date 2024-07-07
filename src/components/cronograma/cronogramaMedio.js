"use client"

import { AiFillLock } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';

// Breakpoint prefix: lg 
// Minimum width: 1024px

export default function CronogramaMedio() {
    return (
        <Carousel showStatus={false} showIndicators={false} emulateTouch>
            <div className='w-full h-auto px-6'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">SEGUNDA-FEIRA</p>
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">TERÇA-FEIRA</p>
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">QUARTA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-around">
                    <div className="w-[25%] h-full flex flex-col space-y-7">
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

                    <div className="w-[25%] h-full flex flex-col space-y-7">
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

                    <div className="w-[25%] h-full flex flex-col space-y-7">
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
                </div>
            </div>

            <div className='w-full h-auto px-6'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-center space-x-80">
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">QUINTA-FEIRA</p>
                    <p className="w-[18%] text-white text-4xl text-center font-montserrat font-light lg:text-3xl">SEXTA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-center space-x-52">
                    <div className="w-[25%] h-full flex flex-col space-y-7">
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

                    <div className="w-[25%] h-300 my-1.5 flex flex-col items-center justify-around bg-gradient-to-b from-blue to-darkblue rounded-[52px]">
                        <AiFillLock color="black" className='w-44 h-44' />
                    </div>
                </div>
            </div>
        </Carousel>
    );
}