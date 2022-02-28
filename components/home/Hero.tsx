import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles'
import useLocale from '../../locales/useLocale'

interface IHero {
  title: string
  subtitle: string
}

const Hero: React.FC<IHero> = ({ title, subtitle }) => {
  const t = useLocale()

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'relative', height: '85vh' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            maxWidth: {
              md: '550px',
              sm: '450px',
              xs: '350px',
            },
          }}
        >
          <Typography variant='h2' sx={{ fontStyle: 'italic', fontFamily: "'Teko', sans-serif" }}>
            {title}
          </Typography>

          <Typography
            color='gray'
            sx={{
              mb: 2,
              maxWidth: {
                md: '350px',
                sm: '300px',
                xs: '280px',
              },
              fontFamily: "'Teko', sans-serif",
            }}
          >
            {subtitle}
          </Typography>
          <Button variant='contained'>{t.button.hero}</Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // filter: 'brightness(50%)',

          // width: '100%',
          // minHeight: '100vh',
          // filter: 'brightness(50%)',

          zIndex: -1,
          // background: 'linear-gradient(#eb01a5, #0C1127)',

          '&:after': {
            content: '""',
            // background: 'linear-gradient(0deg, rgba(12,17,39,1) 0%, rgba(12,17,39,1) 0%, rgba(0,0,0,0) 100%)',
            background: 'linear-gradient(0deg, rgba(12,17,39,1) 0%, rgba(255,255,255,0) 50%, rgba(12,17,39,1) 100%)',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Image layout='fill' objectFit='cover' objectPosition={'top'} src='/orginal.jpg' alt='hero-image' />
      </Box>
    </Box>
  )
}

export default Hero
