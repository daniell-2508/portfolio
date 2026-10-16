import experiencias from '../data/experiencias'
import Revelar from './Revelar'

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
        {experiencias.map((e, i) => (
          <Revelar key={e.id} atraso={i * 120}>
            <article className="experiencia">
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
          </Revelar>
        ))}
      </div>
    </section>
  )
}

export default Experiencias