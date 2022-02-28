import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IHeading {
  title: string
  subtitle: string
  img: any
}

const Heading: React.FC<IHeading> = ({ title, subtitle, img }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '400px',
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '8px 8px 8px 0px rgba(0, 0, 0, 0.35)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '450px',
          padding: '20px',
          height: '400px',
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '110%',
            height: '100%',
            zIndex: -1,
            transform: 'skewX(-20deg) translateX(-70px)',
            background: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <Typography color='secondary' variant='h3' mb={1}>
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Box>

      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, filter: 'brightness(90%)' }}>
        <Image
          priority
          src={img.url}
          placeholder='blur'
          blurDataURL={img.url}
          layout='fill'
          objectFit='cover'
          alt={img.alternativeText}
        />
      </Box>
    </Box>
  )
}

export default Heading
