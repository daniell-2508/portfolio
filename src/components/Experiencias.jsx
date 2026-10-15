import experiencias from '../data/experiencias'

const textos = {
  pt: { titulo: 'Experiências', certificado: 'Ver certificado' },
  en: { titulo: 'Experience', certificado: 'View certificate' },
}

function Experiencias({ idioma }) {
  const t = textos[idioma]

  return (
    <section id="experiencias">
      <h2>{t.titulo}</h2>
      <div className="experiencias">
        {experiencias.map((e) => (
          <article key={e.id} className="experiencia">
            <h3>{e.cargo[idioma]}</h3>
            <p className="experiencia__local">{e.instituicao[idioma]}</p>
            <p className="experiencia__periodo">{e.periodo[idioma]}</p>
            <p>{e.descricao[idioma]}</p>
            {e.certificado && (
              <a href={e.certificado} target="_blank" rel="noreferrer">
                {t.certificado}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiencias