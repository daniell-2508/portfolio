import projetos from '../data/projetos'

const textos = {
  pt: { titulo: 'Projetos', github: 'Ver no GitHub', alt: 'Tela do projeto' },
  en: { titulo: 'Projects', github: 'View on GitHub', alt: 'Screenshot of the project' },
}

function Projetos({ idioma }) {
  const t = textos[idioma]
  // copia o array e ordena do mais antigo ao mais recente
  const ordenados = [...projetos].sort((a, b) => a.ano - b.ano)

  return (
    <section id="projetos">
      <h2>{t.titulo}</h2>
      <div className="timeline">
        {ordenados.map((p) => (
          <article key={p.id} className="timeline__item">
            <span className="timeline__ano">{p.ano}</span>
            <h3>{p.nome}</h3>
            <p>{p.descricao[idioma]}</p>
            <ul className="tags">
              {p.tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>
            <img
              className="timeline__img"
              src={p.imagem}
              alt={`${t.alt} ${p.nome}`}
            />
            <a href={p.repositorio} target="_blank" rel="noreferrer">
              {t.github}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos