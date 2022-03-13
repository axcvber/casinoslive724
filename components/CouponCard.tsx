import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles'
import { MODAL_TYPES, useGlobalModalContext } from './modals/GlobalModal'
import { Maybe, UploadFile } from '../generated'
import useLocale from '../locales/useLocale'

interface ICouponCard {
  title?: string
  img: Maybe<UploadFile> | undefined
  link?: string
}

const CouponCard: React.FC<ICouponCard> = ({ title, img, link }) => {
  const { showModal } = useGlobalModalContext()

  const t = useLocale()
  const handleCouponClick = () => {
    showModal(MODAL_TYPES.COUPON_MODAL, {
      title,
      img,
      link,
    })
  }
  return (
    <Card>
      <CardImage onClick={handleCouponClick} className='card-image'>
        <Image
          priority
          placeholder='blur'
          blurDataURL={img?.url || ''}
          layout='responsive'
          width={270}
          height={160}
          objectFit='cover'
          objectPosition={'top'}
          src={img?.url || ''}
          alt={img?.alternativeText || ''}
        />
        <Button className='hoverBtn' variant='contained' color='secondary'>
          {t.button.open}
        </Button>
      </CardImage>
      <CartTrigger>
        <Typography>{title}</Typography>
      </CartTrigger>
    </Card>
  )
}

const Card = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: '10px',
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  background: theme.palette.background.paper,
  '&:hover': {
    '.hoverBtn': {
      visibility: 'visible',
      opacity: 1,
    },
    '.card-image': {
      '&:after': {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
}))

const CartTrigger = styled('div')(({ theme }) => ({
  padding: '5px 10px',
  background: theme.palette.primary.dark,
  display: 'flex',
  alignItems: 'center',
}))

const CardImage = styled(Box)({
  position: 'relative',
  width: '100%',
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
  '&:after': {
    content: '""',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.2s ease',
  },
})

export default CouponCard
