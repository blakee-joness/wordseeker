import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function App(): JSX.Element {
  type Mode = 'light' | 'dark'
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem('theme') as Mode) ?? 'light'
  })
  const [checked, setChecked] = useState<boolean>(true)
  useEffect(() => {
    if (mode === 'light') {
      setChecked(true)
    } else {
      setChecked(false)
    }
    localStorage.setItem('theme', mode)
  }, [mode])
  return (
    <>
      <Typography variant="h1">wordSeeker</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} />}
          label={`Currently using ${mode} mode`}
          onChange={(_, chk) => {
            if (chk) setMode('light')
            else setMode('dark')
          }}
        />
      </FormGroup>
    </>
  )
}
