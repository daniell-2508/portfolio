const projetos = [
  {
    id: 1,
    nome: 'PyPong',
    ano: 2026,
    descricao: {
      pt: 'Clone do jogo Pong feito em grupo com Pygame. Participei da parte de áudio (música de fundo e sons de rebatida e de menu), da organização do código em módulos e do fluxo de trabalho com Git.',
      en: 'Pong clone built as a team project with Pygame. I worked on the audio (background music and paddle-hit and menu sounds), on organizing the code into modules, and on the Git workflow.',
    },
    tecnologias: ['Python', 'Pygame', 'Git'],
    repositorio: 'https://github.com/daniell-2508/projeto_pygame',
    imagem: '/projetos/pypong.png',
  },
  {
    id: 2,
    nome: 'CineVerse',
    ano: 2026,
    descricao: {
      pt: 'Catálogo de filmes com HTML, CSS, Bootstrap 5 e JavaScript, usando JSON Server como API. Tem CRUD completo, cadastro e login de usuários com perfil de administrador, favoritos, carrossel de destaques e dashboard com gráficos.',
      en: 'Movie catalog built with HTML, CSS, Bootstrap 5 and JavaScript, using JSON Server as the API. It has full CRUD, user registration and login with an admin role, favorites, a featured-movies carousel and a dashboard with charts.',
    },
    tecnologias: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'JSON Server', 'Chart.js'],
    repositorio: 'https://github.com/daniell-2508/CineVerse',
    imagem: '/projetos/cineverse.png',
  },
  {
    id: 3,
    nome: 'Candidatos - Eleições 2026 (MG)',
    ano: 2026,
    descricao: {
      pt: 'Aplicação Spring Boot que lê o CSV de candidatos do TSE (eleições de 2026, MG) e exibe os candidatos em uma tela única, com filtros por cargo, partido e busca por nome ou número, incluindo a foto oficial de cada um.',
      en: "Spring Boot application that reads the TSE candidates CSV (2026 elections, MG) and shows the candidates on a single screen, with filters by position and party, and a search by name or number, including each candidate's official photo.",
    },
    tecnologias: ['Java', 'Spring Boot', 'HTML', 'CSS'],
    repositorio: 'https://github.com/daniell-2508/Springboot-eleicoes-provaDIAW',
    imagem: '/projetos/eleicoes-tse.png',
  },
]

export default projetos