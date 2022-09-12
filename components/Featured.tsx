// next and react
import React from 'react'

// css
import styles from '../styles/Featured.module.css'

// lib
import { urlFor } from '../lib/client'

// types
import { IProduct } from '../types/product'

const Featured: React.FC<IProduct> = ({ product }) => {
  // destructure product
  const { image, name } = product

  return (
    <>
      <div className={styles.card}>
        <img src={urlFor(image && image[0]).url()} width={250} height={200} />
        <p>{name}</p>
      </div>
    </>
  )
}

export default Featured
