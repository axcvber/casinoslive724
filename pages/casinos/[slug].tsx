import { NextPage } from 'next'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from '@mui/material'
import { MODAL_TYPES, useGlobalModalContext } from '../../components/modals/GlobalModal'
import client from '../../graphql'
import { gql } from '@apollo/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import CasinoArticleNav from '../../components/casino/casino-item/CasinoArticleNav'
import CasinoArticle from '../../components/casino/casino-item/CasinoArticle'
import CasinoHeader from '../../components/casino/casino-item/CasinoHeader'

const CasinoItem: NextPage = ({ casino }: any) => {
  return (
    <Box mt={2}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <CasinoHeader
            name={casino.name}
            rating={casino.rating}
            logo={casino.logo}
            referralLink={casino.referalLink}
            isBonus={!!casino.bonuses}
            slug={casino.slug}
            features={casino.casinoHeading}
          />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={9}>
            <CasinoArticle articles={casino.sections} />
          </Grid>

          <Grid item xs={0} md={3}>
            <CasinoArticleNav sections={casino.sections.filter((item: any) => item.title)} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export const getStaticProps = async (context: any) => {
  const { params, locale } = context
  try {
    const { data, error } = await client.query({
      query: gql`
      query {
        casinos(filters: { slug:{eq: "${params.slug}"}},  locale: "${locale}") {
          data {
              attributes {
                name
                slug
                logo {
                  data {
                    attributes{
                      alternativeText
                      url
                    }
                  }
                }
                bonuses {
                  data {
                    id
                  }
                }
                casinoHeading {
                  id
                  title
                  desc
                  icon {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
                referalLink
                rating
                sections {
                  id
                  title
                  content
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
        casino: data.casinos.data[0].attributes,
        // background: data.casinoPage.data.attributes.page.background.data.attributes,
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
        casinos(locale: "all") {
          data {
            attributes {
              slug
              locale
            }
          }
        }
      }
    `,
  })

  const paths =
    data.casinos.data.map(({ attributes }: any) => ({
      params: { slug: attributes.slug },
      locale: attributes.locale,
    })) || []

  return { paths, fallback: false }
}

const RatingBlock = styled('div')({
  display: 'flex',
  margin: '10px 0 30px 0',
})

const InfoWidget = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const Wrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  // padding: '20px',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[6],
  position: 'relative',
}))

export default CasinoItem
