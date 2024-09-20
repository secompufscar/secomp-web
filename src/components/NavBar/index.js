"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { MagicMotion } from "react-magic-motion";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    function onClickMenu() {
        setMobileMenu(!mobileMenuOpen);
    }

    const navLinks = [
        {name: 'HOME', href: '/'},
        {name: 'SOBRE', href: '/#sobre'},
        {name: 'CONTEÚDO', href: '/#conteudo'},
        {name: 'PATROCÍNIO', href: '/#patrocinadores'},
        {name: 'EQUIPE', href: '/equipe'},
        {name: 'CONTATO', href: '/#contato'},
        {name: 'FAQ', href: '/#faq'},
    ]

    return (
        <MagicMotion>
            <header style={{ backgroundColor: "#000" }} className={`flex flex-col fixed z-50 w-full`}>
                <div className="flex items-center w-full justify-between">
                    <Link href={"#home"}>
                        <Image
                            src="/logo2024.png"
                            alt={"Logo SECOMP"}
                            className="h-12 w-min-content"
                            fill
                        />
                    </Link>

                    <div className={styles.nav_options}>
                    {navLinks.map(nav => ( 
                        <Link className="mx-8 text-2xl text-white uppercase" href={nav.href}>
                            {nav.name}
                        </Link>
                    ))}                        
                    </div>

                    <div className="sm:flex sm:flex-col sm:items-center lg:hidden">
                        <button onClick={onClickMenu}>
                            <Image
                                src={`/assets/icons/${mobileMenuOpen ? "close_icon" : "menu_icon"}.svg`}
                                alt={"toggle menu icon"}
                                width={32}
                                height={32}
                            />
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (

                    <div className={styles.mobile_menu}>
                        {navLinks.map((nav, index) => ( 
                            <>
                                <Link onClick={onClickMenu} className={`mx-2 text-2xl text-white uppercase ${!index && 'font-bold'}`} href={nav.href}>
                                    {nav.name}
                                </Link>
                                {navLinks.length - 1 !== index && <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />}
                            </>
                        ))}
                    </div>

                )}
            </header>
        </MagicMotion>
    );
}
