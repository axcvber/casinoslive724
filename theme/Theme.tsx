import React, { ReactChild } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import { GlobalModal } from '../components/modals/GlobalModal'
import theme from '.'
import Layout from '../components/Layout'

const Theme: React.FC<{ children: ReactChild }> = ({ children }) => {
  const rTheme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={rTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={1}>
        <GlobalModal>{children}</GlobalModal>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Theme
