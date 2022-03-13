import React from 'react'
import Image from 'next/image'
import Modal from '../Modal'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useGlobalModalContext } from './GlobalModal'
import { Maybe, UploadFile } from '../../generated'

interface ICouponModal {
  img: Maybe<UploadFile> | undefined
  link: string
  title: string
}

const CouponModal: React.FC<ICouponModal> = ({ title, img, link }) => {
  const router = useRouter()

  const handlePlayClick = () => {
    window.open(link, '_blank')
  }

  const { store, hideModal } = useGlobalModalContext()
  return (
    <Modal width={'420px'} title={title} subtitle='' open={store.isOpen} onClose={hideModal} isClosingOverlay>
      <Box>
        <Image
          width={img?.width || 0}
          height={img?.height || 0}
          src={img?.url || ''}
          alt={img?.alternativeText || ''}
        />
        <Box sx={{ mt: 1, float: 'right' }}>
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
