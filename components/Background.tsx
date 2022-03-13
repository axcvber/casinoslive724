import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import bgImage from '../public/bgImage.jpg'

interface IBackground {
  src?: StaticImageData | string
  alt?: string
}

const Background: React.FC<IBackground> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight: 'calc(-1 * (100vw - 100%))',
        zIndex: -1,
        '&:after': {
          content: '""',
          background:
            'linear-gradient(0deg, rgba(12,17,39,1) 0%, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 76%, rgba(12,17,39,1) 100%)',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Image
        priority
        layout='fill'
        objectFit='cover'
        objectPosition={'top'}
        src={src || bgImage}
        alt={alt || 'background'}
      />
    </Box>
  )
}

export default Background
