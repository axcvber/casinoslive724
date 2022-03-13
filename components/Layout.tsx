import { Container } from '@mui/material'
import React, { createContext, ReactChild, useContext } from 'react'
import Navbar from './navbar/Navbar'
import { Theme as CmsTheme } from '../generated'

interface ILayout {
  children: ReactChild
  cmsTheme: CmsTheme
}

const GlobalContext = createContext<Partial<CmsTheme>>({})
export const useGlobalContext = () => useContext(GlobalContext)

const Layout: React.FC<ILayout> = ({ children, cmsTheme }) => {
  return (
    <GlobalContext.Provider value={cmsTheme}>
      <Navbar />
      <Container component={'main'}>{children}</Container>
    </GlobalContext.Provider>
  )
}

export default Layout
