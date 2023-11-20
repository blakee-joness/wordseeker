import { darkTheme, lightTheme } from '@Theme/themes'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Suspense, createContext, useState } from 'react'

export const ThemeModeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
})

export default function ContextProvider({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Suspense>
      <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </Suspense>
  )
}
