import Image from 'next/image'
import styles from './styles.module.css'

import { AiFillHome, AiFillHeart, AiFillQuestionCircle, AiFillCalendar } from 'react-icons/ai'
import { BsPersonSquare, BsFillPersonVcardFill, BsFillGearFill } from 'react-icons/bs'
import { BiSolidDownArrow } from 'react-icons/bi'
import Link from 'next/link'

export default function Component() {
    return (
        <header>
            <div className={styles.header_container}>
                <Image src="/logo.png" alt="Logo Colorida" className={styles.logo} width={40} height={40} />

                <Link href="/">
                    <p><AiFillHome className={styles.icon} /> HOME</p>
                </Link>

                <Link href="/sobre">
                <p><AiFillHeart className={styles.icon} />SECOMP <BiSolidDownArrow className={styles.icon} /></p>
                </Link>

                <Link href="/desconto">
                    <p><AiFillCalendar className={styles.icon} />EVENTOS <BiSolidDownArrow className={styles.icon} /></p>
                </Link>

                <p><AiFillQuestionCircle className={styles.icon} />FAQ</p>
            </div>

            <div className={styles.header_container}>
                <p> <BsPersonSquare className={styles.icon} />ENTRAR</p>
                <p><BsFillPersonVcardFill className={styles.icon} />CADASTRAR</p>

                <div>
                    <BsFillGearFill className={styles.icon__config} />
                </div>
            </div>
        </header>
    )
}
