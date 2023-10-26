"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { montserrat } from "@/utils/fonts";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    function onClickMenu() {
        setMobileMenu(!mobileMenuOpen);
    }

    function displayMobileMenu() {
        if (!mobileMenuOpen) {
            return <></>;
        }
        return (
            <div className={styles.mobile_menu}>
                <Link className={`${styles.nav_option} ${styles.active}`} href={""}>
                    HOME
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className={styles.nav_option} href={""}>
                    SOBRE
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className={styles.nav_option} href={""}>
                    CRONOGRAMA
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className={styles.nav_option} href={""}>
                    EQUIPE
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className={styles.nav_option} href={""}>
                    DESCONTOS
                </Link>

                <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />

                <Link className={styles.nav_option} href={""}>
                    CONTATO
                </Link>
            </div>
        );
    }

    return (
        <header className={`${montserrat.className} ${styles.header}`}>
            <div className={styles.header_container}>
                <Image
                    src="/assets/icons/secomp_logotipo.svg"
                    alt={"Logo SECOMP"}
                    className={styles.logo}
                    width={288}
                    height={44}
                />

                <div className={styles.nav_options}>
                    <Link className={`${styles.nav_option} ${styles.active}`} href={"/"}>
                        HOME
                    </Link>

                    <Link className={styles.nav_option} href={"/"}>
                        SOBRE
                    </Link>

                    <Link className={styles.nav_option} href={"/"}>
                        CRONOGRAMA
                    </Link>

                    <Link className={styles.nav_option} href={"/"}>
                        EQUIPE
                    </Link>

                    <Link className={styles.nav_option} href={"/patrocinadores"}>
                        PATROCÍNIO
                    </Link>

                    <Link className={styles.nav_option} href={"/contato"}>
                        CONTATO
                    </Link>
                </div>

                <div className={styles.mobile_menu_button}>
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
