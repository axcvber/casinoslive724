import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { AiFillGift } from 'react-icons/ai'
import Background from '../../components/Background'
import CardTable from '../../components/card/CardTable'
import Heading from '../../components/Heading'
import { BonusesPage, BonusesPageQuery, BonusesPageQueryVariables, useBonusesQuery } from '../../generated'
import client from '../../graphql'
import { BONUSES_PAGE_QUERY } from '../../graphql/pages-query'
import useLocale from '../../locales/useLocale'

interface IBonusesPage {
  bonusesPage: BonusesPage
}

const Bonuses: NextPage<IBonusesPage> = ({ bonusesPage }) => {
  const router = useRouter()
  const t = useLocale()
  const { loading, data, error, refetch } = useBonusesQuery({
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
        title={bonusesPage.seo.metaTitle}
        description={bonusesPage.seo.metaDescription}
        canonical={bonusesPage.seo.canonicalURL}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: bonusesPage.seo.keywords,
          },
        ]}
        openGraph={{
          title: bonusesPage.seo.metaTitle,
          description: bonusesPage.seo.metaDescription,
          url: bonusesPage.seo.canonicalURL,
          images: [
            {
              url: bonusesPage.seo.metaImage.data?.attributes?.url || '',
              width: 400,
              height: 300,
            },
          ],
        }}
      />
      <Heading
        img={bonusesPage.heading.image.data?.attributes}
        title={bonusesPage.heading.title}
        subtitle={bonusesPage.heading.subtitle}
      />
      <CardTable
        title={t.cardTable.header.bonus}
        icon={<AiFillGift />}
        variant='bonus'
        data={data?.bonuses?.data}
        pageCount={data?.bonuses?.meta.pagination.pageCount}
        page={data?.bonuses?.meta.pagination.page}
        totalCount={data?.bonuses?.meta.pagination.total}
        pageSize={data?.bonuses?.meta.pagination.pageSize}
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
  const { data } = await client.query<BonusesPageQuery, BonusesPageQueryVariables>({
    query: BONUSES_PAGE_QUERY,
    variables: {
      locale: locale,
    },
  })
  return {
    props: {
      bonusesPage: data.bonusesPage?.data?.attributes,
    },
  }
}

export default Bonuses
