import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import PuffLoader from 'react-spinners/PuffLoader'
const LoadingScreen = () => {
  return (
    <Box
      display='flex'
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.paper' }}
    >
      <Box display='flex' sx={{ position: 'relative' }}>
        <Box sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
          <Image
            priority
            layout='fixed'
            width={100}
            height={100}
            src='https://res.cloudinary.com/casinoslive/image/upload/v1645959274/logo_ac14c3e619.webp?updated_at=2022-02-27T10:54:45.712Z'
            alt='logo'
          />
        </Box>
        <PuffLoader size={150} color='#F9E58A' />
      </Box>
    </Box>
  )
}

export default LoadingScreen
