import { Fab } from '@mui/material'
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { animateScroll as scroll } from 'react-scroll'

const ScrollTop = () => {
  const [topDiv, setTopDiv] = React.useState(false)

  const handleToTop = () => {
    scroll.scrollToTop({
      duration: 300,
    })
  }

  const scrollHandler = () => {
    if (window.pageYOffset > 1000) {
      setTopDiv(true)
    } else {
      setTopDiv(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <Fab
      size='medium'
      onClick={handleToTop}
      color='primary'
      sx={{
        visibility: topDiv ? 'visible' : 'hidden',
        opacity: topDiv ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
        position: 'fixed',
        bottom: 30,
        right: 30,
        display: 'flex',
        alightItems: 'center',
        justifyContent: 'center',
        boxShadow: 10,
        'svg': {
          display: 'flex',
          height: '100%',
          fontSize: 35,
        },
      }}
    >
      <IoIosArrowUp />
    </Fab>
  )
}

export default ScrollTop
