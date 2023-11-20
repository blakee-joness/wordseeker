import Footer from '@Components/Footer'
import Header from '@Components/Header'
import ContainerGrid from '@Pages/ContainerGrid'
import ContextProvider from '@Providers/ContextProvider'
import { Button } from '@mui/material'

export default function App(): JSX.Element {
  return (
    <ContextProvider>
      <Header />
      <ContainerGrid>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
      </ContainerGrid>
      <Footer />
    </ContextProvider>
  )
}
