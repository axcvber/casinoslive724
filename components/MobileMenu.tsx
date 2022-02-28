import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useLocale from '../locales/useLocale'
import { RiMenu4Line } from 'react-icons/ri'
import { IoIosArrowForward } from 'react-icons/io'
import ContactButton from './ContactButton'

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const t = useLocale()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton color='primary' size='small' aria-label='open drawer' edge='end' onClick={handleDrawerOpen}>
        <RiMenu4Line fontSize={30} color='#fff' />
      </IconButton>
      <StyledDrawer
        transitionDuration={{
          enter: 250,
          exit: 250,
        }}
        variant='temporary'
        anchor='right'
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <ContactButton />
          <IconButton color='primary' size='small' onClick={handleDrawerClose}>
            <IoIosArrowForward fontSize={25} color='#fff' />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box component='nav' sx={{ padding: '10px' }}>
          <List disablePadding>
            {t.navLinks.map((page) => {
              return !page.target ? (
                <NavLink key={page.path} isActive={router.pathname === page.path}>
                  <Link href={page.path} passHref>
                    <a onClick={handleDrawerClose}>{page.title}</a>
                  </Link>
                </NavLink>
              ) : (
                <NavLink key={page.path}>
                  <a href={page.path} target='_blank' rel='noreferrer'>
                    {page.title}
                  </a>
                </NavLink>
              )
            })}
          </List>
        </Box>
      </StyledDrawer>
    </>
  )
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  ...theme.mixins.toolbar,
}))

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 200,
    height: 'auto',
    background: theme.palette.background.paper,
    borderBottomLeftRadius: '5px',
  },
  '& .MuiDivider-root': {
    background: theme.palette.primary.main,
  },
}))

const NavLink = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  userSelect: 'none',
  padding: '8px 15px',
  fontFamily: '"Fira Sans", sans-serif', //refactor
  textTransform: 'uppercase',
  fontStyle: 'italic',
  margin: '5px 0',
  'a': {
    width: '100%',
    color: theme.palette.common.white,
  },
  '&:active': {
    'a': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  ...(isActive && {
    'a': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  }),
}))
