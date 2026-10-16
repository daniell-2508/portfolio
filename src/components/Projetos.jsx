import { FaGithub } from 'react-icons/fa'
import projetos from '../data/projetos'
import Revelar from './Revelar'

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
      <div className="linha-tempo">
        {ordenados.map((p, i) => (
          <Revelar
            key={p.id}
            className={`projeto ${i % 2 === 0 ? 'projeto--esq' : 'projeto--dir'}`}
          >
            <article className="projeto__card">
              <span className="projeto__ano">{p.ano}</span>
              <img
                className="projeto__img"
                src={p.imagem}
                alt={`${t.alt} ${p.nome}`}
              />
              <h3>{p.nome}</h3>
              <p>{p.descricao[idioma]}</p>
              <ul className="tags">
                {p.tecnologias.map((tec) => (
                  <li key={tec}>{tec}</li>
                ))}
              </ul>
              <a
                className="botao botao--contorno"
                href={p.repositorio}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> {t.github}
              </a>
            </article>
          </Revelar>
        ))}
      </div>
    </section>
  )
}

export default Projetos