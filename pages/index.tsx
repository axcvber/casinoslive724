import * as React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Banners from '../components/home/Banners'
import CardTable from '../components/card/CardTable'
import { AiFillStar } from 'react-icons/ai'
import { MODAL_TYPES, useGlobalModalContext } from '../components/modals/GlobalModal'
import client from '../graphql'
import useLocale from '../locales/useLocale'
import { useRouter } from 'next/router'
import { HomePage, HomePageQuery, HomePageQueryVariables, useTopCasinosQuery } from '../generated'
import { HOME_PAGE_QUERY } from '../graphql/pages-query'
import { NextSeo } from 'next-seo'

interface IHomePage {
  homePage: HomePage
}

const Home: NextPage<IHomePage> = ({ homePage }) => {
  const router = useRouter()
  const t = useLocale()
  const { loading, data, error, refetch } = useTopCasinosQuery({
    variables: {
      start: 0,
      limit: 12,
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })
  const { showModal } = useGlobalModalContext()

  React.useEffect(() => {
    if (homePage.popup.active) {
      showModal(MODAL_TYPES.INITIAL_MODAL, {
        link: homePage.popup.link,
        img: homePage.popup.image.data?.attributes,
      })
    }
  }, [])

  return (
    <>
      <NextSeo
        title={homePage.seo.metaTitle}
        description={homePage.seo.metaDescription}
        canonical={homePage.seo.canonicalURL}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: homePage.seo.keywords,
          },
        ]}
        openGraph={{
          title: homePage.seo.metaTitle,
          description: homePage.seo.metaDescription,
          url: homePage.seo.canonicalURL,
          images: [
            {
              url: homePage.seo.metaImage.data?.attributes?.url || '',
              width: 400,
              height: 300,
            },
          ],
        }}
      />

      <Hero title={homePage.title} subtitle={homePage.subtitle} />
      <Banners data={homePage.gifs} />
      <CardTable
        title={t.cardTable.header.home}
        icon={<AiFillStar />}
        variant='casino'
        data={data?.casinos?.data}
        pageCount={data?.casinos?.meta.pagination.pageCount}
        page={data?.casinos?.meta.pagination.page}
        totalCount={data?.casinos?.meta.pagination.total}
        isLoading={loading}
        isError={!!error?.message}
        refetch={refetch}
        pageSize={data?.casinos?.meta.pagination.pageSize}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { data } = await client.query<HomePageQuery, HomePageQueryVariables>({
    query: HOME_PAGE_QUERY,
    variables: {
      locale: locale,
    },
  })
  return {
    props: {
      homePage: data.homePage?.data?.attributes,
    },
  }
}

export default Home
