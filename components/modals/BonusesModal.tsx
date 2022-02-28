import React from 'react'
import Modal from '../Modal'
import { useGlobalModalContext } from './GlobalModal'
import { useQuery, gql } from '@apollo/client'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BonusesModal = () => {
  const slug = 'riccobet'
  const router = useRouter()
  const { store, hideModal } = useGlobalModalContext()
  const { data, loading, error } = useQuery(
    gql`
      query {
        bonuses(filters: { casino: { slug: { eq: "riccobet" } } }) {
          data {
            id
            attributes {
              image {
                data {
                  attributes {
                    formats
                    alternativeText
                  }
                }
              }
              title
              casino {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const handleMoreInfoClick = () => {
    router.push(`/bonuses/${slug}`)
  }

  if (error) {
    console.error(error)
    return null
  }

  return (
    <Modal
      width={'420px'}
      title='RiccoBet bonuses'
      subtitle=''
      open={store.isOpen}
      onClose={hideModal}
      isClosingOverlay
    >
      {loading ? (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '200px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ maxHeight: '700px' }}>
          {data.bonuses.data.map((item: any) => (
            <Box key={item.id} display='flex' my={2}>
              <Box sx={{ width: '150px' }}>
                <Image
                  priority
                  layout='responsive'
                  placeholder='blur'
                  blurDataURL={item.attributes.image.data.attributes.formats.thumbnail.url}
                  width={item.attributes.image.data.attributes.formats.thumbnail.width}
                  height={item.attributes.image.data.attributes.formats.thumbnail.height}
                  src={item.attributes.image.data.attributes.formats.thumbnail.url}
                  alt={item.attributes.image.data.attributes.alternativeText}
                />
              </Box>
              <Box ml={2}>
                <Typography mb={1}>{item.attributes.title}</Typography>
                <Button onClick={handleMoreInfoClick} size='small' variant='outlined' color='secondary'>
                  More info
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Modal>
  )
}

export default BonusesModal
