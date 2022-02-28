import { gql } from '@apollo/client'
import { Box, Button, Grid, Rating, Typography } from '@mui/material'
import { GetStaticPaths, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import CasinoArticle from '../../components/casino/casino-item/CasinoArticle'
import client from '../../graphql'

interface IBonusItem {
  bonus: any
}

const BonusItem: NextPage<IBonusItem> = ({ bonus }) => {
  const router = useRouter()

  const handleCasinoDetails = () => {
    router.push(`/casinos/${bonus.casino.data.attributes.slug}`)
  }

  const handleBonusClick = () => {
    window.open(bonus.bonusReferralLink, '_blank')
  }

  return (
    <Box>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', padding: '20px', borderRadius: '5px' }}>
        <Grid container>
          <Grid item xs={3}>
            <Box sx={{ mr: { sm: 0, md: 3 } }}>
              <Box
                sx={{
                  borderRadius: '5px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
                  priority
                  layout='responsive'
                  width={270}
                  height={160}
                  src={bonus.image.data.attributes.url}
                  alt={bonus.image.data.attributes.alternativeText}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box display='flex'>
              <Typography variant='h5' color='secondary'>
                {bonus.casino.data.attributes.name}
              </Typography>
            </Box>

            <Box my={1} display='flex'>
              <Rating name='read-only' value={bonus.casino.data.attributes.rating} precision={0.5} readOnly />
              <Typography ml={1}>{bonus.casino.data.attributes.rating}/5</Typography>
            </Box>
            <Typography variant='h4' mb={2}>
              {bonus.title}
            </Typography>
            <Button onClick={handleBonusClick} sx={{ mr: 1 }} variant='contained' color='secondary'>
              Get bonus
            </Button>
            <Button onClick={handleCasinoDetails} variant='outlined' color='secondary'>
              Casino details
            </Button>
            {/* <Typography variant='h4'>{`Bonus: ${bonus.title}`}</Typography> */}
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <CasinoArticle articles={bonus.sections} />
      </Box>
    </Box>
  )
}

export const getStaticProps = async (context: any) => {
  const { params, locale } = context
  try {
    const { data, error } = await client.query({
      query: gql`
      query {
        bonuses(filters: { casino: {slug: {eq: "${params.slug}"}}}, locale: "${locale}") {
           data{
            attributes {
              title
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              sections {
                id
                title
                content
              }
              casino {
                data {
                  attributes {
                    name 
                    slug
                    rating
                    logo {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }
      `,
    })
    if (error || !data) {
      return { notFound: true }
    }
    return {
      props: {
        bonus: data.bonuses.data[0].attributes,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        bonuses(filters: { casino: { slug: { ne: "null" } } }, locale: "all") {
          data {
            attributes {
              casino {
                data {
                  attributes {
                    slug
                    locale
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  const paths =
    data.bonuses.data.map(({ attributes }: any) => ({
      params: { slug: attributes.casino.data.attributes.slug },
      locale: attributes.casino.data.attributes.locale,
    })) || []

  return { paths, fallback: false }
}

export default BonusItem
