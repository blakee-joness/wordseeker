import type { AlertProps, ButtonProps } from '@mui/material'
import { Alert, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'

export default function PaletteTest(): JSX.Element {
  const renderColorBox = (colorName: string): JSX.Element => {
    const themeColorCode = colorName.split('.')[0]
    return (
      <>
        <Alert color={themeColorCode as AlertProps['color']}>
          <Typography variant="body1">Swatch: {colorName}</Typography>
        </Alert>
        <Box sx={{ backgroundColor: colorName }} mb={1} width="100%" height="30px" />
        <ButtonGroup fullWidth>
          <Button size="small" color={themeColorCode as ButtonProps['color']} variant="contained">
            {colorName}
          </Button>
          <Button size="small" color={themeColorCode as ButtonProps['color']} variant="text">
            {colorName}
          </Button>
          <Button size="small" color={themeColorCode as ButtonProps['color']} variant="outlined">
            {colorName}
          </Button>
        </ButtonGroup>
      </>
    )
  }

  return (
    <Grid container spacing={5}>
      {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map((color) => (
        <Grid item xs={6} key={color}>
          {renderColorBox(`${color}.main`)}
          {renderColorBox(`${color}.light`)}
          {renderColorBox(`${color}.dark`)}
        </Grid>
      ))}
    </Grid>
  )
}
