import { Container } from '@mui/material'
import React, { ReactChild } from 'react'
import Navbar from './navbar/Navbar'

interface ILayout {
  children: ReactChild
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container component={'main'}>{children}</Container>
    </>
  )
}

export default Layout
