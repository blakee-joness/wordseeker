import { darkTheme, lightTheme } from '@Theme/themes'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Suspense } from 'react'

export default function ContextProvider({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <Suspense>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Suspense>
  )
}
