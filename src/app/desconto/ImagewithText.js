import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'


const ImageWithText = ({ imageUrl, altText,title, text,obs }) => {
  return (
    <div className={styles.imageWithText}>
      <div className={styles.imageContainer}>
        <Image className={styles.imageDescount} src={imageUrl} alt={altText} width={40} height={40} />
      </div>
      <div className={styles.containerText}>
        <h2>{title}</h2>
        <p className={styles.text}>{text}</p>
        <p className={styles.obs}>{obs}</p>
      </div>
      
    </div>
  );
};

export default ImageWithText;
