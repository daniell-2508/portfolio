import experiencias from '../data/experiencias'

function Experiencias() {
  return (
    <section id="experiencias">
      <h2>Experiências</h2>
      <div className="experiencias">
        {experiencias.map((e) => (
          <article key={e.id} className="experiencia">
            <h3>{e.cargo}</h3>
            <p className="experiencia__local">{e.instituicao}</p>
            <p className="experiencia__periodo">{e.periodo}</p>
            <p>{e.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiencias