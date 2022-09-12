// next and react
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

// components
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Logo from '../components/Logo'

// css
import styles from '../styles/Featured.module.css'

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Courgette&family=Marck+Script&family=Noto+Sans+TC:wght@400;500&family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Banner />
      <Logo />

      {/* products */}
      <div className={styles.featured__container}>
        <div className={styles.featured__header}>
          <h2>Featured</h2>
        </div>
        <div className={styles.featured__body}>
          {featuredProducts?.map((product) => (
            <Featured key={product._id} product={product} />
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
