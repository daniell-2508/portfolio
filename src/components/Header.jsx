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
function Header({ nome, idioma, setIdioma, tema, setTema }) {
  return (
    <header className="header">
      <span className="header__nome">{nome}</span>

      <nav>
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
        >
          {tema === 'light' ? '🌙' : '☀️'}
        </button>
        <button
          className="botao-icone"
          onClick={() => setIdioma(idioma === 'pt' ? 'en' : 'pt')}
        >
          {idioma === 'pt' ? 'EN' : 'PT'}
        </button>
      </div>
    </header>
  )
}

export default Header