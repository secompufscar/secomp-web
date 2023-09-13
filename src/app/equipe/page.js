//navBar
import NavBar from '../../components/NavBar'
import '../desconto/globals.css'

//imageWithText
import EquipeMolde from './EquipeMolde';

import styles from './style.module.css'



export default function Equipe() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <EquipeMolde imageUrl="/bochi-meme.gif" altText="Image Alt Text"
                title='Ulisflávio - Presidente do Brasil'
                text="Equipe T.I" 
                obs='contato: uscaio@estudante.ufscar.br' />
                
            </main>
            <div className={styles.bottomText}>  
                    <p>Desenvolvido por Hitori Gotoh, Ryo Yamada, Ikuyo Kitae Nijika Ijichi</p>
                    <p>Departamento de Computação © 2023 - Todos os direitos reservados</p>
                    <p>Universidade Federal de São Carlos - Campus São Carlos</p>
                    <p>Rodovia Washington Luís, km 235 - SP-310</p>
                    <p>São Carlos - São Paulo - Brasil CEP 13565-905</p>
            </div>
        </>
    )
}