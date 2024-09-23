'use client'
import { useState } from "react";
import Image from "next/image"; 

import Link from "next/link";
import styles from "./styles.module.css";
import Logo from '/public/logo-xii.svg';

export default function MobileNav({ links }) {
    
    const [mobileMenuOpen, setMobileMenu] = useState(false);

    function onClickMenu() {
        setMobileMenu(!mobileMenuOpen);
    }

    return(
        <header style={{ backgroundColor: "#000" }} className={`flex sm:hidden flex-col fixed z-50 w-full p-8`}>
        <div className="flex items-center w-full justify-between py-8">
                    <Link href={"#home"}>
                        <div className={styles['logo-container']}>
                            <Image  
                                src={Logo}
                                alt={"Logo SECOMP"}
                                priority
                            />
                        </div>
                    </Link>
            <div className="flex flex-col items-center">
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
                {links.map((nav, index) => ( 
                    <>
                        <Link onClick={onClickMenu} className={`mx-2 text-2xl text-white uppercase ${!index && 'font-bold'}`} href={nav.href}>
                            {nav.name}
                        </Link>
                        {links.length - 1 !== index && <hr style={{ backgroundColor: "#0a0a0a14", height: "2px", width: "100%" }} />}
                    </>
                ))}
            </div>

        )}
    </header>

    )
}