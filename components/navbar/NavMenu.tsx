import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useLocale from '../../locales/useLocale'
import { useGlobalContext } from '../Layout'

const NavMenu = () => {
  const t = useLocale()
  const router = useRouter()
  const ctx = useGlobalContext()

  return (
    <nav>
      <NavList>
        {t.navLinks.map((page, inx) => {
          return !page.target ? (
            <ListItem key={inx}>
              <Link href={page.path} passHref>
                <NavLink data-hover={page.title} className={router.pathname === page.path ? 'active' : ''}>
                  {page.title}
                </NavLink>
              </Link>
            </ListItem>
          ) : (
            <ListItem key={inx}>
              <NavLink data-hover={page.title} href={ctx?.liveTvSiteLink} target='_blank' rel='noreferrer'>
                {page.title}
              </NavLink>
            </ListItem>
          )
        })}
      </NavList>
    </nav>
  )
}

const NavLink = styled('a')(({ theme }) => ({
  textTransform: 'uppercase',
  padding: '0.3em 0',
  position: 'relative',
  display: 'inline-block',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  fontSize: '14px',
  '&:before': {
    content: '""',
    display: 'block',
    bottom: '100%',
    height: '3px',
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    transition: 'all 0.35s ease',
  },
  '&:after': {
    content: 'attr(data-hover)',
    padding: '0.3em 0',
    position: 'absolute',
    bottom: '100%',
    left: 0,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    transition: 'all 0.35s ease',
  },
  '&:hover, &.active': {
    transform: 'translateY(100%)',
  },
  userSelect: 'none',
  color: theme.palette.common.white,
  fontStyle: 'italic',
}))

const ListItem = styled('li')({
  overflow: 'hidden',
  margin: '0 8px',
})

const NavList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
})

export default NavMenu
