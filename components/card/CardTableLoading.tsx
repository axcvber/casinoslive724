import { Grid, Skeleton, Stack } from '@mui/material'

const CardTableLoading = () => {
  return (
    <>
      {Array(12)
        .fill(0)
        .map((_, inx: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={inx} sx={{ padding: '8px' }}>
            <Stack>
              <Skeleton
                variant='rectangular'
                height={158}
                sx={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px', bgcolor: 'background.paper' }}
              />

              <Skeleton
                animation='wave'
                variant='rectangular'
                height={34}
                sx={{
                  bgcolor: 'primary.dark',
                  borderRadius: 0,
                  borderBottomRightRadius: '10px',
                  borderBottomLeftRadius: '10px',
                }}
              />
            </Stack>
          </Grid>
        ))}
    </>
  )
}

export default CardTableLoading
