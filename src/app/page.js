import Image from "next/image";
import { montserrat, inter } from "@/utils/fonts";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "./globals.css";
import "./home.page.css";

export default function Home() {
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
                            <Image src="/assets/imgs/secomp_logo.svg" alt={"Secomp logo"} width={779} height={332} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
