/* eslint-disable jsx-a11y/alt-text */
// next and react
import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'

// components
import Banner from '../components/Banner'
import Product from '../components/Product'
import Logo from '../components/Logo'

// css
import styles from '../styles/Product.module.css'
import loader from '../assets/loader.gif'

// lib
import { client } from '../lib/client'

// types
import { IFeatured } from '../types/featured'
import { IDropped } from '../types/dropped'

const Home: NextPage<IFeatured & IDropped> = ({
  featuredProducts,
  droppedProducts,
}) => {
  return (
    <>
      {!featuredProducts && !droppedProducts ? (
        <div className="loader">
          <Image src={loader} height={80} width={80} />
        </div>
      ) : (
        <>
          <Banner />
          <Logo />
          <div className={styles.product__container}>
            <div className={styles.product__header}>
              <h2>Featured</h2>
            </div>
            <div className={styles.product__body}>
              {featuredProducts?.map((product) => (
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
          <div className={styles.product__container}>
            <div className={styles.product__header}>
              <h2>Just Dropped</h2>
            </div>
            <div className={styles.product__body}>
              {droppedProducts?.map((product) => (
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
        </>
      )}
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  // get featured
  const featured = '*[_type == "featured"]'
  const featuredProducts = await client.fetch(featured)

  // get just dropped
  const dropped = '*[_type == "dropped"]'
  const droppedProducts = await client.fetch(dropped)

  return {
    props: {
      featuredProducts,
      droppedProducts,
    },
  }
}
