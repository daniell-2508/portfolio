import { useEffect } from 'react'
import batmanIcone from '../data/batmanIcone'

const MORCEGO =
  'M32 10 L36 3 L38 11 C46 7 56 8 63 15 C59 14 55 17 53 22 C50 18 47 19 45 24 C42 20 38 22 36 28 L32 31 L28 28 C26 22 22 20 19 24 C17 19 14 18 11 22 C9 17 5 14 1 15 C8 8 18 7 26 11 L28 3 Z'

const textos = {
  pt: { sinal: 'Gotham chamou! Me manda uma mensagem 🦇', titulo: 'Acender o Bat-Sinal' },
  en: { sinal: 'Gotham is calling! Send me a message 🦇', titulo: 'Light the Bat-Signal' },
}

export default function DetalhesBatman({ tema, idioma }) {
  const t = textos[idioma]

  // holofote que segue o mouse
  useEffect(() => {
    if (tema !== 'dark') return
    const mover = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', mover)
    return () => window.removeEventListener('pointermove', mover)
  }, [tema])

  if (tema !== 'dark') return null

  function chamar() {
    const alvo = document.getElementById('contato')
    if (alvo) alvo.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="gotham-luz" aria-hidden="true" />

      {[0, 1, 2].map((i) => (
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
        <img src={batmanIcone} alt="" />
        <span className="batsinal__fala">{t.sinal}</span>
      </button>
    </>
  )
}