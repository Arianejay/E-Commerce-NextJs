// next and react
import React from 'react'
import Link from 'next/link'

// css
import styles from '../styles/Dropdown.module.css'
import stylesNav from '../styles/Navbar.module.css'
import { BsCart } from 'react-icons/bs'

interface Props {
  isOpen: boolean
}

const Dropdown: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={styles.dropdown__container}
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={styles.dropdown__links}>
        <Link passHref href={'/products'}>
          <span>Products</span>
        </Link>
        <Link passHref href={'/about'}>
          <span>About</span>
        </Link>
      </div>
      <div className={stylesNav.dropdown__cart}>
        <Link passHref href={'/cart'}>
          <BsCart />
        </Link>
        <span className={stylesNav.dropdown__cart__qty}>2</span>
      </div>
    </div>
  )
}

export default Dropdown
