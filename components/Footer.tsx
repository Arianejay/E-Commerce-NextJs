// next and react
import React from 'react'

// css
import styles from '../styles/Footer.module.css'
import { AiFillGithub } from 'react-icons/ai'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className={styles.footer__container}>
      <p>&#169; Shoe Mania {year}</p>
      <p>
        <a href="https://github.com/Arianejay" target="_blank" rel="noreferrer">
          <AiFillGithub className={styles.github} />
        </a>
      </p>
    </div>
  )
}

export default Footer
