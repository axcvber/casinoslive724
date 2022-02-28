import { gql } from '@apollo/client'
import { NextPage } from 'next'
import React from 'react'
import CardList from '../../components/CardList'
import Heading from '../../components/Heading'
import client from '../../graphql'
import { RiCoupon3Fill } from 'react-icons/ri'

const bonusArr = [
  {
    slug: '1xbet',
    title: '%50 İLK DEPOZIT BONUSU',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925634/333333_f26e3700d8.webp?updated_at=2022-01-23T08:13:55.235Z',
  },
  {
    slug: '1xbet',
    title: '%100 ILK DEPOZIT BONUSU',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925607/76576547657_6d15a8db11.webp?updated_at=2022-01-23T08:13:29.249Z',
  },
  {
    slug: '1xbet',
    title: '%50 İLK DEPOZIT BONUSU',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925584/2321312312312312312_972713f9bb.webp?updated_at=2022-01-23T08:13:06.908Z',
  },
  {
    slug: '1xbet',
    title: '%100 ILK DEPOZIT BONUSU',
    img: 'https://res.cloudinary.com/betslive/image/upload/v1642925563/432432432432432432432_37a4c25346.webp?updated_at=2022-01-23T08:12:49.349Z',
  },
]

interface ICoupons {
  couponsPage: any
  coupons: any
}

const Coupons: NextPage<ICoupons> = ({ couponsPage, coupons }) => {
  console.log('coupons', coupons)

  return (
    <div>
      <Heading
        img={couponsPage.heading.image.data.attributes}
        title={couponsPage.heading.title}
        subtitle={couponsPage.heading.subtitle}
      />
      <CardList title='All Coupons' icon={<RiCoupon3Fill />} variant='coupon' arr={coupons} />
    </div>
  )
}

export async function getStaticProps(context: any) {
  const { locale } = context
  const { data } = await client.query({
    query: gql`
      query {
        couponsPage {
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
        coupons {
          data {
            id
            attributes {
              title
              link
              image {
                data {
                  attributes {
                    url
                    alternativeText
                    height
                    width
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
      couponsPage: data.couponsPage.data.attributes,
      coupons: data.coupons.data,
    },
  }
}

export default Coupons
