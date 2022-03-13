import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import useLocale from '../../locales/useLocale'

const CardTableEmpty = () => {
  const t = useLocale()

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Image width={100} height={100} src='/icons/package.png' alt='package' />
        <Typography variant='h6' sx={{ py: 2 }} fontFamily={'inherit'}>
          {t.cardTable.emptyTitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardTableEmpty
