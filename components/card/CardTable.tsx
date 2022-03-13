import React, { ReactElement } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Pagination, Paper, Stack, Typography } from '@mui/material'
import { Element, scroller } from 'react-scroll'
import CardTableBody from './CardTableBody'

interface ICardTable {
  variant: 'casino' | 'bonus' | 'coupon'
  data: any
  title: string
  icon: ReactElement
  isLoading: boolean
  pageCount: number | undefined
  page: number | undefined
  totalCount: number | undefined
  pageSize: number | undefined
  isError: boolean
  refetch: (variables?: { start?: number; limit?: number; locale?: any }) => Promise<any>
}

const CardTable: React.FC<ICardTable> = ({
  title,
  icon,
  variant,
  data,
  isLoading,
  pageCount,
  page,
  totalCount,
  isError,
  refetch,
  pageSize,
}) => {
  const handleChange = (_: any, selectedPage: number) => {
    if (selectedPage !== page) {
      if (pageSize) {
        refetch({
          start: (selectedPage - 1) * pageSize,
        })
      }
      scroller.scrollTo('card-table', {
        offset: -64,
      })
    }
  }

  return (
    <Paper component={'section'} elevation={10} sx={{ my: 2, background: '#101732' }}>
      <Element name='card-table'>
        <Header>
          {icon}
          <Typography component='h2' variant='body1' sx={{ textTransform: 'uppercase' }}>
            {title}
          </Typography>
        </Header>
        <Grid container sx={{ padding: '15px' }}>
          <CardTableBody
            isLoading={isLoading}
            isError={isError}
            variant={variant}
            data={data}
            onRetry={() => refetch()}
          />
        </Grid>

        <Stack
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ width: '100%', height: '50px', bgcolor: 'background.paper' }}
        >
          {!!totalCount && totalCount > 12 && (
            <Pagination
              sx={{ userSelect: 'none' }}
              onChange={handleChange}
              color='primary'
              page={page}
              count={pageCount}
            />
          )}
        </Stack>
      </Element>
    </Paper>
  )
}

const Header = styled('header')(({ theme }) => ({
  width: '100%',
  height: '50px',
  background: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  'svg': {
    fontSize: '26px',
    color: theme.palette.secondary.main,
    marginRight: '5px',
  },
}))

export default CardTable
