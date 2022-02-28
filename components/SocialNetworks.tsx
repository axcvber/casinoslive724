import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles'

const socialIcons = [
  {
    id: 1,
    link: '#',
    icon: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/betslive/image/upload/v1642926183/Twitter_Logo_Square_c12bcca315.webp?updated_at=2022-01-23T08:23:04.978Z',
          alternativeText: 'Twitter-Logo-Square.png',
        },
      },
    },
  },
  {
    id: 2,
    link: '#',
    icon: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/betslive/image/upload/v1642926151/instagram_1_9055d4edc3.webp?updated_at=2022-01-23T08:22:33.123Z',
          alternativeText: 'instagram (1).png',
        },
      },
    },
  },
  {
    id: 3,
    link: '#',
    icon: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/betslive/image/upload/v1642926140/skype_1_fd9af99368.webp?updated_at=2022-01-23T08:22:22.114Z',
          alternativeText: 'Twitter-Logo-Square.png',
        },
      },
    },
  },
  {
    id: 4,
    link: '#',
    icon: {
      data: {
        attributes: {
          url: 'https://res.cloudinary.com/betslive/image/upload/v1642926128/gmail_1_3bd20f2ab6.webp?updated_at=2022-01-23T08:22:09.958Z',
          alternativeText: 'Twitter-Logo-Square.png',
        },
      },
    },
  },
]

const SocialNetworks = () => {
  return (
    <Wrapper>
      {socialIcons &&
        socialIcons.map((item) => (
          <li key={item.id}>
            <a href={item.link} target={'_blank'} rel='noreferrer'>
              <Image
                src={item.icon.data.attributes.url}
                width={22}
                height={22}
                alt={item.icon.data.attributes.alternativeText}
              />
            </a>
          </li>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled('ul')(({ theme }) => ({
  display: 'flex',
  'a': {
    margin: '0 6px',
    display: 'flex',
  },
  // [theme.breakpoints.down('lg')]: {
  //   display: 'none',
  // },
  // [theme.breakpoints.down('md')]: {
  //   display: 'flex',
  // },
}))

export default SocialNetworks
