// next and react
import React from 'react'

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
        <span>Products</span>
        <span>Featured</span>
        <span>About</span>
      </div>
      <div className={stylesNav.dropdown__cart}>
        <BsCart />
        <span className={stylesNav.dropdown__cart__qty}>2</span>
      </div>
    </div>
  )
}

export default Dropdown
