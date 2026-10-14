const projetos = [
  {
    id: 1,
    nome: 'PyPong',
    ano: 2026, // CONFIRA o ano
    descricao:
      'Clone do jogo Pong feito em grupo com Pygame. Participei da parte de áudio (música de fundo e sons de rebatida e de menu), da organização do código em módulos e do fluxo de trabalho com Git.',
    tecnologias: ['Python', 'Pygame', 'Git'],
    repositorio: 'https://github.com/daniell-2508/projeto_pygame',
    imagem: '/projetos/pypong.png',
  },
  {
    id: 2,
    nome: 'CineVerse',
    ano: 2026, // CONFIRA o ano
    descricao:
      'Catálogo de filmes com HTML, CSS, Bootstrap 5 e JavaScript, usando JSON Server como API. Tem CRUD completo, cadastro e login de usuários com perfil de administrador, favoritos, carrossel de destaques e dashboard com gráficos.',
    tecnologias: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'JSON Server', 'Chart.js'],
    repositorio: 'https://github.com/daniell-2508/COLE-O-NOME-DO-REPO', // CONFIRA o link
    imagem: '/projetos/cineverse.png',
  },
  {
    id: 3,
    nome: 'Candidatos - Eleições 2026 (MG)',
    ano: 2026,
    descricao:
      'Aplicação Spring Boot que lê o CSV de candidatos do TSE (eleições de 2026, MG) e exibe os candidatos em uma tela única, com filtros por cargo, partido e busca por nome ou número, incluindo a foto oficial de cada um.',
    tecnologias: ['Java', 'Spring Boot', 'HTML', 'CSS'],
    repositorio: 'https://github.com/daniell-2508/Springboot-eleicoes-provaDIAW',
    imagem: '/projetos/eleicoes-tse.png',
  },
]

export default projetos