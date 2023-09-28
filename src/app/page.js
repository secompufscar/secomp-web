'use client'

// import styles from './page.module.css'

import NavBar from '../components/NavBar'

import "./desconto/globals.css"

export default function Home() {
  const handleButtonClick = () => {
    alert("Hello!")
  }

  return (
    <>
      <NavBar />

    <main className="columns-2">
      <img src="/logo-colorida-grande.png" />

      <h1>
        Bem-vindo ao site da <br />
        <span>SECOMP</span>
        !
      </h1>

      <button onClick={() => handleButtonClick()}>Acessar</button>
    </main>
    </>
  )
}
