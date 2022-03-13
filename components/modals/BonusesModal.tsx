import React from 'react'
import Modal from '../Modal'
import { useGlobalModalContext } from './GlobalModal'
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAvailableBonusesQuery } from '../../generated'
import { shortString } from '../../utils/shortString'
import useLocale from '../../locales/useLocale'

const BonusesModal: React.FC<{ slug: string }> = ({ slug }) => {
  //props for modal refactor
  const t = useLocale()
  const router = useRouter()
  const { store, hideModal } = useGlobalModalContext()
  const { data, loading, error } = useAvailableBonusesQuery({
    variables: {
      casinoSlug: slug,
      locale: router.locale,
    },
  })

  const handleMoreInfoClick = (bonusSlug: string | null | undefined) => {
    if (bonusSlug) {
      hideModal()
      router.push(`/bonuses/${bonusSlug}`)
    }
  }

  if (error) {
    console.error(error)
    return null
  }

  return (
    <Modal
      width={'420px'}
      title={`${slug} ${t.casinoItem.bonusesLabel}`}
      open={store.isOpen}
      onClose={hideModal}
      isClosingOverlay
      disableGutters
    >
      {loading ? (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ width: '100%', height: '200px' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box my={1}>
          {data &&
            data.bonuses?.data.map((item) => (
              <Grid container key={item.id} py={1} px={3}>
                <Grid item xs={12} sm={6} sx={{ pr: { xs: 0, sm: 2 } }}>
                  <Image
                    priority
                    layout='responsive'
                    placeholder='blur'
                    blurDataURL={item.attributes?.image.data?.attributes?.formats.thumbnail.url}
                    width={item.attributes?.image.data?.attributes?.formats.thumbnail.width}
                    height={item.attributes?.image.data?.attributes?.formats.thumbnail.height}
                    src={item.attributes?.image.data?.attributes?.formats.thumbnail.url}
                    alt={item.attributes?.image.data?.attributes?.alternativeText || ''}
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ pt: { xs: 1, sm: 0 } }}>
                  <Typography sx={{ wordBreak: 'break-word' }} mb={1}>
                    {shortString(item.attributes?.title || '', 40)}
                  </Typography>
                  <Button
                    onClick={() => handleMoreInfoClick(item.attributes?.slug)}
                    variant='outlined'
                    color='secondary'
                  >
                    {t.button.details}
                  </Button>
                </Grid>
              </Grid>
            ))}
        </Box>
      )}
    </Modal>
  )
}

export default BonusesModal
