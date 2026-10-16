import { useState } from 'react'

const textos = {
  pt: {
    titulo: 'Currículo',
    escolha: 'Escolha a versão do currículo:',
    ver: 'Ver currículo',
    esconder: 'Esconder currículo',
    baixar: 'Baixar PDF',
    titleFrame: 'Currículo em PDF',
  },
  en: {
    titulo: 'Resume',
    escolha: 'Choose the resume version:',
    ver: 'View resume',
    esconder: 'Hide resume',
    baixar: 'Download PDF',
    titleFrame: 'Resume in PDF',
  },
}

const versoes = [
  {
    id: 'pt',
    rotulo: 'Português',
    bandeira: 'fi-br',
    arquivo: '/curriculo-pt.pdf',
    nomeDownload: 'Daniell_Cardoso_Curriculo.pdf',
  },
  {
    id: 'en',
    rotulo: 'English',
    bandeira: 'fi-us',
    arquivo: '/curriculo-en.pdf',
    nomeDownload: 'Daniell_Cardoso_Resume.pdf',
  },
]

function Curriculo({ idioma }) {
  const t = textos[idioma]
  const [aberto, setAberto] = useState(false)
  // null = acompanha o idioma do site; depois que a pessoa escolhe, vale a escolha
  const [escolhida, setEscolhida] = useState(null)
  const versao = escolhida ?? idioma
  const atual = versoes.find((v) => v.id === versao)

  return (
    <section id="curriculo">
      <h2>{t.titulo}</h2>

      <div className="curriculo__versoes">
        <span>{t.escolha}</span>
        {versoes.map((v) => (
          <button
            key={v.id}
            className={`botao botao--contorno ${v.id === versao ? 'curriculo__versao--ativa' : ''}`}
            onClick={() => setEscolhida(v.id)}
          >
            <span className={`fi ${v.bandeira}`}></span>
            {v.rotulo}
          </button>
        ))}
      </div>

      <div className="curriculo__botoes">
        <button className="botao" onClick={() => setAberto(!aberto)}>
          {aberto ? t.esconder : t.ver}
        </button>
        <a className="botao botao--contorno" href={atual.arquivo} download={atual.nomeDownload}>
          {t.baixar}
        </a>
      </div>

      {aberto && (
        <iframe
        key={atual.arquivo}
        className="curriculo__visualizador"
        src={`${atual.arquivo}#toolbar=0&navpanes=0&view=FitH`}
        title={t.titleFrame}
/>
      )}
    </section>
  )
}

export default Curriculo