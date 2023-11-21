import { darkTheme, lightTheme } from '@Theme/themes'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import { Suspense, createContext, lazy, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const ThemeModeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
})

const ReactQueryDevtoolsProduction = lazy(async () =>
  // eslint-disable-next-line import/extensions
  import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
    default: d.ReactQueryDevtools,
  }))
)

export default function ContextProvider({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)
  const queryClient = new QueryClient()

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Suspense>
      <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtoolsProduction
              position="right"
              buttonPosition="bottom-right"
              initialIsOpen={localStorage.getItem('TanstackQueryDevtools.open') === 'true'}
            />
          </QueryClientProvider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </Suspense>
  )
}
