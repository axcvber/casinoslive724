import React from 'react'
import Logo from './Logo'
import Box from '@mui/material/Box'
import { AppBar, Button, Container, Theme, Toolbar, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import LocaleMenu from './LocaleMenu'
import useLocale from '../locales/useLocale'
import ContactButton from './ContactButton'

interface INavbar {
  logo: any
  logoTitle: string
}

const Navbar: React.FC<INavbar> = ({ logo, logoTitle }) => {
  const [stickyNav, setStickyNav] = React.useState<boolean>(false)
  const matchesIcons = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const matchesNav = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const scrollHandler = () => {
    if (window.pageYOffset > 0) {
      setStickyNav(true)
    } else {
      setStickyNav(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <NavBarWrapper position='sticky' stickyNav={stickyNav}>
      <Container maxWidth='lg'>
        <NavBar disableGutters>
          <Logo logoImage={logo} logoTitle={logoTitle} />
          {matchesNav && (
            <Box display={'flex'} alignItems='center'>
              <NavMenu />
              <LocaleMenu />
              <ContactButton />
            </Box>
          )}
          {matchesIcons && (
            <Box display={'flex'} alignItems='center'>
              <LocaleMenu />
              <MobileMenu />
            </Box>
          )}
        </NavBar>
      </Container>
    </NavBarWrapper>
  )
}

const NavBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const NavBarWrapper = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'stickyNav',
})<{ stickyNav?: boolean }>(({ theme, stickyNav }) => ({
  background: stickyNav ? theme.palette.background.paper : 'transparent',

  boxShadow: stickyNav ? '' : 'none !important',
  // marginTop: '-64px',
  transition: 'all 0.3s ease-in-out',
}))

export default Navbar
