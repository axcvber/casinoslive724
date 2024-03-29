import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          WebkitTapHighlightColor: 'transparent',
          margin: 0,
          padding: 0,
        },
        '*::after, *::before': {
          boxSizing: 'border-box',
        },
        html: {
          // marginRight: 'calc(-1 * (100vw - 100%))',
        },
        body: {
          lineHeight: 1,
          fontFamily: 'Fira Sans',
          overflowX: 'hidden',
          'ul, li': {
            listStyle: 'none',
          },
          a: {
            textDecoration: 'none',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 400,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Oswald', 'Teko', 'Fira Sans'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#4A70EB',
    },
    secondary: {
      main: '#F9E58A',
    },
    background: {
      default: '#0C1127',
      paper: '#172046',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
