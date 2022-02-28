import { Box, Theme, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface ILogo {
  logoImage: any
  logoTitle: string
}

const Logo: React.FC<ILogo> = ({ logoImage, logoTitle }) => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Link href='/' passHref>
      <Box component='a' display={'flex'} alignItems={'center'}>
        <Image priority width={mobile ? 40 : 50} height={mobile ? 40 : 50} src={logoImage.url} alt='logo' />
        <Typography
          color='secondary.main'
          sx={{
            // fontFamily: '"Fira Sans", sans-serif',
            ml: 1,
            fontSize: {
              xs: 16,
              sm: 18,
            },
            fontWeight: 500,
            textTransform: 'uppercase',
          }}
        >
          {logoTitle}
        </Typography>
      </Box>
    </Link>
  )
}

export default Logo
