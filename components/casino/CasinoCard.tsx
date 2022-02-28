import React from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { AiFillStar } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { shortString } from '../../utils/shortString'

interface ICasinoCard {
  title: string
  img: any
  rating?: number
  path: string
  blank: string
  pathBtnText: string
  blankBtnText: string
}

const CasinoCard: React.FC<ICasinoCard> = ({ title, img, rating, path, blank, pathBtnText, blankBtnText }) => {
  const router = useRouter()
  const onBlankClick = () => {
    window.open(blank, '_blank')
  }

  const onPathClick = () => {
    router.push(path)
  }

  return (
    <Card>
      <CartImage>
        <Image priority layout='responsive' width={250} height={160} src={img.url} alt={img.alternativeText} />
        <CardInner className='cart-inner'>
          <button className='play-btn' onClick={onBlankClick}>
            <span>{blankBtnText}</span>
          </button>
          <button className='info-btn' onClick={onPathClick}>
            <span>{pathBtnText}</span>
          </button>
        </CardInner>
      </CartImage>
      <CartTrigger>
        <Typography variant='body1'>{shortString(title)}</Typography>
        {rating && (
          <Rating>
            <AiFillStar />
            <Typography variant='body2' sx={{ marginLeft: '5px' }}>
              {rating}/5
            </Typography>
          </Rating>
        )}
      </CartTrigger>
    </Card>
  )
}

const Rating = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const CartTrigger = styled('div')(({ theme }) => ({
  padding: '5px 10px',
  background: theme.palette.primary.dark,
  // borderBottomLeftRadius: '10px',
  // borderBottomRightRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  'svg': {
    fontSize: '20px',
    color: theme.palette.secondary.main,
  },
}))

const CardInner = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  // bottom: '50px',
  left: 0,
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  opacity: 0,
  transition: 'all 0.2s ease-in',
  '.play-btn, .info-btn': {
    cursor: 'pointer',
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
    float: 'left',
    transform: 'skewx(-30deg)',
    border: 0,
    transition: 'all .3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    'span': {
      fontSize: '18px',
      fontWeight: 900,
      fontVariant: 'small-caps',
      display: 'inline-block',
      margin: '0 15px',
      padding: '2px 0',
      transition: '.5s',
      transform: 'skewx(30deg)',
      float: 'left',
    },
  },

  '.play-btn': {
    color: theme.palette.background.default,
    marginLeft: '-49%',
    textAlign: 'right',
    backgroundColor: theme.palette.secondary.main,
    'span': {
      borderBottom: `1px dashed ${theme.palette.background.default}`,
      float: 'right',
    },
    '&:hover': {
      zIndex: 2,
      transform: 'skewX(-30deg) translateX(35px)',
      boxShadow: '5px 0 20px 5px #000',
      'span': {
        transform: 'skewX(30deg) translateX(-15px)',
      },
    },
  },
  '.info-btn': {
    top: '-100%',
    marginLeft: '50%',
    textAlign: 'left',
    color: theme.palette.secondary.main,
    backgroundColor: '#0C1127',
    'span': {
      borderBottom: `1px dashed ${theme.palette.secondary.main}`,
      margin: '0 10px',
    },
    '&:hover': {
      zIndex: 2,
      transform: 'skewX(-30deg) translateX(-35px)',
      boxShadow: '-5px 0 18px 5px #776000',
      'span': {
        transform: 'skewX(30deg) translateX(15px)',
      },
    },
  },
}))

const CartImage = styled('div')({
  position: 'relative',
  background: '#172046',
})

const Card = styled('div')({
  userSelect: 'none',
  position: 'relative',
  // width: '250px',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    '.cart-inner': {
      opacity: 0.97,
    },
  },
})

export default CasinoCard
