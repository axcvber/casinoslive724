import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles'
import { MODAL_TYPES, useGlobalModalContext } from './modals/GlobalModal'

interface ICouponCard {
  title: string
  image: any
  link: string
}

const CouponCard: React.FC<ICouponCard> = ({ title, image, link }) => {
  const { showModal } = useGlobalModalContext()
  const handleCouponClick = () => {
    // router.push(`/bonuses/${slug}`)
    showModal(MODAL_TYPES.COUPON_MODAL, {
      title,
      image,
      link,
    })
  }
  return (
    <Box onClick={handleCouponClick}>
      <CardImage>
        <Image layout='fill' objectFit='cover' objectPosition={'top'} src={image.url} alt={image.alternativeText} />
        <Button className='hoverBtn' variant='contained' color='secondary'>
          open
        </Button>
      </CardImage>
      <Typography sx={{ bgcolor: 'primary.main', padding: '5px 10px' }}>{title}</Typography>
    </Box>
  )
}

const CardImage = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '5px',
  transition: 'all 0.2s ease',

  '.hoverBtn': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    visibility: 'hidden',
    transition: 'all 0.2s ease',
    opacity: 0,
  },

  '&:hover': {
    '.hoverBtn': {
      visibility: 'visible',
      opacity: 1,
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.7)',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
}))

export default CouponCard
