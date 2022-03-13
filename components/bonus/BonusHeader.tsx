import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Maybe, UploadFile } from '../../generated'
import useLocale from '../../locales/useLocale'

interface IBonusHeader {
  image: Maybe<UploadFile> | undefined
  casinoName: string | undefined
  casinoRating: number | undefined
  title: string
  bonusReferralLink: string
  casinoSlug: Maybe<string> | undefined
}

const BonusHeader: React.FC<IBonusHeader> = ({
  image,
  casinoName,
  casinoRating,
  title,
  bonusReferralLink,
  casinoSlug,
}) => {
  const router = useRouter()
  const t = useLocale()

  const handleCasinoDetails = () => {
    router.push(`/casinos/${casinoSlug}`)
  }

  const handleBonusClick = () => {
    window.open(bonusReferralLink, '_blank')
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', position: 'relative', borderRadius: 1, boxShadow: 5 }}>
      <Grid container padding={2}>
        <Grid item xs={12} md={3} mb={{ xs: 1, md: 0 }}>
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
                src={image?.url || ''}
                alt={image?.alternativeText || ''}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant='h5' color='secondary'>
            {casinoName}
          </Typography>

          <Box my={1} display='flex'>
            <Rating name='read-only' value={casinoRating} precision={0.5} readOnly />
            <Typography ml={1}>{casinoRating}/5</Typography>
          </Box>

          <Typography component={'h2'} variant='h4' mb={2} sx={{ wordBreak: 'break-word' }}>
            {title}
          </Typography>

          <Button onClick={handleBonusClick} sx={{ mr: 1 }} variant='contained' color='secondary'>
            {t.bonusItem.btnToSite}
          </Button>
          <Button onClick={handleCasinoDetails} variant='outlined' color='secondary'>
            {t.bonusItem.btnToCasino}
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BonusHeader
