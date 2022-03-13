import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import useLocale from '../../locales/useLocale'

interface ICardTableError {
  onRetry: () => void
}

const CardTableError: React.FC<ICardTableError> = ({ onRetry }) => {
  const t = useLocale()

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Image priority src='/icons/server.png' width={100} height={100} alt='server-error' />
        <Typography variant='h5' sx={{ py: 1 }} fontFamily={'inherit'}>
          {t.cardTable.error.title}
        </Typography>
        <Typography variant='body2' color='gray' sx={{ pb: 2 }} fontFamily={'inherit'}>
          {t.cardTable.error.subtitle}
        </Typography>
        <Button size='small' variant='contained' onClick={onRetry}>
          {t.cardTable.error.button}
        </Button>
      </Box>
    </Box>
  )
}

export default CardTableError
