// next and react
import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

// css
import styles from '../../styles/Slug.module.css'

// lib
import { client, urlFor } from '../../lib/client'

// types
import { IDropped } from '../../types/dropped'

// imports
import { IProduct } from '../../types/product'

// context
import { useStateContext } from '../../context/StateContext'

// select library
import Select from 'react-select'
const options = [
  { value: '7.5', label: '7.5' },
  { value: '8', label: '8' },
  { value: '8.5', label: '8.5' },
  { value: '9', label: '9' },
  { value: '9.5', label: '9.5' },
  { value: '10', label: '10' },
  { value: '10.5', label: '10.5' },
  { value: '11', label: '11' },
  { value: '11.5', label: '11.5' },
]

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
  const { onAdd } = useStateContext()

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
      {/* buttons */}
      <div className={styles.slug__button}>
        <button onClick={() => onAdd(product)}>Buy Now for ${price}</button>
        <Select className={styles.selectData} options={options} />
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
