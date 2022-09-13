// next and react
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

// components
import Banner from '../components/Banner'
import Product from '../components/Product'
import Logo from '../components/Logo'

// css
import styles from '../styles/Product.module.css'

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
      <Banner />
      <Logo />

      {/* featured products */}
      <div className={styles.product__container}>
        <div className={styles.product__header}>
          <h2>Featured</h2>
        </div>
        <div className={styles.product__body}>
          {featuredProducts?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* just dropped products */}
      <div className={styles.product__container}>
        <div className={styles.product__header}>
          <h2>Just Dropped</h2>
        </div>
        <div className={styles.product__body}>
          {droppedProducts?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
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
