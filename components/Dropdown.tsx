// next and react
import React from 'react'
import Link from 'next/link'

// css
import styles from '../styles/Dropdown.module.css'
import stylesNav from '../styles/Navbar.module.css'
import { BsCart } from 'react-icons/bs'

// context
import { useStateContext } from '../context/StateContext'

interface Props {
  isOpen: boolean
}

const Dropdown: React.FC<Props> = ({ isOpen }) => {
  // context
  const { totalQuantities } = useStateContext()

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
        <Link href={'/cart'}>
          <BsCart />
        </Link>
        <span className={stylesNav.dropdown__cart__qty}>{totalQuantities}</span>
      </div>
    </div>
  )
}

export default Dropdown
