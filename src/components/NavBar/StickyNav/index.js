'use client'
import { useState, useEffect } from "react";

import { montserrat } from "@/utils/fonts"

import Image from "next/image"; 

import Link from "next/link";
import styles from "./styles.module.css";
import Logo from '/public/logo-xii.svg';
import { MagicMotion } from "react-magic-motion";


export function StickyNav({links, sticky}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrool = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 0);
        }
        handleScrool();
        window.addEventListener("scroll", handleScrool)

        return () => {
            window.removeEventListener("scroll", handleScrool)
        }
    }, [])

    const fixedStyle = "flex flex-col items-center w-full justify-between"
    const stickyStyle = "flex items-center w-full justify-between px-12 bg-black/30 backdrop-blur-md"

    return (
        <MagicMotion>
            <header className={`hidden sm:block top-0 ${montserrat.className} fixed z-50 top-0 w-full`} >
                <div className={sticky || scrolled ? stickyStyle : fixedStyle}>
                        <Link href={"#home"}>
                            <div className={`w-full ${styles[`logo-container-${sticky || scrolled ? 'sticky' : 'fixed'}`]}`}>
                                <Image  
                                    src={Logo}
                                    alt={"Logo SECOMP"}
                                    priority
                                />
                            </div>
                        </Link>

                    <div className={!scrolled && `${styles['nav-container']} mb-6 `}>
                        <div>
                            {links.map(nav => ( 
                                <Link className={`md:mx-8 sm:mx-4 text-2xl font-light text-white uppercase ${styles.link}`} href={nav.href}>
                                    {nav.name}
                                </Link>
                            ))} 
                        </div>                     
                    </div>
                </div>
            </header>
        </MagicMotion>
    )
}