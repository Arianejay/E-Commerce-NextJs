/* eslint-disable jsx-a11y/alt-text */
// next and react
import React from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

// styles
import styles from '../styles/Product.module.css'
import loader from '../assets/loader.gif'

// imports
import Product from '../components/Product'

// lib
import { client } from '../lib/client'

// types
import { IProducts } from '../types/products'

const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <>
      {!products ? (
        <div className="loader">
          <Image src={loader} height={80} width={80} />
        </div>
      ) : (
        <div className={styles.product__container}>
          <div className={styles.product__header}>
            <h2>Products</h2>
          </div>
          <div className={styles.product__body}>
            {products?.map((product) => (
              <Product
                key={product._id}
                product={product}
                quantity={0}
                _id={''}
                price={0}
                colorway={''}
                name={''}
                image={undefined}
              />
            ))}
          </div>
        </div>
      )}
    </>
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
