'use client'

import { useState, useEffect } from "react";
import { MagicMotion } from "react-magic-motion";
import { robotoMono, inter } from "@/utils/fonts"
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/white-logo.png';

export function StickyNav({ links, sticky }) {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <MagicMotion>
            {/* 🔹 alterado de fixed para sticky */}
            <header className={`hidden lg:block fixed top-0 left-0 z-50 w-full`}>
                <div className={`flex w-full py-3 justify-between transition-all duration-300 items-center px-12 ${scrolled ? "bg-black/5" : ""} backdrop-blur-md`}>
                    <Link className={`text-white text-[16px] font-bold uppercase tracking-wider ${inter.className} hover:opacity-80 transition-opacity duration-300 `} href={"/"}>
                        Secomp UFSCar
                    </Link>

                    <div className="my-5 mb-6">
                        <div>
                            {links.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.href}
                                className={`${robotoMono.className} md:ml-16 text-[15px] text-[#D3D3D3] tracking-widest uppercase hover:text-white transition-color duration-300`}
                            >
                                {nav.name}
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
        </MagicMotion>
    );
}
