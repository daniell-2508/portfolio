import Header from './components/Header'
import Footer from './components/Footer'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'

function App() {
  const nome = 'Daniell'

  return (
    <>
      <Header nome={nome} />
      <main>
        <SobreMim />
        <Projetos />
        <Experiencias/>
        <section id="contato"><h2>Contato</h2></section>
      </main>
      <Footer nome={nome} />
    </>
  )
}

export default App