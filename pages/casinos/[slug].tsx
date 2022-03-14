import { NextPage } from 'next'
import { Box, Fab, Grid } from '@mui/material'
import client from '../../graphql'
import { GetStaticPaths, GetStaticProps } from 'next'
import CasinoHeader from '../../components/casino/CasinoHeader'
import { Casino, CasinoItemPathQuery, CasinoItemPropsQuery, CasinoItemPropsQueryVariables } from '../../generated'
import { CASINO_ITEM_PATH_QUERY, CASINO_ITEM_PROPS_QUERY } from '../../graphql/casinos-query'
import Article from '../../components/Article'
import ScrollSidebar from '../../components/ScrollSidebar'
import useLocale from '../../locales/useLocale'
import { IParams } from '../../types'
import Background from '../../components/Background'
import React from 'react'
import ScrollTop from '../../components/ScrollTop'
import { NextSeo } from 'next-seo'

interface ICasinoItem {
  casino: Casino
}

const CasinoItem: NextPage<ICasinoItem> = ({ casino }) => {
  const t = useLocale()

  return (
    <>
      <NextSeo
        title={casino.seo.metaTitle}
        description={casino.seo.metaDescription}
        canonical={casino.seo.canonicalURL}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: casino.seo.keywords,
          },
        ]}
        openGraph={{
          title: casino.seo.metaTitle,
          description: casino.seo.metaDescription,
          url: casino.seo.canonicalURL,
          images: [
            {
              url: casino.seo.metaImage.data?.attributes?.url || '',
              width: 400,
              height: 300,
            },
          ],
        }}
      />

      <Box mt={1} position='relative'>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <CasinoHeader
              name={casino.name}
              rating={casino.rating}
              logo={casino.logo}
              referralLink={casino.referralLink}
              isBonus={!!casino.bonuses?.data.length}
              slug={casino.slug}
              features={casino.casinoHeading}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9} lg={9}>
              <Article title={t.casinoItem.articleTitle} sections={casino.sections} />
            </Grid>
            <Grid item xs={0} md={3} lg={3}>
              <ScrollSidebar sections={casino.sections.filter((item) => item?.title)} />
            </Grid>
          </Grid>
        </Grid>

        <ScrollTop />

        {/* <Background /> */}
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<CasinoItemPathQuery>({
    query: CASINO_ITEM_PATH_QUERY,
  })

  const paths =
    data.casinos?.data.map(({ attributes }) => ({
      params: { slug: attributes?.slug || '' },
      locale: attributes?.locale || '',
    })) || []

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { slug } = context.params as IParams
  const { data } = await client.query<CasinoItemPropsQuery, CasinoItemPropsQueryVariables>({
    query: CASINO_ITEM_PROPS_QUERY,
    variables: {
      casinoSlug: slug,
      locale: locale,
    },
  })
  return {
    props: {
      casino: data.casinos?.data[0].attributes,
    },
  }
}

export default CasinoItem
