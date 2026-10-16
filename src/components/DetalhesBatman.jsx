import { useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'

const MORCEGO =
  'M32 10 L36 3 L38 11 C46 7 56 8 63 15 C59 14 55 17 53 22 C50 18 47 19 45 24 C42 20 38 22 36 28 L32 31 L28 28 C26 22 22 20 19 24 C17 19 14 18 11 22 C9 17 5 14 1 15 C8 8 18 7 26 11 L28 3 Z'

const textos = {
  pt: { sinal: 'Me mande uma mensagem! 🦇', titulo: 'Me mande uma mensagem' },
  en: { sinal: "Let's create together! 🦇", titulo: "Let's create together" },
}

export default function DetalhesBatman({ tema, idioma }) {
  const t = textos[idioma]
  const escuro = tema === 'dark'

  // holofote que segue o mouse (nos dois temas)
  useEffect(() => {
    const mover = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', mover)
    return () => window.removeEventListener('pointermove', mover)
  }, [])

  function chamar() {
    const alvo = document.getElementById('contato')
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="gotham-luz" aria-hidden="true" />

      {escuro &&
        [0, 1, 2].map((i) => (
          <svg
            key={i}
            className={`morcego morcego--${i}`}
            viewBox="0 0 64 32"
            aria-hidden="true"
          >
            <path d={MORCEGO} />
          </svg>
        ))}

      <button className="batsinal" onClick={chamar} title={t.titulo} aria-label={t.titulo}>
        {escuro ? (
          <svg className="batsinal__icone" viewBox="0 0 64 32" aria-hidden="true">
            <path d={MORCEGO} />
          </svg>
        ) : (
          <FaRegLightbulb className="batsinal__icone batsinal__icone--lampada" aria-hidden="true" />
        )}
        <span className="batsinal__fala">{t.sinal}</span>
      </button>
    </>
  )
}