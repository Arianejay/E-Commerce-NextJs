import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
