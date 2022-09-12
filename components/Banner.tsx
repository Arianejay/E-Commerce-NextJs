// next and react
import React from 'react'

// css
import styles from '../styles/Banner.module.css'
import Nike from '../assets/nike.png'

const Banner: React.FC = () => {
  return (
    <div className={styles.banner__container}>
      <h1>Shoe Mania</h1>
    </div>
  )
}

export default Banner
