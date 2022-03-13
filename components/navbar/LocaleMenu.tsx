import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import { ClickAwayListener, Grow, IconButton, MenuList, Paper, Popper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import enIcon from '../../public/icons/uk.png'
import trIcon from '../../public/icons/tr.png'

interface LocaleProps {
  icon: StaticImageData
  label: string
  locale: string
}

const localeArr = [
  {
    icon: enIcon, //refactor
    label: 'English',
    locale: 'en',
  },
  {
    icon: trIcon,
    label: 'Türkçe',
    locale: 'tr',
  },
]

const LocaleMenu = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const prevOpen = React.useRef(open)
  const [currentLocale, setCurrentLocale] = React.useState<LocaleProps | undefined>()

  React.useEffect(() => {
    const currentLocale = localeArr.find((item) => item.locale === router.locale)
    if (currentLocale) {
      setCurrentLocale(currentLocale)
    }
  }, [])

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }
  const onSelectLocale = (item: LocaleProps) => {
    router.push(router.asPath, undefined, { locale: item.locale })
    setCurrentLocale(item)
    setOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <React.Fragment>
      {currentLocale && (
        <IconButton
          ref={anchorRef}
          id='composition-button'
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          color='primary'
          size='small'
        >
          <Image priority width={30} height={30} src={currentLocale.icon} alt='locale' />
        </IconButton>
      )}

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement='top-end' transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper
              elevation={5}
              sx={{
                overflow: 'visible',
                filter: 'drop-shadow(0 -8px 8px rgba(0,0,0,0.32))',
                mt: 1,
                position: 'relative',
                '.MuiList-root': {
                  borderRadius: '5px',
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: -5,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'rotate(45deg)',
                  zIndex: 0,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  sx={{ bgcolor: 'background.paper' }}
                  autoFocusItem={open}
                  id='composition-menu'
                  aria-labelledby='composition-button'
                  onKeyDown={handleListKeyDown}
                >
                  {localeArr.map((item) => (
                    <MenuItem key={item.label} onClick={() => onSelectLocale(item)}>
                      <Image priority width={26} height={26} src={item.icon} alt={item.locale} />
                      <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}

export default LocaleMenu
