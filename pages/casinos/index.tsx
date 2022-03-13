import { GetStaticProps, NextPage } from 'next'
import CardTable from '../../components/card/CardTable'
import Heading from '../../components/Heading'
import { MdCasino } from 'react-icons/md'
import client from '../../graphql'
import { useRouter } from 'next/router'
import useLocale from '../../locales/useLocale'
import Background from '../../components/Background'
import { CasinosPage, CasinosPageQuery, CasinosPageQueryVariables, useCasinosQuery } from '../../generated'
import { CASINOS_PAGE_QUERY } from '../../graphql/pages-query'

interface ICasinosPage {
  casinosPage: CasinosPage
}

const Casinos: NextPage<ICasinosPage> = ({ casinosPage }) => {
  const router = useRouter()
  const t = useLocale()
  const { loading, data, error, refetch } = useCasinosQuery({
    variables: {
      start: 0,
      limit: 12,
      locale: router.locale,
    },
    notifyOnNetworkStatusChange: true,
  })

  return (
    <>
      <Heading
        img={casinosPage.heading.image.data?.attributes}
        title={casinosPage.heading.title}
        subtitle={casinosPage.heading.subtitle}
      />
      <CardTable
        title={t.cardTable.header.casino}
        icon={<MdCasino />}
        variant='casino'
        data={data?.casinos?.data}
        pageCount={data?.casinos?.meta.pagination.pageCount}
        page={data?.casinos?.meta.pagination.page}
        totalCount={data?.casinos?.meta.pagination.total}
        pageSize={data?.casinos?.meta.pagination.pageSize}
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
  const { data } = await client.query<CasinosPageQuery, CasinosPageQueryVariables>({
    query: CASINOS_PAGE_QUERY,
    variables: {
      locale: locale,
    },
  })
  return {
    props: {
      casinosPage: data.casinosPage?.data?.attributes,
    },
  }
}

export default Casinos
