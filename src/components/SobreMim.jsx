import { useState } from 'react'

const textos = {
  pt: {
    titulo: 'Sobre Mim',
    botao: 'English',
    paragrafos: [
      'Sou estudante de Engenharia de Software na PUC Minas, em Belo Horizonte.',
      'Minha área de atuação é [ESCREVA AQUI]. Tenho interesse em [ESCREVA AQUI].',
      'Meu objetivo profissional é [ESCREVA AQUI].',
    ],
  },
  en: {
    titulo: 'About Me',
    botao: 'Português',
    paragrafos: [
      'I am a Software Engineering student at PUC Minas, in Belo Horizonte, Brazil.',
      'My field of work is [WRITE HERE]. I am interested in [WRITE HERE].',
      'My professional goal is [WRITE HERE].',
    ],
  },
}

function SobreMim() {
  const [idioma, setIdioma] = useState('pt')
  const t = textos[idioma]

  function alternarIdioma() {
    setIdioma(idioma === 'pt' ? 'en' : 'pt')
  }

  return (
    <section id="sobre">
      <h2>{t.titulo}</h2>
      <button className="botao-idioma" onClick={alternarIdioma}>
        {t.botao}
      </button>
      <div className="sobre__texto">
        {t.paragrafos.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  )
}

export default SobreMim