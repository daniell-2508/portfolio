function Header({ nome }) {
  const links = [
    { id: 'sobre', texto: 'Sobre Mim' },
    { id: 'projetos', texto: 'Projetos' },
    { id: 'experiencias', texto: 'Experiências' },
    { id: 'contato', texto: 'Contato' },
  ]

  return (
    <header className="header">
      <span className="header__nome">{nome}</span>
      <nav>
        <ul className="header__links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header