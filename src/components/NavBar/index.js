import Image from "next/image";
import styles from "./styles.module.css";
import { montserrat } from "@/utils/fonts";
import MobileMenu from "./mobile_menu";

import Link from "next/link";

export default function NavBar() {
    return (
        <header className={`${montserrat.className} ${styles.header}`}>
            <div className={styles.header_container}>
                <Image
                    src="/assets/icons/secomp_logotipo.svg"
                    alt="Logo SECOMP"
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

                <div>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
