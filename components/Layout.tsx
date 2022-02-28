import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import React, { ReactChild } from 'react'
import Navbar from './Navbar'

interface ILayout {
  children: ReactChild
  cmsTheme: any
}

const Layout: React.FC<ILayout> = ({ children, cmsTheme }) => {
  return (
    <>
      <Navbar logo={cmsTheme.logo.data.attributes} logoTitle={cmsTheme.logoTitle} />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
