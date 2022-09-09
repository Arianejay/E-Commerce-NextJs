// next and react
import React from 'react'

// css
import styles from '../styles/Banner.module.css'
import Nike from '../assets/nike.png'

// types
import { Image } from '../types/image'

const Banner: React.FC<Image> = () => {
  return (
    <div className={styles.banner__container}>
      <img src={Nike} alt="" />
    </div>
  )
}

export default Banner
