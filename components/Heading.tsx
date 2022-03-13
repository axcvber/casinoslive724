import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Maybe, UploadFile } from '../generated'
interface IHeading {
  title: string
  subtitle: string
  img: Maybe<UploadFile> | undefined
}

const Heading: React.FC<IHeading> = ({ title, subtitle, img }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        width: '100%',
        height: {
          xs: '300px',
          sm: '400px',
        },
        position: 'relative',
        borderRadius: 1,
        overflow: 'hidden',
        my: 1,
        bgcolor: 'background.default',
        backgroundImage: 'none',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: {
            xs: '100%',
            sm: '450px',
          },
          padding: '20px',
          height: '100%',
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            transform: {
              xs: 'skewX(0deg) translateX(0)',
              sm: 'skewX(-20deg) translateX(-70px) scale(1.2)',
            },
            background: 'rgba(0,0,0,0.6)',
          },
        }}
      >
        <Typography color='secondary' variant='h3' mb={1}>
          {title}
        </Typography>
        <Typography sx={{ textShadow: '0 0 3px #000', wordWrap: 'break-word' }}>{subtitle}</Typography>
      </Box>

      <Image
        priority
        src={img?.url || ''}
        placeholder='blur'
        blurDataURL={img?.url || ''}
        layout='fill'
        objectFit='cover'
        alt={img?.alternativeText || ''}
      />
    </Paper>
  )
}

export default Heading
