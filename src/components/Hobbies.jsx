import { useEffect, useState } from 'react'
import Revelar from './Revelar'

const LETTERBOXD = 'https://boxd.it/hTUgj'
const PROVA = new Date('2026-12-06T00:00:00-03:00')

const textos = {
  pt: {
    titulo: 'Hobbies',
    favoritos: 'Meus favoritos',
    recentes: 'Notas recentes',
    letterboxd: 'Ver meu Letterboxd',
    prova: 'Meia Maratona da Pampulha · 6 de dezembro',
    dia: 'dia',
    dias: 'dias',
    hoje: 'É hoje!',
    de5: 'de 5',
  },
  en: {
    titulo: 'Hobbies',
    favoritos: 'My favorites',
    recentes: 'Recent ratings',
    letterboxd: 'See my Letterboxd',
    prova: 'Pampulha Half Marathon · December 6',
    dia: 'day',
    dias: 'days',
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

// favoritos: edita aqui quando mudar no app (e coloca o pôster em public/filmes/)
const favoritos = [
  { titulo: 'Good Will Hunting', img: '/filmes/good-will-hunting.jpg' },
  { titulo: 'About Time', img: '/filmes/about-time.jpg' },
  { titulo: 'The Notebook', img: '/filmes/the-notebook.jpg' },
  { titulo: 'The Odyssey', img: '/filmes/the-odyssey.jpg' },
]

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
    <figure className="poster">
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
  if (faltam > 0) {
    contagem = { numero: faltam, rotulo: faltam === 1 ? t.dia : t.dias }
  } else if (faltam === 0) {
    contagem = { numero: '🏁', rotulo: t.hoje }
  }

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
            <div className="esportes__corpo">
              <p>{esportes.texto[idioma]}</p>
              <div className="contagem">
                {contagem && (
                  <>
                    <span className="contagem__numero">{contagem.numero}</span>
                    <span className="contagem__rotulo">{contagem.rotulo}</span>
                  </>
                )}
                <span className="contagem__prova">{t.prova}</span>
              </div>
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

            <div className="filmes__colunas">
              <div>
                <h4 className="filmes__sub">{t.favoritos}</h4>
                <div className="filmes__grade">
                  {favoritos.map((f) => (
                    <Poster key={f.titulo} filme={f} rotulo={t.de5} />
                  ))}
                </div>
              </div>
              <div>
                <h4 className="filmes__sub">{t.recentes}</h4>
                <div className="filmes__grade">
                  {recentes.map((f) => (
                    <Poster key={f.titulo} filme={f} rotulo={t.de5} />
                  ))}
                </div>
              </div>
            </div>

            <a
              className="botao botao--contorno filmes__botao"
              href={LETTERBOXD}
              target="_blank"
              rel="noreferrer"
            >
              {t.letterboxd}
            </a>
          </article>
        </Revelar>
      </div>
    </section>
  )
}

export default Hobbies