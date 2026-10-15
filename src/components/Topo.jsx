const textos = {
  pt: {
    ola: 'Olá, eu sou',
    funcao: 'Estudante de Engenharia de Software',
    foco: 'Back-end e banco de dados',
    projetos: 'Ver projetos',
    contato: 'Contato',
    alt: 'Foto de perfil de',
  },
  en: {
    ola: "Hi, I'm",
    funcao: 'Software Engineering Student',
    foco: 'Back-end and databases',
    projetos: 'View projects',
    contato: 'Contact',
    alt: 'Profile photo of',
  },
}

function Topo({ nome, idioma }) {
  const t = textos[idioma]

  return (
    <section className="topo">
      <img className="topo__foto" src="/foto-perfil.jpg" alt={`${t.alt} ${nome}`} />
      <div className="topo__texto">
        <p className="topo__ola">{t.ola}</p>
        <h1>{nome}</h1>
        <p className="topo__funcao">{t.funcao}</p>
        <p className="topo__foco">{t.foco}</p>
        <div className="topo__botoes">
          <a className="botao" href="#projetos">{t.projetos}</a>
          <a className="botao botao--contorno" href="#contato">{t.contato}</a>
        </div>
      </div>
    </section>
  )
}

export default Topo