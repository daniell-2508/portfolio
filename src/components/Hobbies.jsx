const textos = {
  pt: { titulo: 'Hobbies' },
  en: { titulo: 'Hobbies' },
}

const hobbies = [
  {
    id: 'esportes',
    icone: '🏃',
    titulo: { pt: 'Esportes', en: 'Sports' },
    texto: {
      pt: 'Ao longo da vida, pratiquei futebol, futsal, basquete, ping-pong e corrida. Hoje jogo pela atlética do meu curso, foco na musculação e estou me preparando para correr a Meia Maratona da Pampulha no fim do ano.',
      en: "Throughout my life, I've played soccer, futsal, basketball and table tennis, and I've also done a lot of running. Today I play for my course's student athletic association, focus on strength training, and I'm getting ready to run the Pampulha Half Marathon at the end of the year.",
    },
  },
  {
    id: 'filmes',
    icone: '🎬',
    titulo: { pt: 'Filmes', en: 'Movies' },
    texto: {
      pt: 'Sou apaixonado por filmes. Uso o Letterboxd para registrar tudo o que assisto e dar uma nota para cada um.',
      en: 'I am passionate about movies. I use Letterboxd to log everything I watch and give each film a rating.',
    },
  },
]

function Hobbies({ idioma }) {
  const t = textos[idioma]

  return (
    <section id="hobbies">
      <h2>{t.titulo}</h2>
      <div className="hobbies">
        {hobbies.map((h) => (
          <article key={h.id} className="hobby">
            <span className="hobby__icone">{h.icone}</span>
            <h3>{h.titulo[idioma]}</h3>
            <p>{h.texto[idioma]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Hobbies