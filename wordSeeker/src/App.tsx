import ContextProvider from '@Providers/ContextProvider'
import { Button } from '@mui/material'

export default function App(): JSX.Element {
  return (
    <ContextProvider>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="error">Error</Button>
    </ContextProvider>
  )
}
