// next and react
import Link from 'next/link'
import React, { useState } from 'react'

// css
import styles from '../styles/Navbar.module.css'
import { BsCart } from 'react-icons/bs'
import { TbSkateboard } from 'react-icons/tb'
import { Spiral as Hamburger } from 'hamburger-react'

// imports
import Dropdown from './Dropdown'

// context
import { useStateContext } from '../context/StateContext'

const Navbar: React.FC = () => {
  // state
  const [isOpen, setOpen] = useState<boolean>(false)

  // context
  const { totalQuantities } = useStateContext()

  return (
    <>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link passHref href={'/'}>
            <TbSkateboard />
          </Link>
        </div>
        <div className={styles.navbar__right}>
          <div className={styles.navbar__links}>
            <ul>
              <Link passHref href={'/products'}>
                <li>Products</li>
              </Link>
              <Link passHref href={'/about'}>
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div className={styles.navbar__cart}>
            <Link passHref href={'/cart'}>
              <BsCart />
            </Link>
            <span className={styles.cart__qty}>{totalQuantities}</span>
          </div>
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
