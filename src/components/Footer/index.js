
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import "./styles.css";

const Footer = () => {


    return (
        <>
            <div className='backgroundStyle'>
                <div className='w-full h-20 bg-black -mb-20'></div>
                <img style={{ transform: "rotate(180deg) " }} className="w-full" src="/sugwave.svg" />
            </div>

            <div className='backgroundStyle pb-40'>
            <footer className='w-full h-full lg:h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                <img className="m-auto pt-30 w-80 md:w-100" src="/secompinha.png" />


                <div className="m-auto pt-30">
                    <p className="text-white text-2xl">
                        Realização:
                    </p>

                    <img className="" src="/ufscar_vector.png" />
                </div>

                <div className="m-auto pt-30">
                    <p className="text-white text-2xl">
                        <a href='https://site.dc.ufscar.br' class="underline"> Departamento de <br /> Computação (UFSCAR)</a> - <br /> Rod. Washington Luís-Km 235-SP-310-São <br /> Carlos-SP-CEP-13565-905
                    </p>

                    <p className="text-white text-2xl mt-10">
                        Dúvidas ou sugestões? <br /> <a href='#contato' class="underline">Contate-nos</a>
                    </p>
                </div>

                <div className="m-auto pt-30 flex flex-row pb-30 md:flex-col">
                    <Link href={"https://www.instagram.com/secompufscar/"} target='_blank'>
                        < button class="inline-flex items-center justify-center mb-8 pt-2 pr-12">
                            <svg
                                class="h-10 w-10"
                                fill="white"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </button>
                    </Link>

                    <Link href={'https://www.facebook.com/secompufscar'} target='_blank'>
                        < button class="inline-flex items-center justify-center py-2 pr-12 mb-8">
                            <svg
                                class="h-10 w-10"
                                fill="white"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </button>
                    </Link>

                    <Link href={"https://www.linkedin.com/company/secomp-ufscar/"} target='_blank'>
                        < button class="inline-flex items-center justify-center py-2">
                            <svg
                                class="h-10 w-10"
                                fill="white"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </button>
                    </Link>
                    
                </div>
            </footer>
            </div>
        </>
    );
};

export default Footer;
