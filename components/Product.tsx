// next and react
import React from 'react'
import Image from 'next/image'

// css
import styles from '../styles/Product.module.css'

// lib
import { urlFor } from '../lib/client'

// types
import { IProduct } from '../types/product'
import Link from 'next/link'

const Product: React.FC<IProduct> = ({ product }) => {
  // destructure product
  const { image, name } = product
  const { current } = product.slug

  return (
    <Link passHref href={`product/${current}`}>
      <div className={styles.card}>
        <Image
          src={urlFor(image && image[0]).url()}
          width={275}
          height={225}
          alt="img"
        />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default Product
