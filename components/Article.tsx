import { Box, Typography } from '@mui/material'
import React from 'react'
import { ComponentSectionsSections, Maybe } from '../generated'
import ReactMarkdown from 'react-markdown'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { BsInfoCircle } from 'react-icons/bs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
interface IArticle {
  title: string
  sections: Array<Maybe<ComponentSectionsSections>>
}

const Article: React.FC<IArticle> = ({ title, sections }) => {
  return (
    <Box
      component='article'
      sx={{ borderRadius: 1, boxShadow: 5, overflow: 'hidden', px: 3, bgcolor: 'background.paper' }}
    >
      <Box
        component='header'
        sx={{
          position: 'relative',
          width: '100%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          'svg': {
            fontSize: '20px',
            marginRight: '5px',
          },
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            borderBottom: '2px dashed #4A70EB',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
          },
        }}
      >
        <Box
          display='flex'
          alignItems='center'
          sx={{
            zIndex: 2,
            padding: '0 10px',
            bgcolor: 'background.paper',
            '& svg': {
              fontSize: 20,
              mr: 1,
            },
          }}
        >
          <BsInfoCircle />
          <Typography
            component='h2'
            variant='h6'
            sx={{
              textTransform: 'uppercase',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      <Box>
        {sections.map((item) => (
          <Box key={item?.id} id={item?.title} component='section' py={1}>
            <Typography variant='h4' color='secondary' pb={1}>
              {item?.title}
            </Typography>
            <Box>
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => {
                    if (props.src) {
                      return (
                        <Zoom
                          overlayBgColorEnd={'rgba(23,32,70, 0.9)'}
                          zoomMargin={100}
                          wrapStyle={{
                            width: '100%',
                          }}
                        >
                          <Box sx={{ width: '100%' }}>
                            <Image
                              priority
                              layout='responsive'
                              objectFit='contain'
                              width={1600}
                              height={1000}
                              // placeholder='blur'
                              // blurDataURL={props.src}
                              src={props.src}
                              alt={props.alt}
                            />
                          </Box>
                        </Zoom>
                      )
                    } else {
                      return null
                    }
                  },
                  blockquote: ({ node, ...props }) => (
                    <Box
                      component='blockquote'
                      sx={{
                        borderLeft: '3px solid #4A70EB',
                        my: 2,
                        padding: '10px 10px 10px 20px',
                        background: 'rgba(0,0,0,0.2)',
                        borderTopRightRadius: '5px',
                        borderBottomRightRadius: '5px',
                        boxShadow: 3,
                        lineHeight: 1.5,
                        letterSpacing: 0.3,
                        fontFamily: 'Oswald',
                      }}
                    >
                      {props.children}
                    </Box>
                  ),
                  p: ({ node, ...props }) => (
                    <Typography py={1} fontFamily='inherit' sx={{ lineHeight: 1.7 }}>
                      {props.children}
                    </Typography>
                  ),

                  h1: ({ node, ...props }) => <Typography variant={'h1'}>{props.children}</Typography>,
                  h2: ({ node, ...props }) => <Typography variant={'h2'}>{props.children}</Typography>,
                  h3: ({ node, ...props }) => <Typography variant={'h3'}>{props.children}</Typography>,
                  h4: ({ node, ...props }) => <Typography variant={'h4'}>{props.children}</Typography>,
                  h5: ({ node, ...props }) => <Typography variant={'h5'}>{props.children}</Typography>,
                  h6: ({ node, ...props }) => <Typography variant={'h6'}>{props.children}</Typography>,
                  ul: ({ node, ...props }) => <StyledList>{props.children}</StyledList>,
                  a: ({ node, ...props }) => (
                    <StyledLink {...props} target='_blank' rel='noreferrer'>
                      {props.children}
                    </StyledLink>
                  ),
                }}
              >
                {item?.content || ''}
              </ReactMarkdown>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: 'pointer',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '1px',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s',
    background: theme.palette.primary.light,
  },
  '&:hover': {
    '&:after': {
      transform: 'scaleX(1)',
    },
  },
}))

const StyledList = styled('ul')(({ theme }) => ({
  '&:last-child': {
    marginBottom: 0,
  },
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  // paddingLeft: '10px',
  'li': {
    position: 'relative',
    paddingLeft: '15px',
    '&:before': {
      content: '""',
      width: '8px',
      height: '8px',
      backgroundColor: theme.palette.primary.light,
      fontWeight: 'bold',
      display: 'flex',
      borderRadius: '50px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: 0,
    },
  },
}))

export default Article
