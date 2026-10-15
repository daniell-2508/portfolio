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

const textos = {
  pt: {
    titulo: 'Contato',
    nome: 'Nome',
    email: 'E-mail',
    mensagem: 'Mensagem',
    enviar: 'Enviar',
    enviando: 'Enviando...',
    erroNome: 'Digite seu nome.',
    erroEmail: 'Digite um e-mail válido.',
    erroMensagem: 'A mensagem precisa ter pelo menos 10 caracteres.',
    ok: 'Mensagem enviada!',
    falha: 'Não foi possível enviar. Tente novamente.',
  },
  en: {
    titulo: 'Contact',
    nome: 'Name',
    email: 'Email',
    mensagem: 'Message',
    enviar: 'Send',
    enviando: 'Sending...',
    erroNome: 'Enter your name.',
    erroEmail: 'Enter a valid email.',
    erroMensagem: 'The message must have at least 10 characters.',
    ok: 'Message sent!',
    falha: 'Could not send. Please try again.',
  },
}

function Contato({ idioma }) {
  const t = textos[idioma]
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
      setErro(t.erroNome)
      return
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      setErro(t.erroEmail)
      return
    }
    if (form.mensagem.trim().length < 10) {
      setErro(t.erroMensagem)
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
      <h2>{t.titulo}</h2>

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
          {t.nome}
          <input name="nome" value={form.nome} onChange={atualizar} />
        </label>
        <label>
          {t.email}
          <input name="email" type="email" value={form.email} onChange={atualizar} />
        </label>
        <label>
          {t.mensagem}
          <textarea name="mensagem" rows="5" value={form.mensagem} onChange={atualizar} />
        </label>

        {erro && <p className="contato__erro">{erro}</p>}
        {status === 'sucesso' && <p className="contato__ok">{t.ok}</p>}
        {status === 'erro' && <p className="contato__erro">{t.falha}</p>}

        <button type="submit" disabled={status === 'enviando'}>
          {status === 'enviando' ? t.enviando : t.enviar}
        </button>
      </form>
    </section>
  )
}

export default Contato