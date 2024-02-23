import AppBar from '@mui/material/AppBar'
import { Box, Typography, Toolbar } from '@mui/material'

export default function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            WordSeeker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
