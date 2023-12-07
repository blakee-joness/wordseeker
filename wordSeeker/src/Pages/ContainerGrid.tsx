import { Box, Grid } from '@mui/material'

export default function ContainerGrid({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Grid container>
        <Grid item xs={0} md={4}></Grid>
        <Grid item xs={12} md={4}>
          {children}
        </Grid>
        <Grid item sm={0} md={4}></Grid>
      </Grid>
    </Box>
  )
}
