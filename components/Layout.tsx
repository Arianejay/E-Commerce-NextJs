// next and react
import Head from 'next/head'
import React, { ReactNode } from 'react'

// imports
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Courgette&family=Marck+Script&family=Noto+Sans+TC:wght@400;500&family=Roboto+Condensed:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header style={{ position: 'sticky', top: '0', zIndex: '2' }}>
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
