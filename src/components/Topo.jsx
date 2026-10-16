const textos = {
  pt: {
    estudo: 'Cursando o 2º período de Engenharia de Software na PUC Minas, em Belo Horizonte.',
    selo: 'Aberto para trabalho',
    curriculo: 'Currículo',
    projetos: 'Ver projetos',
    contato: 'Contato',
    alt: 'Foto de perfil de',
  },
  en: {
    estudo: 'Second-semester Software Engineering student at PUC Minas, in Belo Horizonte, Brazil.',
    selo: 'Open to work',
    curriculo: 'Resume',
    projetos: 'View projects',
    contato: 'Contact',
    alt: 'Profile photo of',
  },
}

function Topo({ nome, idioma, tema }) {
  const t = textos[idioma]

  return (
    <section className="topo">
      <div className="topo__lateral">
        <div className="topo__foto-caixa">
          <img className="topo__foto" src="/foto-perfil.jpg" alt={`${t.alt} ${nome}`} />
          {tema === 'dark' && (
            <img className="topo__sticker" src="/batman-sticker.png" alt="" />
          )}
        </div>
        <p className="topo__selo">
          <span className="topo__selo-ponto"></span>
          {t.selo}
        </p>
      </div>
      <div className="topo__texto">
        <h1>{nome}</h1>
        <p className="topo__funcao">{t.estudo}</p>
        <div className="topo__botoes">
          <a className="botao" href="#curriculo">{t.curriculo}</a>
          <a className="botao botao--contorno" href="#projetos">{t.projetos}</a>
          <a className="botao botao--contorno" href="#contato">{t.contato}</a>
        </div>
      </div>
    </section>
  )
}

export default Topo