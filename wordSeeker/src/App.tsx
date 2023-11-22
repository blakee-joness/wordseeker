import { useState } from 'react'
import { Alert, Button, ButtonGroup, Stack, TextField, Tooltip, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Footer from '@Components/Footer'
import Header from '@Components/Header'
import ContainerGrid from '@Pages/ContainerGrid'
import ContextProvider from '@Providers/ContextProvider'

export default function App(): JSX.Element {
  const [word, setWord] = useState<string | null>('')
  const searchHistory: string = localStorage.getItem('searchHistory') ?? ''
  const [wordList, setWordList] = useState<string[]>(searchHistory.split('|||'))

  const handleSearch = (): void => {
    if (word !== null && word.trim() !== '') {
      setWordList((prevWordList) => {
        const updatedWordList = [word, ...prevWordList.slice(0, 4)]
        localStorage.setItem('searchHistory', updatedWordList.join('|||'))
        return updatedWordList
      })
    }
  }

  const formatWord = (longWord: string): string => longWord.substring(0, 12) + '...'

  return (
    <ContextProvider>
      <Header />
      <ContainerGrid>
        <Stack direction="row" alignItems="center" sx={{ pb: 2 }}>
          <TextField
            label="Seek a word..."
            variant={word !== undefined ? 'filled' : 'standard'}
            fullWidth
            onChange={(e) => setWord(e.target.value)}
            value={word ?? ''}
          />
          <IconButton color="secondary" sx={{ pl: 2 }} onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Stack>
        {wordList !== null && wordList.length > 0 ? (
          <>
            <Typography variant="caption">Last 5 seeks</Typography>
            <ButtonGroup variant="contained" color="secondary" fullWidth>
              {wordList.map((w) => {
                if (w === '') return <></>
                return (
                  <Tooltip title={w}>
                    <Button key={w} onClick={() => setWord(w)}>
                      {formatWord(w)}
                    </Button>
                  </Tooltip>
                )
              })}
            </ButtonGroup>
          </>
        ) : (
          <></>
        )}
        {word !== null && word.trim() !== '' ? (
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
