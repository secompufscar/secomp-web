"use client"

import { AiFillLock } from 'react-icons/ai'
import { Carousel } from 'react-responsive-carousel';

// Breakpoint prefix: sm
// Minimum width: 640px

export default function CronogramaPequeno() {
    return (
        <Carousel showStatus={false} showIndicators={false} emulateTouch preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50}>
            <div className='w-full h-auto'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[50%] text-white text-4xl text-center font-montserrat font-light">SEGUNDA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-around">
                    <div className="w-[70%] h-full flex flex-col space-y-7">
                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat">08:00</p>
                                <p className="text-2xl text-white font-montserrat">10:00</p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl">CREDENCIAMENTO</p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl">BENTO PRADO</p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[50%] text-white text-4xl text-center font-montserrat font-light">TERÇA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-around">
                    <div className="w-[70%] h-full flex flex-col space-y-7">
                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat">08:00</p>
                                <p className="text-2xl text-white font-montserrat">10:00</p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl">CREDENCIAMENTO</p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl">BENTO PRADO</p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[50%] text-white text-4xl text-center font-montserrat font-light">QUARTA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-around">
                    <div className="w-[70%] h-full flex flex-col space-y-7">
                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat">08:00</p>
                                <p className="text-2xl text-white font-montserrat">10:00</p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl">CREDENCIAMENTO</p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl">BENTO PRADO</p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[50%] text-white text-4xl text-center font-montserrat font-light">QUINTA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-around">
                    <div className="w-[70%] h-full flex flex-col space-y-7">
                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat">08:00</p>
                                <p className="text-2xl text-white font-montserrat">10:00</p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl">CREDENCIAMENTO</p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl">BENTO PRADO</p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>

                        <div className="w-full h-36 flex flex-row bg-gradient-to-b from-darkblue to-blue rounded-full">
                            <div className="w-36 h-full flex flex-col items-center justify-center space-y-1 bg-gradient-to-b from-darkblue to-lightgreen rounded-full">
                                <p className="text-2xl text-white font-montserrat"> </p>
                                <p className="text-2xl text-white font-montserrat"> </p>
                            </div>

                            <div className="grow h-full flex flex-col items-center justify-center space-y-2 md:pr-16">
                                <p className="text-lg text-white font-montserrat font-extrabold md:text-2xl"> </p>
                                <p className="text-lg text-white font-montserrat font-light italic md:text-2xl"> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto'>
                <div className="w-full h-[5%] mb-16 flex items-center justify-around">
                    <p className="w-[50%] text-white text-4xl text-center font-montserrat font-light">SEXTA-FEIRA</p>
                </div>

                <div className="w-full h-[95%] flex justify-center">
                    <div className="w-[70%] h-292.5 my-1 flex flex-col items-center justify-around bg-gradient-to-b from-blue to-darkblue rounded-[52px]">
                        <AiFillLock color="black" className='w-44 h-44' />
                    </div>
                </div>
            </div>
        </Carousel>
    );
}