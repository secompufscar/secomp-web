import axios from 'axios'
import NavBar from '../../components/NavBar'
import ImageWithText from './ImagewithText'; // Importe o novo componente
import styles from './style.module.css'
import './globals.css'

export const axiosClient=axios.create({
  baseURL:'http://localhost:3333'
})

const data= async()=>{
  const response= await axiosClient.get('/descontos')
  return response.data
}
export default async function Desconto(){
  const response= await data()
  response.forEach(element => {
    console.log(element.id)
  });
  
    return(
        <>
        <NavBar />
        <main className={styles.main}>
            {response.map(element => (
              <ImageWithText
                key={element.id}
                imageUrl={element.logo}
                altText={element.descricao}
                title={element.empresa}
                text={element.descricao}
                obs={element.descricao}
              />
            ))}
        </main>
        </>
    )
}