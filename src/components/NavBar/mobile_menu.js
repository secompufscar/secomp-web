import Image from "next/image";
import { useState } from "react";

export default function MobileMenu() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function onClickButton() {
        console.log("AAAAAA");
    }

    if (!menuIsOpen) {
        return (
            <button onClick={onClickButton}>
                <Image src="/assets/icons/menu_icon.svg" alt="menu icon" width={32} height={32} />
            </button>
        );
    } else {
        return (
            <>
                <button>
                    <Image src="/assets/icons/close_icon.svg" alt="close icon" width={32} height={32} />
                </button>
                <div className={styles.mobile_menu}>
                    <Link className={`${styles.nav_option} ${styles.active}`} href={""}>
                        HOME
                    </Link>
                    <Link className={styles.nav_option} href={""}>
                        SOBRE
                    </Link>
                    <Link className={styles.nav_option} href={""}>
                        CRONOGRAMA
                    </Link>
                    <Link className={styles.nav_option} href={""}>
                        EQUIPE
                    </Link>
                    <Link className={styles.nav_option} href={""}>
                        DESCONTOS
                    </Link>
                    <Link className={styles.nav_option} href={""}>
                        CONTATO
                    </Link>
                </div>
            </>
        );
    }
}
