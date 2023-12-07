import { useState } from 'react'
import { Alert, Button, Stack, TextField, Tooltip, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Footer from '@Components/Footer'
import Header from '@Components/Header'
import ContainerGrid from '@Pages/ContainerGrid'
import ContextProvider from '@Providers/ContextProvider'
import DeleteIcon from '@mui/icons-material/Delete'

export default function App(): JSX.Element {
  const [word, setWord] = useState<string | null>('')
  const searchHistory: string = localStorage.getItem('searchHistory') ?? ''
  const [history, setHistory] = useState<string[]>(searchHistory.split('|||'))
  const wordRegex = /^[a-z]+$/

  function isValidWord(): boolean {
    if (word != null) return wordRegex.test(word.trim().toLowerCase())
    else return false
  }

  const handleHistory = (): void => {
    if (word !== null && word.trim() !== '' && !history.includes(word)) {
      setHistory((prevWordList) => {
        const updatedWordList = [word, ...prevWordList.slice(0, 4)]
        localStorage.setItem('searchHistory', updatedWordList.join('|||'))
        return updatedWordList
      })
    }
  }

  const handleSearch = (): void => {
    if (word != null && !history.includes(word)) {
      if (isValidWord()) {
        // The word expected to be valid
        console.log(`VALID WORD:${word}`)
        handleHistory()
      } else {
        // The word expected to be invalid
        console.log(`INVALID WORD: ${word}`)
      }
    }
  }

  const handleSpecialKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') handleSearch()
  }

  const handleClearHistory = (): void => {
    localStorage.removeItem('searchHistory')
    setHistory([])
  }

  const formatWord = (longWord: string): string => {
    if (longWord.length >= 15) return longWord.substring(0, 12) + '...'
    else return longWord
  }

  return (
    <ContextProvider>
      <Header />
      <ContainerGrid>
        <Stack direction="row" alignItems="center" sx={{ py: 3 }}>
          <TextField
            label="Seek a word..."
            variant={word !== undefined ? 'filled' : 'standard'}
            fullWidth
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={handleSpecialKeyPress}
            value={word ?? ''}
          />
          <IconButton color="secondary" sx={{ pl: 2 }} onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Stack>
        {history !== null && history.length > 0 ? (
          <>
            <Stack direction="row" spacing={2}>
              <Typography variant="body1">
                Last 5 seeks
                <IconButton color="error" sx={{ pb: 1.5 }} onClick={handleClearHistory}>
                  <DeleteIcon />
                </IconButton>
              </Typography>
            </Stack>

            <Stack direction="row">
              {history.map((w) => {
                if (w === '') return <></>
                return (
                  <Tooltip title={w}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                      key={w}
                      onClick={() => setWord(w)}
                      fullWidth
                    >
                      {formatWord(w)}
                    </Button>
                  </Tooltip>
                )
              })}
            </Stack>
          </>
        ) : (
          <></>
        )}
        {isValidWord() && history.includes(word ?? '') ? (
          <Alert severity="success">
            This is a word— check it out! <Typography>{word}</Typography>
          </Alert>
        ) : (
          <></>
        )}
      </ContainerGrid>
      <Footer />
    </ContextProvider>
  )
}
