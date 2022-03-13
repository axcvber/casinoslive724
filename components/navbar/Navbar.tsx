import React from 'react'
import Logo from '../Logo'
import Box from '@mui/material/Box'
import { AppBar, Container, Theme, Toolbar, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import LocaleMenu from './LocaleMenu'
import ContactButton from './ContactButton'

const Navbar = () => {
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
      <Container>
        <NavBar disableGutters>
          <Logo />
          {matchesNav && (
            <Box display={'flex'} alignItems='center'>
              <NavMenu />
              <LocaleMenu />
              <Box ml={1}>
                <ContactButton />
              </Box>
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

const NavBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const NavBarWrapper = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'stickyNav',
})<{ stickyNav?: boolean }>(({ theme, stickyNav }) => ({
  background: stickyNav ? theme.palette.background.paper : 'transparent',
  boxShadow: stickyNav ? '' : 'none !important',
  transition: 'all 0.3s ease',
  borderBottom: `1px solid ${stickyNav ? theme.palette.background.default : 'transparent'}`,
}))

export default Navbar
