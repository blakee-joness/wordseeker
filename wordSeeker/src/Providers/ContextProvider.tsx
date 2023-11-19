import { lightTheme } from '@Theme/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense } from 'react'

export default function ContextProvider({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <Suspense>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Suspense>
  )
}
