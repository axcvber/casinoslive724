import { NextPage } from 'next'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import CardList from '../../components/CardList'
import Image from 'next/image'
import Heading from '../../components/Heading'
import { MdCasino } from 'react-icons/md'
import { gql } from '@apollo/client'
import client from '../../graphql'

const casinoArr = [
  {
    id: 1,
    title: 'CelticBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926707/celtic_3ba242caa5.webp?updated_at=2022-01-23T08:31:48.584Z',
  },
  {
    id: 2,
    title: 'RiccoBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926674/cats_aef8a809df.webp?updated_at=2022-01-23T08:31:15.004Z',
  },
  {
    id: 3,
    title: 'MeritRoyalBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926726/meritroyalbettt_eb91bbd1b6.webp?updated_at=2022-01-23T08:32:07.145Z',
  },
  {
    id: 4,
    title: 'BayBahis',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926651/baybahis_abed828c1f.webp?updated_at=2022-01-23T08:30:52.129Z',
  },
  {
    id: 5,
    title: '1xBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925865/1xbet_logo_de76484753.webp?updated_at=2022-01-23T08:17:47.919Z',
  },
  {
    id: 6,
    title: 'CelticBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926707/celtic_3ba242caa5.webp?updated_at=2022-01-23T08:31:48.584Z',
  },
  {
    id: 7,
    title: 'RiccoBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926674/cats_aef8a809df.webp?updated_at=2022-01-23T08:31:15.004Z',
  },
  {
    id: 8,
    title: 'MeritRoyalBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926726/meritroyalbettt_eb91bbd1b6.webp?updated_at=2022-01-23T08:32:07.145Z',
  },
  {
    id: 9,
    title: 'BayBahis',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642926651/baybahis_abed828c1f.webp?updated_at=2022-01-23T08:30:52.129Z',
  },
  {
    id: 10,
    title: '1xBet',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925865/1xbet_logo_de76484753.webp?updated_at=2022-01-23T08:17:47.919Z',
  },
]

type ImageObj = {
  data: {
    attributes: any
  }
}

type CasinoItem = {
  id: number
  title: string
  content: any
}

interface PageHeadingProps {
  title: string
  subtitle: string
  image: ImageObj
}

interface PageProps {
  heading: PageHeadingProps
}

interface ICasinosPage {
  casinosPage: PageProps
  casinos: Array<CasinoItem>
}

const Casinos: NextPage<ICasinosPage> = ({ casinosPage, casinos }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Heading
        img={casinosPage.heading.image.data.attributes}
        title={casinosPage.heading.title}
        subtitle={casinosPage.heading.subtitle}
      />
      <CardList title='Casinos' icon={<MdCasino />} variant='casino' arr={casinos} />

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // filter: 'brightness(90%)',
          // width: '100%',
          // minHeight: '80vh',
          // filter: 'brightness(50%)',
          zIndex: -1,

          '&:after': {
            content: '""',
            // background: 'linear-gradient(0deg, rgba(12,17,39,1) 5%, rgba(12,17,39,1) 20%, rgba(255,255,255,0) 100%)',
            // background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(12,17,39,1) 100%) no-repeat',
            background: 'linear-gradient(0deg, rgba(255,255,255,0) 50%, rgba(12,17,39,1) 100%)',
            // width: '100%',
            // minHeight: '80vh',
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <Image layout='fill' objectFit='cover' src='/casino/heading2.jpg' alt='bg' />
      </Box>
    </Box>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context
  const { data } = await client.query({
    query: gql`
      query {
        casinosPage(locale: "${locale}") {
          data {
            attributes {
              heading {
                title
                subtitle
                image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
        }
        casinos(locale: "${locale}") {
          data {
            id
            attributes {
              name
              slug
              rating
              logo {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
          }
  }
      }
    `,
  })

  console.log('data', data)

  return {
    props: {
      casinosPage: data.casinosPage.data.attributes,
      casinos: data.casinos.data,
    },
  }
}

export default Casinos
