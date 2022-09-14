// next and react
import React from 'react'
import { GetServerSideProps } from 'next'

// styles
import styles from '../styles/Product.module.css'

// imports
import Product from '../components/Product'

// lib
import { client } from '../lib/client'

// types
import { IProducts } from '../types/products'

const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <div className={styles.product__container}>
      <div className={styles.product__header}>
        <h2>Products</h2>
      </div>
      <div className={styles.product__body}>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products

export const getServerSideProps: GetServerSideProps = async () => {
  // get all products
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  return {
    props: {
      products,
    },
  }
}
