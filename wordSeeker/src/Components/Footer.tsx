import { Box, Container, IconButton, Link, Typography, useTheme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useContext } from 'react'
import { ThemeModeContext } from '@Providers/ContextProvider'
import { Brightness4, Brightness5Outlined } from '@mui/icons-material'

export default function Footer(): JSX.Element {
  const { isDarkMode, toggleTheme } = useContext(ThemeModeContext)
  const theme = useTheme()
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="sm" sx={{ color: theme.palette.common.white }}>
        <Typography variant="body2" align="center">
          {'Created by '}
          <Link
            target="none"
            href="https://github.com/blakee-joness/"
            sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}
          >
            @blakee-joness
          </Link>
          {' • Source on '}
          <Link
            target="none"
            href="https://github.com/blakee-joness/wordseeker/"
            sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}
          >
            GitHub <GitHubIcon fontSize="small" />
          </Link>
          {` • ${new Date().getFullYear()}`}
          {` • Toggle Theme`}
          <IconButton color="primary" onClick={toggleTheme}>
            {isDarkMode ? (
              <Brightness5Outlined sx={{ color: theme.palette.primary.light }} />
            ) : (
              <Brightness4 sx={{ color: theme.palette.primary.dark }} />
            )}
          </IconButton>
        </Typography>
      </Container>
    </Box>
  )
}
