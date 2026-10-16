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
    intro: 'Quer falar comigo? Preencha o formulário com o SEU nome e o SEU e-mail e escreva sua mensagem. Ela chega direto na minha caixa de entrada e eu respondo para o e-mail que você informar.',
    nome: 'Seu nome',
    dicaNome: 'Digite o seu nome, para eu saber quem está falando comigo.',
    placeholderNome: 'Ex.: Maria Silva',
    email: 'Seu e-mail',
    dicaEmail: 'Digite o seu e-mail: é para ele que eu vou responder.',
    placeholderEmail: 'seu.email@exemplo.com',
    mensagem: 'Mensagem',
    dicaMensagem: 'Escreva aqui a sua mensagem para mim.',
    placeholderMensagem: 'Olá, Daniell! Gostaria de conversar sobre...',
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
    intro: "Want to talk to me? Fill in the form with YOUR name and YOUR email, and write your message. It goes straight to my inbox, and I'll reply to the email you provide.",
    nome: 'Your name',
    dicaNome: 'Type your name, so I know who is writing to me.',
    placeholderNome: 'E.g.: Jane Smith',
    email: 'Your email',
    dicaEmail: 'Type your email: this is where I will reply.',
    placeholderEmail: 'your.email@example.com',
    mensagem: 'Message',
    dicaMensagem: 'Write your message to me here.',
    placeholderMensagem: "Hi, Daniell! I'd like to talk about...",
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

      <p className="contato__intro">{t.intro}</p>

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
          <small className="contato__dica">{t.dicaNome}</small>
          <input
            name="nome"
            value={form.nome}
            onChange={atualizar}
            placeholder={t.placeholderNome}
          />
        </label>
        <label>
          {t.email}
          <small className="contato__dica">{t.dicaEmail}</small>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={atualizar}
            placeholder={t.placeholderEmail}
          />
        </label>
        <label>
          {t.mensagem}
          <small className="contato__dica">{t.dicaMensagem}</small>
          <textarea
            name="mensagem"
            rows="5"
            value={form.mensagem}
            onChange={atualizar}
            placeholder={t.placeholderMensagem}
          />
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