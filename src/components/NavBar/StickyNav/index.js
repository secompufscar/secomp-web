import Image from "next/image"; 

import Link from "next/link";
import styles from "./styles.module.css";
import Logo from '/public/logo-xii.svg';

//className={`fixed z-50 w-full`}

export function StickyNav({links}) {
    return (
        <header style={{ backgroundColor: "#000" }} className="hidden sm:block" >
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

                <div>
                    <hr className={styles.divider} />
                    <div className='my-6'>
                        {links.map(nav => ( 
                            <Link className={`md:mx-8 sm:mx-4 text-2xl font-light text-white uppercase ${styles.link}`} href={nav.href}>
                                {nav.name}
                            </Link>
                        ))} 
                    </div>
                    <hr className={styles.divider}/>                       
                </div>
            </div>
        </header>
    )
}