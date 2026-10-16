import { useState, useEffect } from 'react'
import Header from './components/Header'
import Topo from './components/Topo'
import SobreMim from './components/SobreMim'
import Hobbies from './components/Hobbies'
import Projetos from './components/Projetos'
import Experiencias from './components/Experiencias'
import Curriculo from './components/Curriculo'
import Contato from './components/Contato'
import Footer from './components/Footer'
import DetalhesBatman from './components/DetalhesBatman'

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
        <Topo nome={nome} idioma={idioma} tema={tema} />
        <SobreMim idioma={idioma} />
        <Hobbies idioma={idioma} />
        <Projetos idioma={idioma} />
        <Experiencias idioma={idioma} />
        <Curriculo idioma={idioma} />
        <Contato idioma={idioma} />
      </main>
         <Footer nome={nome} />
        <DetalhesBatman tema={tema} idioma={idioma} />
    </>
  )
}

export default App