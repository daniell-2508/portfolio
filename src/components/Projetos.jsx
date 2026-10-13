import projetos from '../data/projetos'

function Projetos() {
  // copia o array e ordena do mais antigo ao mais recente
  const ordenados = [...projetos].sort((a, b) => a.ano - b.ano)

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="timeline">
        {ordenados.map((p) => (
          <article key={p.id} className="timeline__item">
            <span className="timeline__ano">{p.ano}</span>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <ul className="tags">
              {p.tecnologias.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <img
              className="timeline__img"
              src={p.imagem}
              alt={`Tela do projeto ${p.nome}`}
            />
            <a href={p.repositorio} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos