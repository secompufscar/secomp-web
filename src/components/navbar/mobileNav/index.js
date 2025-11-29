'use client'

import { useState, useEffect } from "react";
import { robotoMono, inter } from "@/utils/fonts"
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/white-logo.png';

export default function MobileNav({ links }) {
    const [mobileMenuOpen, setMobileMenu] = useState(false);
    const [showLinks, setShowLinks] = useState(false);

    function onClickMenu() {
        if (mobileMenuOpen) {
            setShowLinks(false);
            setTimeout(() => setMobileMenu(false), 300); 
        } else {
            setMobileMenu(true);
            setTimeout(() => setShowLinks(true), 300); 
        }
    }

    return (
        <>  
            {/* Overlay escuro */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ease-in-out" />
            )}

            <header
                className={`flex lg:hidden flex-col fixed z-50 w-full py-4 px-8
                    ${mobileMenuOpen ? "bg-black" : "bg-black/10 backdrop-blur-md"}`}
            >
                <div className="flex items-center w-full justify-between py-2">
                    <Link href={"#home"}>
                        <div className="w-full opacity-90">
                            <h2 className={`text-white text-[16px] font-bold uppercase tracking-wider ${inter.className}`}>Secomp UFSCar</h2>
                        </div>
                    </Link>

                    <button onClick={onClickMenu}>
                        <Image
                            src={`/assets/icons/${mobileMenuOpen ? "close_icon" : "menu_icon"}.svg`}
                            alt={"toggle menu icon"}
                            width={30}
                            height={30}
                        />
                    </button>
                </div>

                {/* Links só aparecem quando showLinks = true */}
                {mobileMenuOpen && (
                    <div
                        className={`flex flex-col items-start w-full gap-6 pb-8 mt-8 transition-opacity duration-300 ease-in-out
                        ${showLinks ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                    >
                        {links.map((nav, index) => (
                            <Link
                                key={index}
                                onClick={onClickMenu}
                                className={`${robotoMono.className} w-full tracking-widest py-2 text-xl text-white uppercase`}
                                href={nav.href}
                            >
                                {nav.name}
                            </Link>
                        ))}
                    </div>
                )}
            </header>
        </>
    )
}
