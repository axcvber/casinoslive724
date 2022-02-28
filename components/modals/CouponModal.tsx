import React from 'react'
import Image from 'next/image'
import { useGlobalModalContext } from './GlobalModal'
import Modal from '../Modal'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

interface ICouponModal {
  image: any
  link: string
  title: string
}

const CouponModal: React.FC<ICouponModal> = ({ title, image, link }) => {
  const router = useRouter()

  const handlePlayClick = () => {
    window.open(link, '_blank')
  }

  const { store, hideModal } = useGlobalModalContext()
  return (
    <Modal width={'420px'} title={title} subtitle='' open={store.isOpen} onClose={hideModal} isClosingOverlay>
      <Box>
        <Image width={image.width} height={image.height} src={image.url} alt={image.alternativeText} />
        <Box sx={{ mt: 2, float: 'right' }}>
          <Button onClick={handlePlayClick} sx={{ mr: 1 }} variant='contained'>
            Play
          </Button>
          <Button onClick={hideModal} variant='outlined' color='error'>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default CouponModal
