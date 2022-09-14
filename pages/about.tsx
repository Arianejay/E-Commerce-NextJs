// next and react
import React from 'react'

// css
import styles from '../styles/About.module.css'

// imports
import { aboutData } from '../data/Data'

const About: React.FC = () => {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__heading}>
        <h2>About</h2>
      </div>
      <div className={styles.about__context}>
        <p className={styles.firstParagraph}>{aboutData}</p>
        <br />
        <p>{aboutData}</p>
        <br />
        <p>{aboutData}</p>
      </div>
    </div>
  )
}

export default About
