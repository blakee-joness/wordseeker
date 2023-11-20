import Footer from '@Components/Footer'
import Header from '@Components/Header'
import ContainerGrid from '@Pages/ContainerGrid'
import PaletteTest from '@Pages/PaletteTest'
import ContextProvider from '@Providers/ContextProvider'

export default function App(): JSX.Element {
  return (
    <ContextProvider>
      <Header />
      <ContainerGrid>
        <PaletteTest />
      </ContainerGrid>
      <Footer />
    </ContextProvider>
  )
}
