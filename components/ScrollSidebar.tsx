import { Box, List, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-scroll'
import { ComponentSectionsSections, Maybe } from '../generated'
import useLocale from '../locales/useLocale'

interface IScrollSidebar {
  sections: Array<Maybe<ComponentSectionsSections>>
}

const ScrollSidebar: React.FC<IScrollSidebar> = ({ sections }) => {
  const t = useLocale()

  return (
    <Box
      component={'aside'}
      sx={{
        position: 'sticky',
        top: 80,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 5,
        overflow: 'hidden',
        display: {
          md: 'block',
          xs: 'none',
        },
      }}
    >
      <Box
        sx={{
          height: '50px',
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography component='h3' sx={{ textTransform: 'uppercase' }}>
          {t.scrollSidebar.title}:
        </Typography>
      </Box>
      <List component='nav'>
        {sections &&
          sections.map((item) => (
            <ListItemButton
              component='li'
              key={item?.id}
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
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  padding: '10px 16px',
                  lineHeight: 1.5,
                }}
                className='test'
                to={item?.title || ''}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                ignoreCancelEvents
                isDynamic
              >
                {item?.title}
              </Link>
            </ListItemButton>
          ))}
      </List>
    </Box>
  )
}

export default ScrollSidebar
