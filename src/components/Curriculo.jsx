import { useState } from 'react'

const textos = {
  pt: {
    titulo: 'Currículo',
    ver: 'Ver currículo',
    esconder: 'Esconder currículo',
    abrir: 'Abrir em nova aba',
    baixar: 'Baixar PDF',
    arquivo: '/curriculo-pt.pdf',
    titleFrame: 'Currículo em PDF',
  },
  en: {
    titulo: 'Resume',
    ver: 'View resume',
    esconder: 'Hide resume',
    abrir: 'Open in new tab',
    baixar: 'Download PDF',
    arquivo: '/curriculo-en.pdf',
    titleFrame: 'Resume in PDF',
  },
}

function Curriculo({ idioma }) {
  const t = textos[idioma]
  const [aberto, setAberto] = useState(false)

  return (
    <section id="curriculo">
      <h2>{t.titulo}</h2>

      <div className="curriculo__botoes">
        <button className="botao" onClick={() => setAberto(!aberto)}>
          {aberto ? t.esconder : t.ver}
        </button>
        <a className="botao botao--contorno" href={t.arquivo} target="_blank" rel="noreferrer">
          {t.abrir}
        </a>
        <a className="botao botao--contorno" href={t.arquivo} download>
          {t.baixar}
        </a>
      </div>

      {aberto && (
        <iframe
          className="curriculo__visualizador"
          src={t.arquivo}
          title={t.titleFrame}
        />
      )}
    </section>
  )
}

export default Curriculo