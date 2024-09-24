import { montserrat } from "@/utils/fonts"

import Image from "next/image"; 

import Link from "next/link";
import styles from "./styles.module.css";
import Logo from '/public/logo-xii.svg';

//className={`fixed z-50 w-full`}

export function StickyNav({links}) {
    return (
        <header className={`hidden sm:block top-0 ${montserrat.className} fixed z-50 top-0 w-full`} >
            <div className="flex flex-col items-center w-full justify-between">
                    <Link href={"#home"}>
                        <div className={styles['logo-container']}>
                            <Image  
                                src={Logo}
                                alt={"Logo SECOMP"}
                                priority
                            />
                        </div>
                    </Link>

                <div className={`my-6 ${styles['nav-container']}`}>
                    <div className='my-6'>
                        {links.map(nav => ( 
                            <Link className={`md:mx-8 sm:mx-4 text-2xl font-light text-white uppercase ${styles.link}`} href={nav.href}>
                                {nav.name}
                            </Link>
                        ))} 
                    </div>                     
                </div>
            </div>
        </header>
    )
}