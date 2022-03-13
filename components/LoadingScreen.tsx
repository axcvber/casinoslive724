import { Box } from '@mui/material'
import Image from 'next/image'
import PuffLoader from 'react-spinners/PuffLoader'
import { useAppContext } from '../theme/Theme'

const LoadingScreen = () => {
  const { logo } = useAppContext()
  return (
    <Box
      display='flex'
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.paper' }}
    >
      <Box display='flex' sx={{ position: 'relative' }}>
        <Box sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}>
          <Image priority layout='fixed' width={100} height={100} src={logo?.data?.attributes?.url || ''} alt='logo' />
        </Box>
        <PuffLoader size={150} color='#F9E58A' />
      </Box>
    </Box>
  )
}

export default LoadingScreen
