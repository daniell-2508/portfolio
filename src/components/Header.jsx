import 'flag-icons/css/flag-icons.min.css'
import batmanIcone from '../data/batmanIcone'

const links = {
  pt: [
    { id: 'sobre', texto: 'Sobre Mim' },
    { id: 'hobbies', texto: 'Hobbies' },
    { id: 'projetos', texto: 'Projetos' },
    { id: 'experiencias', texto: 'Experiências' },
    { id: 'curriculo', texto: 'Currículo' },
    { id: 'contato', texto: 'Contato' },
  ],
  en: [
    { id: 'sobre', texto: 'About' },
    { id: 'hobbies', texto: 'Hobbies' },
    { id: 'projetos', texto: 'Projects' },
    { id: 'experiencias', texto: 'Experience' },
    { id: 'curriculo', texto: 'Resume' },
    { id: 'contato', texto: 'Contact' },
  ],
}

function Header({ idioma, setIdioma, tema, setTema }) {
  // O botão mostra a bandeira do idioma PARA O QUAL vai trocar
  const proximoIdioma = idioma === 'pt' ? 'en' : 'pt'
  const bandeira = idioma === 'pt' ? 'fi-us' : 'fi-br'
  const rotuloIdioma = idioma === 'pt' ? 'Switch to English' : 'Mudar para português'

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__links">
          {links[idioma].map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__acoes">
        <button
          className="botao-icone"
          onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}
          aria-label="Tema claro/escuro"
        >
          {tema === 'light' ? (
            <img className="icone-batman" src={batmanIcone} alt="Modo escuro" />
          ) : (
            '☀️'
          )}
        </button>

        <button
          className="bandeira"
          onClick={() => setIdioma(proximoIdioma)}
          aria-label={rotuloIdioma}
          title={rotuloIdioma}
        >
          <span className={`fi ${bandeira}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Header