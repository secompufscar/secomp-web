import Image from "next/image";
import Logo from '/public/logo-simples.png';
import styles from './styles.module.css'

export default function FloatingButton(){
    return (
    <a href="https://app.secompufscar.com.br/" target="_blank">
        <div className={styles['action-wrapper']}> 
            <div className={styles['info-container']}>
                <span className={styles.span}>Inscreva-se aqui</span>
                <div className={styles['logo-container']}>
                    <Image src={Logo} alt="Logo Secomp"/>
                </div>
            </div>
        </div>
    </a>
    )
}