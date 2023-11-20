import { Grid } from '@mui/material'

export default function ContainerGrid({ children }: { children?: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <Grid container sx={{ my: 1 }} spacing={2}>
      <Grid item xs={2} sm={3} />
      <Grid item xs>
        {children}
      </Grid>
      <Grid item xs={2} sm={3} />
    </Grid>
  )
}
