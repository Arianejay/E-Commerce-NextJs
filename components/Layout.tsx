// next and react
import Head from 'next/head'
import React, { ReactNode } from 'react'

// css
import styles from '../styles/Layout.module.css'

// imports
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.layout__container}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
