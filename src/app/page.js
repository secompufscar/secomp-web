'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const handleButtonClick = () => {
    alert("Hello!")
  }

  return (
    <main className={styles.main}>
      <img className={styles.logo} src="/logo-colorida-grande.png" />

      <h1 className={styles.title}>
        Bem-vindo ao site da <br />
        <span>SECOMP</span>
        !
      </h1>

      <button onClick={() => handleButtonClick()} className={styles.button}>Acessar</button>
    </main>
  )
}
