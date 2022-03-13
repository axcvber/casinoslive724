import { Grid } from '@mui/material'
import React from 'react'
import useLocale from '../../locales/useLocale'
import Card from './Card'
import CouponCard from '../CouponCard'
import CardTableEmpty from './CardTableEmpty'
import CardTableError from './CardTableError'
import CardTableLoading from './CardTableLoading'
import { BonusEntity, CasinoEntity, CouponEntity } from '../../generated'

interface ICardTableBody {
  data: any
  isLoading: boolean
  isError: boolean
  onRetry: () => void
  variant: 'casino' | 'bonus' | 'coupon'
}

const CardTableBody: React.FC<ICardTableBody> = ({ data, isLoading, isError, onRetry, variant }) => {
  if (isError) {
    return <CardTableError onRetry={onRetry} />
  }

  if (isLoading && !data) {
    return <CardTableLoading />
  }

  if (data.length === 0) {
    return <CardTableEmpty />
  }

  return <DynamicBody data={data} variant={variant} />
}

const DynamicBody: React.FC<{ variant: 'casino' | 'bonus' | 'coupon'; data: any }> = ({ variant, data }) => {
  const t = useLocale()

  switch (variant) {
    case 'casino':
      return (
        <>
          {data.map((item: CasinoEntity) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ padding: '8px' }}>
              <Card
                path={`/casinos/${item.attributes?.slug}`}
                blank={item.attributes?.referralLink}
                title={item.attributes?.name}
                img={item.attributes?.logo.data?.attributes}
                rating={item.attributes?.rating}
                pathBtnText={t.button.info}
                blankBtnText={t.button.play}
              />
            </Grid>
          ))}
        </>
      )

    case 'bonus':
      return (
        <>
          {data.map((item: BonusEntity) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ padding: '8px' }}>
              <Card
                path={`/bonuses/${item.attributes?.slug}`}
                blank={item.attributes?.bonusReferralLink}
                title={`${item.attributes?.casino?.data?.attributes?.name} - ${item.attributes?.title}`}
                img={item.attributes?.image.data?.attributes}
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
          {data.map((item: CouponEntity) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ padding: '8px' }}>
              <CouponCard
                title={item.attributes?.title}
                img={item.attributes?.image.data?.attributes}
                link={item.attributes?.link}
              />
            </Grid>
          ))}
        </>
      )
    default:
      return null
  }
}

export default CardTableBody
