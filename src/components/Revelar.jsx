import { useEffect, useRef } from 'react'

function Revelar({ as: Tag = 'div', className = '', atraso = 0, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzido || !('IntersectionObserver' in window)) {
      el.classList.add('revelado')
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.classList.add('revelado')
          observador.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observador.observe(el)
    return () => observador.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`revelar ${className}`}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Revelar