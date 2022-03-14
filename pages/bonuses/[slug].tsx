import { Box, Grid } from '@mui/material'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Article from '../../components/Article'
import Background from '../../components/Background'
import BonusHeader from '../../components/bonus/BonusHeader'
import { Bonus, BonusItemPathQuery, BonusItemPropsQuery, BonusItemPropsQueryVariables } from '../../generated'
import client from '../../graphql'
import { BONUS_ITEM_PATH_QUERY, BONUS_ITEM_PROPS_QUERY } from '../../graphql/bonuses-query'
import useLocale from '../../locales/useLocale'
import { IParams } from '../../types'
import { NextSeo } from 'next-seo'

interface IBonusItem {
  bonus: Bonus
}

const BonusItem: NextPage<IBonusItem> = ({ bonus }) => {
  const t = useLocale()

  return (
    <>
      <NextSeo
        title={bonus.seo.metaTitle}
        description={bonus.seo.metaDescription}
        canonical={bonus.seo.canonicalURL}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: bonus.seo.keywords,
          },
        ]}
        openGraph={{
          title: bonus.seo.metaTitle,
          description: bonus.seo.metaDescription,
          url: bonus.seo.canonicalURL,
          images: [
            {
              url: bonus.seo.metaImage.data?.attributes?.url || '',
              width: 400,
              height: 300,
            },
          ],
        }}
      />

      <Box mt={1}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <BonusHeader
              image={bonus.image.data?.attributes}
              casinoName={bonus.casino?.data?.attributes?.name}
              casinoRating={bonus.casino?.data?.attributes?.rating}
              title={bonus.title}
              bonusReferralLink={bonus.bonusReferralLink}
              casinoSlug={bonus.casino?.data?.attributes?.slug}
            />
          </Grid>
          <Grid item xs={12}>
            <Article title={t.bonusItem.articleTitle} sections={bonus.sections} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<BonusItemPathQuery>({
    query: BONUS_ITEM_PATH_QUERY,
  })

  const paths =
    data.bonuses?.data.map(({ attributes }) => ({
      params: { slug: attributes?.slug || '' },
      locale: attributes?.locale || '',
    })) || []

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { slug } = context.params as IParams
  const { data } = await client.query<BonusItemPropsQuery, BonusItemPropsQueryVariables>({
    query: BONUS_ITEM_PROPS_QUERY,
    variables: {
      bonusSlug: slug,
      locale: locale,
    },
  })

  return {
    props: {
      bonus: data.bonuses?.data[0].attributes,
    },
  }
}

export default BonusItem
