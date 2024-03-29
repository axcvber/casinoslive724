import React from 'react'
import { styled } from '@mui/material/styles'
import { AiFillGift } from 'react-icons/ai'
import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import { MODAL_TYPES, useGlobalModalContext } from '../modals/GlobalModal'
import { ComponentCasinoHeadingCasinoHeading, Maybe, UploadFileEntityResponse } from '../../generated'
import useLocale from '../../locales/useLocale'

interface ICasinoHeader {
  referralLink: string
  slug: string | undefined | null
  isBonus: boolean
  logo: UploadFileEntityResponse
  name: string
  rating: number
  features: Array<Maybe<ComponentCasinoHeadingCasinoHeading>>
}

const CasinoHeader: React.FC<ICasinoHeader> = ({ logo, referralLink, isBonus, slug, name, rating, features }) => {
  const { showModal } = useGlobalModalContext()
  const t = useLocale()
  console.log('slug', slug)

  const handleSiteClick = () => {
    window.open(referralLink, '_blank')
  }

  const handleBonusClick = () => {
    showModal(MODAL_TYPES.BONUSES_MODAL, {
      slug,
    })
  }
  return (
    <Box sx={{ bgcolor: 'background.paper', position: 'relative', borderRadius: 1, boxShadow: 5 }}>
      {isBonus && (
        <BonusLabel onClick={handleBonusClick}>
          <AiFillGift fontSize={22} />
          <Typography sx={{ ml: 0.5 }}>{t.casinoItem.bonusesLabel}</Typography>
        </BonusLabel>
      )}

      <Grid container padding={2} pt={{ xs: isBonus ? 10 : 2, sm: 2, md: 2 }}>
        <Grid item xs={12} sm={6} md={3} mb={{ xs: 3, md: 0 }}>
          <Box sx={{ mr: { sm: 0, md: 3 } }}>
            <Box
              sx={{
                borderRadius: '5px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Image
                priority
                layout='responsive'
                width={270}
                height={160}
                src={logo.data?.attributes?.url || ''}
                alt={logo.data?.attributes?.alternativeText || ''}
              />
            </Box>

            <Button sx={{ mt: 1 }} fullWidth onClick={handleSiteClick} variant='contained' color='primary'>
              {t.casinoItem.btnToSite}
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={9}>
          <Typography variant='h4'>{name}</Typography>

          <Box display='flex' my={2}>
            <Rating name='read-only' value={rating} precision={0.5} readOnly />
            <Typography ml={1}>{rating}/5</Typography>
          </Box>
          <Grid container gap={4}>
            {features &&
              features.map((item) => (
                <Grid sx={{ wordBreak: 'break-all' }} item key={item?.id}>
                  <Box
                    flexWrap={'wrap'}
                    display='flex'
                    alignItems='center'
                    sx={{ 'svg': { fontSize: 20, color: 'secondary.main' } }}
                  >
                    <Image
                      width={25}
                      height={25}
                      src={item?.icon.data?.attributes?.url || ''}
                      alt={item?.icon.data?.attributes?.alternativeText || ''}
                    />
                    <Typography sx={{ ml: 1 }}>{item?.title}</Typography>
                  </Box>
                  <Box>
                    <Typography color='secondary.main' align='right' mt={0.5} variant='body2'>
                      {item?.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

const BonusLabel = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 10,
  right: 0,
  background: theme.palette.error.main,
  padding: '10px 10px',
  borderTop: '1px dashed #fff',
  borderBottom: '1px dashed #fff',
  overflow: 'hidden',
  paddingLeft: '30px',
  transition: 'all .3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  cursor: 'pointer',
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '30px',
    height: '30px',
    background: theme.palette.background.paper,
    left: '-15px',
    top: '50%',
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 55,
    outline: '1px dashed #fff',
  },
  '&:hover': {
    paddingRight: '40px',
  },
}))

export default CasinoHeader
