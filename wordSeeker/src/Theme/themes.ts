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
      main: '#000a71',
    },
    secondary: {
      main: '#0006be',
    },
    error: {
      main: '#000228',
    },
  },
})
