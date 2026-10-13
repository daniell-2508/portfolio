import Header from './components/Header'
import Footer from './components/Footer'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'

function App() {
  const nome = 'Daniell'

  return (
    <>
      <Header nome={nome} />
      <main>
        <SobreMim />
        <Projetos />
        <Experiencias/>
        <Contato />
      </main>
      <Footer nome={nome} />
    </>
  )
}

export default App