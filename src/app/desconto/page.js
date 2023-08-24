'use strict'

import Image from 'next/image'
import styles from './style.module.css'
import './globals.css'

import { AiFillHome,AiFillHeart,AiFillQuestionCircle,AiFillCalendar } from 'react-icons/ai';
import { BsPersonSquare,BsFillPersonVcardFill,BsFillGearFill } from 'react-icons/bs';
import { BiSolidDownArrow } from 'react-icons/bi';

import ImageWithText from './ImagewithText'; // Importe o novo componente


export default function desconto() {

  return (  
    <html>
      <header>
        <div className={styles.header_container}>
          <Image src="/logo.png" alt="Logo Colorida" className={styles.logo} width={40} height={40} />
          <p><AiFillHome className={styles.icon}/> HOME</p>
          <p><AiFillHeart className={styles.icon}/>SECOMP <BiSolidDownArrow className={styles.icon}/></p>
          <p><AiFillCalendar className={styles.icon}/>EVENTOS <BiSolidDownArrow className={styles.icon}/></p>
          <p><AiFillQuestionCircle className={styles.icon}/>FAQ</p>
        </div>
        <div className={styles.header_container}>
          <p> <BsPersonSquare className={styles.icon}/>ENTRAR</p>
          <p><BsFillPersonVcardFill className={styles.icon}/>CADASTRAR</p>   
          <div>
          <BsFillGearFill className={styles.icon__config} />
          </div>       
        </div>
      </header>
      <main className={styles.main}>
      <ImageWithText imageUrl="/logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text"
      title='Japa açai' 
      text="10% de desconto para os participantes no dia do evento" obs='(com apresentação de cracha)' />
      <ImageWithText imageUrl="/coca-cola-Logo.png" altText="Image Alt Text" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      </main>
    </html>
  )
}
