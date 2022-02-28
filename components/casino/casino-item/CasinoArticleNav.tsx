import { Box, List, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface ICasinoArticleNav {
  sections: any
}

const CasinoArticleNav: React.FC<ICasinoArticleNav> = ({ sections }) => {
  return (
    <Box
      sx={{
        ml: 2,
        position: 'sticky',
        top: 81,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        overflow: 'hidden',
        display: {
          md: 'block',
          xs: 'none',
        },
      }}
    >
      <Box
        component='header'
        sx={{
          height: '50px',
          bgcolor: 'primary.main',
          padding: '15px',
        }}
      >
        <Typography component='p' variant='body1' sx={{ textTransform: 'uppercase' }}>
          See section:
        </Typography>
      </Box>
      <List component='nav'>
        {sections.map((item: any) => (
          <ListItemButton
            component='li'
            key={item.title}
            sx={{
              padding: 0,
              position: 'relative',
              '& .active': {
                background: 'rgba(0,0,0,0.3)',

                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'block',
                  width: '2px',
                  height: '100%',
                  bgcolor: 'primary.main',
                },
              },
            }}
          >
            <Link
              activeClass='active'
              style={{ display: 'block', width: '100%', height: '100%', padding: '12px 15px' }}
              className='test'
              to={item.title}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
            >
              {item.title}
            </Link>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default CasinoArticleNav
