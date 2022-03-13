import React, { createContext, ReactChild, useContext } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import { GlobalModal } from '../components/modals/GlobalModal'
import { Theme as CmsTheme } from '../generated'
import theme from '.'

interface ITheme {
  children: ReactChild
  cmsTheme: CmsTheme
}
const AppContext = createContext<Partial<CmsTheme>>({})
export const useAppContext = () => useContext(AppContext)

const Theme: React.FC<ITheme> = ({ children, cmsTheme }) => {
  const rTheme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={rTheme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={1}>
        <AppContext.Provider value={cmsTheme}>
          <GlobalModal>{children}</GlobalModal>
        </AppContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Theme
