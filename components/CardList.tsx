import React, { ReactElement } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Typography } from '@mui/material'
import CasinoCard from './casino/CasinoCard'
import useLocale from '../locales/useLocale'
import CouponCard from './CouponCard'

interface ICardList {
  variant: 'home' | 'casino' | 'bonus' | 'coupon'
  arr: any
  title: string
  icon: ReactElement
}

const CardList: React.FC<ICardList> = ({ title, icon, variant, arr }) => {
  return (
    <Wrapper>
      <Header>
        {icon}
        <Typography component='h2' variant='body1' sx={{ textTransform: 'uppercase' }}>
          {title}
        </Typography>
      </Header>
      <Grid container sx={{ padding: '15px' }} spacing={2}>
        <DynamicBody variant={variant} arr={arr} />
      </Grid>
    </Wrapper>
  )
}

const DynamicBody: React.FC<{ variant: 'home' | 'casino' | 'bonus' | 'coupon'; arr: any }> = ({ variant, arr }) => {
  const t = useLocale()
  console.log(arr)

  switch (variant) {
    case 'bonus':
      return (
        <>
          {arr.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CasinoCard
                path={`/bonuses/${item.attributes.casino.data.attributes.slug}`}
                blank='https://baybahisaffiliates.com/?referralCode=909040'
                title={`${item.attributes.casino.data.attributes.name} - ${item.attributes.title}`}
                img={item.attributes.image.data.attributes}
                pathBtnText={t.button.details}
                blankBtnText={t.button.claim}
              />
            </Grid>
          ))}
        </>
      )
    case 'coupon':
      return (
        <>
          {arr.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CouponCard
                title={item.attributes.title}
                image={item.attributes.image.data.attributes}
                link={item.attributes.link}
              />
            </Grid>
          ))}
        </>
      )
    default:
      return (
        <>
          {arr.map((item: any) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <CasinoCard
                path={`/casinos/${item.attributes.slug}`}
                blank={item.attributes.referalLink}
                title={item.attributes.name}
                img={item.attributes.logo.data.attributes}
                rating={item.attributes.rating}
                pathBtnText={t.button.info}
                blankBtnText={t.button.play}
              />
            </Grid>
          ))}
        </>
      )
  }
}

const Header = styled('header')(({ theme }) => ({
  width: '100%',
  height: '50px',
  // background: theme.palette.primary.dark,
  background: theme.palette.background.paper,
  // background: '#171E41',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  'svg': {
    fontSize: '26px',
    color: theme.palette.secondary.main,
    marginRight: '5px',
  },
}))

const Wrapper = styled('section')(({ theme }) => ({
  width: '100%',
  background: '#101732',
  // background: 'rgba(21,28,60, 0.6)',

  marginTop: '15px',
  // borderTopRightRadius: '10px',
  // borderTopLeftRadius: '10px',
  overflow: 'hidden',
  // padding: '0 15px',
}))

export default CardList
