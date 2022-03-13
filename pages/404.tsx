import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useLocale from '../locales/useLocale'
import image from '../public/404.png'

const Custom404 = () => {
  const t = useLocale()
  const router = useRouter()

  const handleToHome = () => {
    router.push('/')
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 0,
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        userSelect: 'none',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
        <Image objectFit='contain' width={600} height={300} src={image} alt='404' />
        <Box sx={{ textAlign: 'center' }}>
          <Typography fontFamily='Teko' variant='h2' component='h1' sx={{ textTransform: 'uppercase' }}>
            {t.page404.title}
          </Typography>
          <Typography fontFamily='Teko' variant='h6' component='p' color='gray' mb={1}>
            {t.page404.subtitle}
          </Typography>
          <Button variant='outlined' onClick={handleToHome}>
            {t.page404.btn}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Custom404
