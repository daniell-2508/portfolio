import { useState, useEffect } from 'react'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Topo from './components/Topo'

function App() {
  const nome = 'Daniell'
  const [idioma, setIdioma] = useState('pt')
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'light')

  // Sempre que o tema muda, aplica na página e guarda a escolha
  useEffect(() => {
    document.documentElement.dataset.tema = tema
    localStorage.setItem('tema', tema)
  }, [tema])

  return (
    <>
      <Header
        nome={nome}
        idioma={idioma}
        setIdioma={setIdioma}
        tema={tema}
        setTema={setTema}
      />
      <main>
        <Topo nome={nome} idioma={idioma} />
        <SobreMim idioma={idioma} />
        <Projetos />
        <Experiencias />
        <Contato />
      </main>
      <Footer nome={nome} />
    </>
  )
}

export default App