import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2b2a71',
    },
    secondary: {
      main: '#12d6be',
    },
    error: {
      main: '#b53228',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#252462',
    },
    secondary: {
      main: '#0e9e8d',
    },
    error: {
      main: '#7c0000',
    },
    background: {
      default: '#b0b0b0',
      paper: '#EEEEEE',
    },
  },
})
