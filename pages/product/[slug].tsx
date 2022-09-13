// next and react
import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

// css
import styles from '../../styles/Slug.module.css'

// lib
import { client, urlFor } from '../../lib/client'

// types
import { IDropped } from '../../types/dropped'
import { IProduct } from '../../types/product'

const ProductDetails: React.FC<IDropped & IProduct> = ({
  droppedProducts,
  product,
}) => {
  // destructure product
  const {
    name,
    image,
    price,
    retailPrice,
    styleCode,
    releaseDate,
    colorway,
    details,
  } = product

  // states
  const [index, setIndex] = useState(0)

  return (
    <div className={styles.slug__container}>
      <div className={styles.slug__heading}>
        <h2>{name}</h2>
        <p>{releaseDate}</p>
      </div>
      <div className={styles.slug__image}>
        <div className={styles.slug__bigImage}>
          <img src={urlFor(image && image[index]).url()} />
        </div>
        <div className={styles.slug__smallImage}>
          {image?.map((item, i) => (
            <img
              src={urlFor(item).url()}
              key={i}
              className={i === index ? styles.selected : ''}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

// because its a dynamic route we use getStaticProps with getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  // get all products but return only the current slug
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`

  const products = await client.fetch(query)

  // set the current slug as paths
  const paths = products.map((product: { slug: { current: any } }) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  // get just dropped products
  const dropped = '*[_type == "dropped"]'
  const droppedProducts = await client.fetch(dropped)

  // get all products of the current slug
  const slugQuery = `*[_type == "product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(slugQuery)

  return {
    props: {
      droppedProducts,
      product,
    },
  }
}
