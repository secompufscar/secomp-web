'use client'

import { useState, useEffect } from "react";
import { MagicMotion } from "react-magic-motion";
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
            <header className="hidden lg:block fixed top-0 left-0 z-50 w-full bg-transparent">
                <div className={`flex w-full py-6 justify-between transition-all duration-300 items-center px-12 bg-black/20 backdrop-blur-md`}>
                    <Link href={"/"}>
                        <div className="max-w-[36px] w-full">
                            <Image
                                src={Logo}
                                alt="Logo SECOMP"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="my-5 mb-6">
                        <div>
                            {links.map((nav, index) => (
                            <Link
                                key={index}
                                href={nav.href}
                                className="md:ml-16 text-2xl font-light text-[#D3D3D3] uppercase hover:text-white transition-all duration-200"
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
