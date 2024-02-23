import Footer from '@Components/Footer'
import Header from '@Components/Header'
import ContainerGrid from '@Pages/ContainerGrid'
import ContextProvider from '@Providers/ContextProvider'

import Results from '@Pages/Results'

export default function App(): JSX.Element {
  return (
    <ContextProvider>
      <Header />
      <ContainerGrid>
        <Results />
      </ContainerGrid>
      <Footer />
    </ContextProvider>
  )
}
