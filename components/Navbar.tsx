// next and react
import Link from 'next/link'
import React, { useState } from 'react'

// css
import styles from '../styles/Navbar.module.css'
import { BsCart } from 'react-icons/bs'
import { Spiral as Hamburger } from 'hamburger-react'
import Dropdown from './Dropdown'

const Navbar: React.FC = () => {
  // state
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link passHref href={'/'}>
            ShoeMania
          </Link>
        </div>
        <div className={styles.navbar__links}>
          <span>Products</span>
          <span>Featured</span>
          <span>About</span>
        </div>
        <div className={styles.navbar__cart}>
          <BsCart />
          <span className={styles.cart__qty}>2</span>
        </div>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div className={styles.dropdown}>
        <Dropdown isOpen={isOpen} />
      </div>
    </>
  )
}

export default Navbar
