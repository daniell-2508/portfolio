import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const nome = 'Daniell'

  return (
    <>
      <Header nome={nome} />
      <main>
        <section id="sobre"><h2>Sobre Mim</h2></section>
        <section id="projetos"><h2>Projetos</h2></section>
        <section id="experiencias"><h2>Experiências</h2></section>
        <section id="contato"><h2>Contato</h2></section>
      </main>
      <Footer nome={nome} />
    </>
  )
}

export default App