import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const SERVICE_ID = 'service_ycet2rp'
const TEMPLATE_ID = 'template_gyhxbch'
const PUBLIC_KEY = 'wuMaLGDsDa7HGEH8w'

const links = [
  { id: 'email', rotulo: 'E-mail', href: 'mailto:daniellocs25@gmail.com', icone: <FaEnvelope /> },
  { id: 'whatsapp', rotulo: 'WhatsApp', href: 'https://wa.me/5531998007228', icone: <FaWhatsapp /> },
  { id: 'linkedin', rotulo: 'LinkedIn', href: 'https://www.linkedin.com/in/daniellcardoso/', icone: <FaLinkedin /> },
  { id: 'github', rotulo: 'GitHub', href: 'https://github.com/daniell-2508', icone: <FaGithub /> },
]

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [erro, setErro] = useState('')
  const [status, setStatus] = useState('parado')

  function atualizar(evento) {
    setForm({ ...form, [evento.target.name]: evento.target.value })
  }

  function enviar(evento) {
    evento.preventDefault()
    setErro('')
    setStatus('parado')

    if (form.nome.trim().length < 2) {
      setErro('Digite seu nome.')
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      setErro('Digite um e-mail válido.')
      return
    }
    if (form.mensagem.trim().length < 10) {
      setErro('A mensagem precisa ter pelo menos 10 caracteres.')
      return
    }

    setStatus('enviando')
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.nome,
          email: form.email,
          message: form.mensagem,
          title: 'Mensagem do portfólio',
          time: new Date().toLocaleString('pt-BR'),
        },
        { publicKey: PUBLIC_KEY }
      )
      .then(() => {
        setStatus('sucesso')
        setForm({ nome: '', email: '', mensagem: '' })
      })
      .catch(() => {
        setStatus('erro')
      })
  }

  return (
    <section id="contato">
      <h2>Contato</h2>

      <ul className="contato__links">
        {links.map((l) => (
          <li key={l.id}>
            <a href={l.href} target="_blank" rel="noreferrer" aria-label={l.rotulo} title={l.rotulo}>
              {l.icone}
            </a>
          </li>
        ))}
      </ul>

      <form className="contato__form" onSubmit={enviar}>
        <label>
          Nome
            <input name="nome" value={form.nome} onChange={atualizar} />
        </label>
        <label>
          E-mail
          <input name="email" type="email" value={form.email} onChange={atualizar} />
        </label>
        <label>
          Mensagem
          <textarea name="mensagem" rows="5" value={form.mensagem} onChange={atualizar} />
        </label>

        {erro && <p className="contato__erro">{erro}</p>}
        {status === 'sucesso' && <p className="contato__ok">Mensagem enviada!</p>}
        {status === 'erro' && <p className="contato__erro">Não foi possível enviar. Tente novamente.</p>}

        <button type="submit" disabled={status === 'enviando'}>
          {status === 'enviando' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  )
}

export default Contato