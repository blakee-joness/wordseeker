import { Box, Container, Link, Typography, useTheme } from '@mui/material'

export default function Footer(): JSX.Element {
  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: 'primary.light', p: 2, position: 'fixed', bottom: 0, width: '100%' }}>
      <Container maxWidth="sm" sx={{ color: theme.palette.common.white }}>
        <Typography variant="body2" align="center">
          Created by{' '}
          <Link
            target="none"
            href="https://github.com/blakee-joness/"
            sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}
          >
            @blakee-joness
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  )
}
