"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { montserrat } from "@/utils/fonts";
import { MagicMotion } from "react-magic-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    function onClickMenu() {
        setMobileMenu(!mobileMenuOpen);
    }

    return (
        <MagicMotion>
            <header style={{ backgroundColor: "#000" }} className={`flex flex-col fixed z-50 w-full`}>
                <div className="flex items-center w-full justify-between">
                    <Link href={"#home"}>
                        <img
                            src="/assets/icons/secomp_logotipo.svg"
                            alt={"Logo SECOMP"}
                            className="h-12 w-min-content"
                            // width={288}
                            // height={44}
                        />
                    </Link>

                    <div className={styles.nav_options}>
                        <Link className="mx-8 text-2xl text-white uppercase" href={"/"}>
                            HOME
                        </Link>

                        <Link className="mx-8 text-2xl text-white uppercase " href={"/#sobre"}>
                            SOBRE
                        </Link>

                        <Link className="mx-8 text-2xl text-white uppercase " href={"/#conteudo"}>
                            CONTEÚDO
                        </Link>

                        <Link className="mx-8 text-2xl text-white uppercase " href={"/#patrocinadores"}>
                            PATROCÍNIO
                        </Link>

                        <Link className="mx-8 text-2xl text-white uppercase " href={"/equipe"}>
                            EQUIPE
                        </Link>

                        <Link className="mx-8 text-2xl text-white uppercase " href={"/#faq"}>
                            FAQ
                        </Link>
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
                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase font-bold" href={"/"}>
                            HOME
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/#sobre"}>
                            SOBRE
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/#conteudo"}>
                            CONTEÚDO
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/#patrocinio"}>
                            PATROCÍNIO
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/equipe"}>
                            EQUIPE
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/#contato"}>
                            CONTATO
                        </Link>

                        <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                        <Link onClick={onClickMenu} className="mx-2 text-2xl text-white uppercase " href={"/#faq"}>
                            FAQ
                        </Link>
                    </div>

                )}
            </header>
        </MagicMotion>
    );
}
