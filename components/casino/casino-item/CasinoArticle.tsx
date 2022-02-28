import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { BsFillInfoSquareFill } from 'react-icons/bs'
import { styled } from '@mui/material/styles'

interface ICasinoArticle {
  articles: any
}

const CasinoArticle: React.FC<ICasinoArticle> = ({ articles }) => {
  return (
    <Box component='section' sx={{ borderRadius: '5px', overflow: 'hidden' }}>
      <Box
        sx={{
          width: '100%',
          height: '50px',
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          'svg': {
            fontSize: '20px',
            // color: 'secondary.main',
            marginRight: '5px',
          },
        }}
      >
        <BsFillInfoSquareFill />
        <Typography component='h2' variant='body1' sx={{ textTransform: 'uppercase' }}>
          Casino Details
        </Typography>
      </Box>

      <Box component='article' sx={{ bgcolor: 'background.paper', p: 3 }}>
        {articles.map((item: any) => (
          <Box key={item.id} id={item.title}>
            <Typography variant='h4' color='secondary'>
              {item.title}
            </Typography>
            <Box>
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => {
                    if (props.src) {
                      return (
                        <Box>
                          <Image
                            layout='responsive'
                            objectFit='contain'
                            width={2000}
                            height={1000}
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL={props.src}
                            src={props.src}
                            alt='test'
                          />
                        </Box>
                      )
                    } else {
                      return null
                    }
                  },
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      style={{
                        borderLeft: '3px solid #4A70EB',
                        margin: '10px 0',
                        paddingLeft: 15,
                        background: 'rgba(0,0,0,0.2)',
                        borderTopRightRadius: '10px',
                        borderBottomRightRadius: '10px',
                        lineHeight: 1.5,
                        letterSpacing: 0.2,
                      }}
                    >
                      {props.children}
                    </blockquote>
                  ),
                  p: ({ node, ...props }) => (
                    <Typography py={2} sx={{ lineHeight: 1.8, fontWeight: 400 }}>
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
                {item.content}
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
    height: '2px',
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
  height: '300px',
  'li': {
    position: 'relative',
    paddingLeft: '15px',
    // margin: ' 10px 5px',
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

export default CasinoArticle
