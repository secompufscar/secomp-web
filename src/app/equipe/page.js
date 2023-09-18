'use client'
//axios
import axios from 'axios';

import { useEffect, useState } from 'react';
//navBar
import NavBar from '../../components/NavBar'
import '../desconto/globals.css'

//imageWithText
import EquipeMolde from './EquipeMolde';

import styles from './style.module.css'

export default function Equipe() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3333/equipe").then((response) => {
            setData(response.data)
        })
    },[])
    console.log(data)
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <EquipeMolde imageUrl="/bochi-meme.gif" altText="Image Alt Text"
                title='Ulisflávio - Presidente do Brasil'
                text="Equipe T.I" 
                obs='contato: uscaio@estudante.ufscar.br' />
                {data.map((item) => {
                    return (
                        <EquipeMolde imageUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/074baf09-3775-4a65-b7e6-e4dac413425d/dfi5fhh-b04865c9-7606-4f18-881c-7dc33d0ee7a2.png/v1/fill/w_894,h_894,q_70,strp/bochi_the_rock_by_markiesan_dfi5fhh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzA3NGJhZjA5LTM3NzUtNGE2NS1iN2U2LWU0ZGFjNDEzNDI1ZFwvZGZpNWZoaC1iMDQ4NjVjOS03NjA2LTRmMTgtODgxYy03ZGMzM2QwZWU3YTIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YjwxU2Xi6NhC_-Sn3EiUPJauM3GX26c17WjlcFQIclU"} altText="Image Alt Text"
                        title={item.nome}
                        text={item.diretoria} 
                        obs={item.id} />
                    )
                })}
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