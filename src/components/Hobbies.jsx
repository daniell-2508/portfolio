import { useEffect, useState } from 'react'
import Revelar from './Revelar'

const LETTERBOXD = 'https://boxd.it/hTUgj'
const PROVA = new Date('2026-12-06T00:00:00-03:00')

const textos = {
  pt: {
    titulo: 'Hobbies',
    recentes: 'Notas recentes',
    letterboxd: 'Ver meu Letterboxd',
    prova: 'Meia Maratona da Pampulha · 6 dez',
    faltam: (n) => (n === 1 ? 'Falta 1 dia' : `Faltam ${n} dias`),
    hoje: 'É hoje!',
    de5: 'de 5',
  },
  en: {
    titulo: 'Hobbies',
    recentes: 'Recent ratings',
    letterboxd: 'See my Letterboxd',
    prova: 'Pampulha Half Marathon · Dec 6',
    faltam: (n) => (n === 1 ? '1 day to go' : `${n} days to go`),
    hoje: "It's today!",
    de5: 'out of 5',
  },
}

const esportes = {
  icone: '🏃',
  titulo: { pt: 'Esportes', en: 'Sports' },
  texto: {
    pt: 'Ao longo da vida, pratiquei futebol, futsal, basquete, ping-pong e corrida. Hoje jogo pela atlética do meu curso, foco na musculação e estou me preparando para correr a Meia Maratona da Pampulha no fim do ano.',
    en: "Throughout my life, I've played soccer, futsal, basketball and table tennis, and I've also done a lot of running. Today I play for my course's student athletic association, focus on strength training, and I'm getting ready to run the Pampulha Half Marathon at the end of the year.",
  },
}

const filmes = {
  icone: '🎬',
  titulo: { pt: 'Filmes', en: 'Movies' },
  texto: {
    pt: 'Sou apaixonado por filmes. Uso o Letterboxd para registrar tudo o que assisto e dar uma nota para cada um.',
    en: 'I am passionate about movies. I use Letterboxd to log everything I watch and give each film a rating.',
  },
}

// reserva: aparece se a busca automática do Letterboxd falhar
const recentesFixos = [
  { titulo: 'Tenet', img: '/filmes/tenet.jpg', nota: 3.5 },
  { titulo: 'Memento', img: '/filmes/memento.jpg', nota: 4.5 },
  { titulo: 'The Sixth Sense', img: '/filmes/the-sixth-sense.jpg', nota: 5 },
  { titulo: 'Sinners', img: '/filmes/sinners.jpg', nota: 5 },
]

function Estrelas({ nota, rotulo }) {
  return (
    <span className="estrelas" role="img" aria-label={`${nota} ${rotulo}`}>
      {'★'.repeat(Math.floor(nota))}
      {nota % 1 !== 0 && '½'}
    </span>
  )
}

function Poster({ filme, rotulo }) {
  return (
    <figure className="poster" title={filme.titulo}>
      <img src={filme.img} alt={`Poster: ${filme.titulo}`} loading="lazy" />
      <figcaption>
        <span className="poster__titulo">{filme.titulo}</span>
        {filme.nota && <Estrelas nota={filme.nota} rotulo={rotulo} />}
      </figcaption>
    </figure>
  )
}

function Hobbies({ idioma }) {
  const t = textos[idioma]
  const [recentes, setRecentes] = useState(recentesFixos)

  // busca os filmes recentes direto do Letterboxd (via /api/letterboxd)
  useEffect(() => {
    fetch('/api/letterboxd')
      .then((r) => (r.ok ? r.json() : []))
      .then((dados) => {
        if (Array.isArray(dados) && dados.length > 0) setRecentes(dados)
      })
      .catch(() => {})
  }, [])

  const faltam = Math.ceil((PROVA - new Date()) / 86400000)
  let contagem = null
  if (faltam > 0) contagem = t.faltam(faltam)
  else if (faltam === 0) contagem = t.hoje

  return (
    <section id="hobbies">
      <h2>{t.titulo}</h2>
      <div className="hobbies">
        <Revelar className="hobby-slot">
          <article className="hobby">
            <div className="hobby__topo">
              <span className="hobby__icone">{esportes.icone}</span>
              <h3>{esportes.titulo[idioma]}</h3>
            </div>
            <p>{esportes.texto[idioma]}</p>
            <div className="hobby__rodape">
              <span className="pilula">
                🏁 {contagem && <strong>{contagem}</strong>}
                {contagem && ' · '}
                {t.prova}
              </span>
            </div>
          </article>
        </Revelar>

        <Revelar className="hobby-slot" atraso={120}>
          <article className="hobby">
            <div className="hobby__topo">
              <span className="hobby__icone">{filmes.icone}</span>
              <h3>{filmes.titulo[idioma]}</h3>
            </div>
            <p>{filmes.texto[idioma]}</p>

            <div className="filmes__grade">
              {recentes.map((f) => (
                <Poster key={f.titulo} filme={f} rotulo={t.de5} />
              ))}
            </div>

            <div className="hobby__rodape">
              <a
                className="botao botao--contorno botao--pequeno"
                href={LETTERBOXD}
                target="_blank"
                rel="noreferrer"
              >
                {t.letterboxd}
              </a>
            </div>
          </article>
        </Revelar>
      </div>
    </section>
  )
}

export default Hobbies