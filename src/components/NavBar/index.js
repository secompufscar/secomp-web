"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { montserrat } from "@/utils/fonts";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenu] = useState(true);

    function onClickMenu() {
        setMobileMenu(!mobileMenuOpen);
    }

    function displayMobileMenu() {
        if (!mobileMenuOpen) {
            return <></>;
        }
        return (
            <div className={styles.mobile_menu}>
                <Link className="mx-2 text-2xl text-white uppercase font-bold" href={""}>
                    HOME
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className="mx-2 text-2xl text-white uppercase " href={""}>
                    SOBRE
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className="mx-2 text-2xl text-white uppercase " href={""}>
                    CRONOGRAMA
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className="mx-2 text-2xl text-white uppercase " href={""}>
                    EQUIPE
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className="mx-2 text-2xl text-white uppercase " href={""}>
                    DESCONTOS
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className="mx-2 text-2xl text-white uppercase " href={""}>
                    CONTATO
                </Link>
            </div>
        );
    }

    return (
        <header className={`${montserrat.className} bg-black bg-opacity-25 flex flex-col`}>
            <div className="bg-transparent flex items-center w-full justify-between">
                <Image
                    src="/assets/icons/secomp_logotipo.svg"
                    alt={"Logo SECOMP"}
                    className="h-12 w-min-content"
                    width={288}
                    height={44}
                />

                <div className={styles.nav_options}>
                    <Link className="mx-2 text-2xl text-white uppercase font-bold" href={"/"}>
                        HOME
                    </Link>

                    <Link className="mx-2 text-2xl text-white uppercase " href={"/"}>
                        SOBRE
                    </Link>

                    <Link className="mx-2 text-2xl text-white uppercase " href={"/"}>
                        CRONOGRAMA
                    </Link>

                    <Link className="mx-2 text-2xl text-white uppercase " href={"/"}>
                        EQUIPE
                    </Link>

                    <Link className="mx-2 text-2xl text-white uppercase " href={"/patrocinadores"}>
                        PATROCÍNIO
                    </Link>

                    <Link className="mx-2 text-2xl text-white uppercase " href={"/contato"}>
                        CONTATO
                    </Link>
                </div>

                <div className="sm:flex  sm:flex-col sm:items-center sm:w-full sm:gap-y-6 sm:py-8 sm:px-0 md:hidden">
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

            {displayMobileMenu()}
        </header>
    );
}
