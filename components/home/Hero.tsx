import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useLocale from '../../locales/useLocale'
import Background from '../Background'
import heroBg from '../../public/hero.jpg'
import SocialNetworks from '../SocialNetworks'
import { useRouter } from 'next/router'

interface IHero {
  title: string
  subtitle: string
}

const Hero: React.FC<IHero> = ({ title, subtitle }) => {
  const t = useLocale()
  const router = useRouter()

  return (
    <Box component='section'>
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
          <Typography
            component='h1'
            variant='h2'
            sx={{ fontStyle: 'italic', fontFamily: 'Teko', textShadow: '0 0 3px #000' }}
          >
            {title}
          </Typography>

          <Typography
            color='gray'
            sx={{
              letterSpacing: '0.5px',
              mb: 2,
              maxWidth: {
                md: '350px',
                sm: '300px',
                xs: '280px',
              },
              fontFamily: 'Teko',
              textShadow: '0 0 3px #000',
            }}
          >
            {subtitle}
          </Typography>

          <Box mb={3} display='flex' alignItems='center'>
            <SocialNetworks />
          </Box>
          <Button variant='contained' onClick={() => router.push('/casinos')}>
            {t.button.hero}
          </Button>
        </Box>
      </Box>
      <Background src={heroBg} alt='hero-background' />
    </Box>
  )
}

export default Hero
