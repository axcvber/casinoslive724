import { gql } from '@apollo/client'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import CardTable from '../../components/card/CardTable'
import Heading from '../../components/Heading'
import client from '../../graphql'
import { RiCoupon3Fill } from 'react-icons/ri'
import { CouponsPage, CouponsPageQuery, CouponsPageQueryVariables, useCouponsQuery } from '../../generated'
import { COUPONS_PAGE_QUERY } from '../../graphql/pages-query'
import { useRouter } from 'next/router'
import useLocale from '../../locales/useLocale'
import Background from '../../components/Background'
import { NextSeo } from 'next-seo'

interface ICouponsPage {
  couponsPage: CouponsPage
}

const Coupons: NextPage<ICouponsPage> = ({ couponsPage }) => {
  const router = useRouter()
  const t = useLocale()
  const { loading, data, error, refetch } = useCouponsQuery({
    variables: {
      start: 0,
      limit: 12,
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })
  return (
    <>
      <NextSeo
        title={couponsPage.seo.metaTitle}
        description={couponsPage.seo.metaDescription}
        canonical={couponsPage.seo.canonicalURL}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: couponsPage.seo.keywords,
          },
        ]}
        openGraph={{
          title: couponsPage.seo.metaTitle,
          description: couponsPage.seo.metaDescription,
          url: couponsPage.seo.canonicalURL,
          images: [
            {
              url: couponsPage.seo.metaImage.data?.attributes?.url || '',
              width: 400,
              height: 300,
            },
          ],
        }}
      />
      <Heading
        img={couponsPage.heading.image.data?.attributes}
        title={couponsPage.heading.title}
        subtitle={couponsPage.heading.subtitle}
      />
      <CardTable
        title={t.cardTable.header.coupon}
        icon={<RiCoupon3Fill />}
        variant='coupon'
        data={data?.coupons?.data}
        pageCount={data?.coupons?.meta.pagination.pageCount}
        page={data?.coupons?.meta.pagination.page}
        totalCount={data?.coupons?.meta.pagination.total}
        pageSize={data?.coupons?.meta.pagination.pageSize}
        isLoading={loading}
        isError={!!error?.message}
        refetch={refetch}
      />
      <Background />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<CouponsPageQuery, CouponsPageQueryVariables>({
    query: COUPONS_PAGE_QUERY,
    variables: {
      locale: locale,
    },
  })
  return {
    props: {
      couponsPage: data.couponsPage?.data?.attributes,
    },
  }
}

export default Coupons
