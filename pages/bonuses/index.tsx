import { gql } from '@apollo/client'
import { Box } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { AiFillGift } from 'react-icons/ai'
import CardList from '../../components/CardList'
import Heading from '../../components/Heading'
import client from '../../graphql'

interface IBonuses {
  bonusesPage: any
  bonuses: any
}

const Bonuses: NextPage<IBonuses> = ({ bonusesPage, bonuses }) => {
  return (
    <div>
      <Heading
        img={bonusesPage.heading.image.data.attributes}
        title={bonusesPage.heading.title}
        subtitle={bonusesPage.heading.subtitle}
      />
      <CardList title='Bonuses' icon={<AiFillGift />} variant='bonus' arr={bonuses} />
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
        <Image layout='fill' objectFit='cover' objectPosition={'top left'} src='/casino/heading2.jpg' alt='bg' />
      </Box>
    </div>
  )
}

export async function getStaticProps(context: any) {
  try {
    const { locale } = context

    const { data, errors } = await client.query({
      query: gql`
        query {
          bonusesPage(locale: "${locale}") {
            data {
              attributes {
                heading {
                  title
                  subtitle
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
          bonuses(filters: { casino: { slug: { ne: "null" } } }, locale: "${locale}") {
            data {
              id
              attributes {
                title
                casino {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    if (errors || !data) {
      return { notFound: true }
    }
    return {
      props: {
        bonusesPage: data.bonusesPage.data.attributes,
        bonuses: data.bonuses.data,
      },
    }
  } catch (error) {
    console.log('ERROR', error)
    return { notFound: true }
  }
}

export default Bonuses
