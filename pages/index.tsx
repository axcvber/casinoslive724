import * as React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Banners from '../components/home/Banners'
import CardList from '../components/CardList'
import { AiFillStar } from 'react-icons/ai'
import { MODAL_TYPES, useGlobalModalContext } from '../components/modals/GlobalModal'
import client from '../graphql'
import { gql } from '@apollo/client'
interface IHomePage {
  homePage: any
  casinos: any
}

const Home: NextPage<IHomePage> = ({ homePage, casinos }) => {
  const { showModal } = useGlobalModalContext()

  React.useEffect(() => {
    if (homePage.popup.active) {
      showModal(MODAL_TYPES.INITIAL_MODAL, {
        link: homePage.popup.link,
        img: homePage.popup.image.data.attributes,
      })
    }
  }, [])

  return (
    <>
      <Head>
        <title>Casinos live</title>
      </Head>

      <Hero title={homePage.title} subtitle={homePage.subtitle} />
      <Banners arr={homePage.gifs} />
      <CardList title='Top casinos' icon={<AiFillStar />} variant='home' arr={casinos} />
    </>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context
  const { data } = await client.query({
    query: gql`
      query {
          homePage(locale: "${locale}") {
            data {
              attributes {
                title
                subtitle
                popup {
                  active
                  link
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
                gifs {
                  id
                  link
                  gif {
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
  return {
    props: {
      homePage: data.homePage.data.attributes,
      casinos: data.casinos.data,
    },
  }
}

export default Home
