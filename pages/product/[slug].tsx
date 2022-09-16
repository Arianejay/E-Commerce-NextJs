// next and react
import React, { useState } from 'react'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'

// css
import styles from '../../styles/Slug.module.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

// lib
import { client, urlFor } from '../../lib/client'

// types
import { IDropped } from '../../types/dropped'

// imports
import { IProduct } from '../../types/product'

// context
import { useStateContext } from '../../context/StateContext'

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

  // context
  const { onAdd, qty, incQty, decQty } = useStateContext()

  return (
    <div className={styles.slug__container}>
      {/* heading */}
      <div className={styles.slug__heading}>
        <h2>{name}</h2>
        <p>{releaseDate}</p>
      </div>
      {/* image */}
      <div className={styles.slug__image}>
        <div className={styles.slug__bigImage}>
          <Image src={urlFor(image && image[index]).url()} alt="img" />
        </div>
        <div className={styles.slug__smallImage}>
          {image?.map((item, i) => (
            <Image
              src={urlFor(item).url()}
              key={i}
              alt="image"
              className={i === index ? styles.selected : ''}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      {/* buttons */}
      <div className={styles.slug__button}>
        <button onClick={() => onAdd(product, qty)}>
          Buy Now for ${price}
        </button>
        <div className={styles.slug__arrows}>
          <AiFillCaretUp style={{ cursor: 'pointer' }} onClick={incQty} />
          {qty}
          <AiFillCaretDown style={{ cursor: 'pointer' }} onClick={decQty} />
        </div>
      </div>
      {/* details */}
      <div className={styles.slug__details}>
        <div className={styles.slug__table}>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Colorway</td>
                <td>{colorway}</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{releaseDate}</td>
              </tr>
              <tr>
                <td>Style Code</td>
                <td>{styleCode}</td>
              </tr>
              <tr>
                <td>Retail Price</td>
                <td>${retailPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.slug__description}>{details}</div>
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
