const curriculo = {
  contatos: [
    { id: 'email', rotulo: 'daniellocs25@gmail.com', href: 'mailto:daniellocs25@gmail.com' },
    { id: 'linkedin', rotulo: 'LinkedIn', href: 'https://www.linkedin.com/in/daniellcardoso/' },
    { id: 'github', rotulo: 'GitHub', href: 'https://github.com/daniell-2508' },
  ],

  pt: {
    titulo: 'Currículo',
    escolha: 'Escolha a versão:',
    baixar: 'Baixar PDF',
    abrir: 'Abrir PDF em nova aba',
    arquivo: '/curriculo-pt.pdf',
    nomeDownload: 'Daniell_Cardoso_Curriculo.pdf',
    verGithub: 'Ver no GitHub',
    funcao: 'Estudante de Engenharia de Software',
    resumoTitulo: 'Objetivo profissional',
    resumo:
      'Estudante de Engenharia de Software, apaixonado por tecnologia e desenvolvimento de software. Atualmente estou no segundo período do meu curso e busco uma oportunidade para iniciar minha carreira na área, aplicando conhecimentos técnicos, adquirindo experiência prática e contribuindo para o desenvolvimento de soluções inovadoras. Sou comprometido com o aprendizado contínuo, a evolução profissional e o trabalho em equipe, sempre buscando novos desafios e oportunidades de crescimento.',
    projetosTitulo: 'Experiência em projetos',
    projetos: [
      {
        nome: 'Desenvolvimento de um jogo em Python - PyPong',
        periodo: 'Maio 2026 - Junho 2026',
        descricao:
          'Projeto de desenvolvimento de jogo em Python que tem sido fundamental para consolidar meus conhecimentos na linguagem. Apliquei na prática conceitos estudados em sala de aula, como lógica de programação, estruturas de dados, funções, orientação a objetos e resolução de problemas.',
        link: 'https://github.com/daniell-2508/projeto_pygame',
      },
      {
        nome: 'Desenvolvimento de um site de catálogo de filmes - CineVerse',
        periodo: 'Fevereiro 2026 - Maio 2026',
        descricao:
          'Projeto acadêmico desenvolvido na PUC Minas para criar uma plataforma de catálogo de filmes com HTML, CSS e JavaScript, com integrações a serviços de terceiros e banco de dados. Foi importante para desenvolver habilidades em front-end, organização de dados e construção de interfaces interativas.',
        link: 'https://github.com/daniell-2508/CineVerse',
      },
    ],
    formacaoTitulo: 'Formação acadêmica',
    formacao: [
      {
        nome: 'Bacharelado em Engenharia de Software',
        sub: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
        periodo: 'Fevereiro 2026 - Dezembro 2029',
        descricao:
          'Ingressar na PUC Minas foi um marco importante na minha trajetória acadêmica e pessoal. A experiência universitária tem ampliado minha visão sobre tecnologia, desenvolvimento de software e trabalho em equipe, além de fortalecer meu compromisso com o aprendizado contínuo.',
      },
      {
        nome: 'Ensino médio completo',
        sub: 'Colégio Santo Agostinho, Belo Horizonte',
        periodo: 'Janeiro 2013 - Dezembro 2025',
        descricao:
          'Participei de equipes esportivas, o que fortaleceu minha capacidade de trabalhar em equipe, lidar com desafios e desenvolver disciplina. Foi também onde tive meu primeiro contato com outras línguas, inglês e espanhol.',
      },
    ],
    cursosTitulo: 'Cursos e certificados',
    cursos: [
      {
        nome: 'Python',
        sub: 'Santander',
        periodo: 'Julho 2026 - Agosto 2026',
        descricao:
          'Curso para colocar em prática os conceitos que aprendi no primeiro semestre de Engenharia de Software na PUC Minas.',
      },
      {
        nome: 'Curso de Inglês',
        sub: 'Better Mind',
        periodo: '2019 - 2024',
        descricao:
          'Desenvolvi a base do meu conhecimento em inglês, aprimorando compreensão, leitura, escrita e comunicação no idioma.',
      },
    ],
    habilidadesTitulo: 'Competências',
    habilidades: [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'Java + Spring Boot',
      'VS Code e IntelliJ IDEA',
      'Lógica de programação e algoritmos',
      'Pacote Office completo',
      'Trabalho em equipe',
      'Desenvolvimento de software',
      'Comunicação',
      'Facilidade para aprender novas tecnologias',
      'Proatividade',
    ],
    idiomasTitulo: 'Idiomas',
    idiomas: [
      { nome: 'Português', nivel: 'Nativo' },
      { nome: 'Inglês', nivel: 'Intermediário/Avançado' },
      { nome: 'Espanhol', nivel: 'Básico' },
    ],
  },

  en: {
    titulo: 'Resume',
    escolha: 'Choose the version:',
    baixar: 'Download PDF',
    abrir: 'Open PDF in new tab',
    arquivo: '/curriculo-en.pdf',
    nomeDownload: 'Daniell_Cardoso_Resume.pdf',
    verGithub: 'View on GitHub',
    funcao: 'Software Engineering Student',
    resumoTitulo: 'Career objective',
    resumo:
      'Software Engineering student passionate about technology and software development. Currently in the second semester of my degree, I am seeking an opportunity to begin my career in the field, apply my technical knowledge, gain hands-on experience, and contribute to the development of innovative solutions. I am committed to continuous learning, professional growth, and teamwork, and I am always looking for new challenges and opportunities to develop.',
    projetosTitulo: 'Project experience',
    projetos: [
      {
        nome: 'Python Game Development - PyPong',
        periodo: 'May 2026 - June 2026',
        descricao:
          'Python game development project that has been instrumental in strengthening my programming skills. I applied concepts studied in class, including programming logic, data structures, functions, object-oriented programming, and problem-solving.',
        link: 'https://github.com/daniell-2508/projeto_pygame',
      },
      {
        nome: 'Movie Catalog Website - CineVerse',
        periodo: 'February 2026 - May 2026',
        descricao:
          'Academic project developed at PUC Minas to create a movie catalog platform using HTML, CSS, and JavaScript, with third-party service integrations and a database. It helped me develop skills in front-end development, data organization, and building interactive user interfaces.',
        link: 'https://github.com/daniell-2508/CineVerse',
      },
    ],
    formacaoTitulo: 'Education',
    formacao: [
      {
        nome: "Bachelor's Degree in Software Engineering",
        sub: 'Pontifical Catholic University of Minas Gerais (PUC Minas)',
        periodo: 'February 2026 - December 2029',
        descricao:
          'Enrolling at PUC Minas was an important milestone in my academic and personal journey. My university experience has broadened my perspective on technology, software development, and teamwork while strengthening my commitment to continuous learning.',
      },
      {
        nome: 'High School Diploma',
        sub: 'Colégio Santo Agostinho, Belo Horizonte',
        periodo: 'January 2013 - December 2025',
        descricao:
          'I took part in sports teams, which strengthened my ability to work with others, face challenges, and develop discipline. It was also where I first studied other languages, including English and Spanish.',
      },
    ],
    cursosTitulo: 'Courses and certificates',
    cursos: [
      {
        nome: 'Python',
        sub: 'Santander',
        periodo: 'July 2026 - August 2026',
        descricao:
          'This course let me put into practice the concepts I learned during the first semester of my Software Engineering degree at PUC Minas.',
      },
      {
        nome: 'English Language Course',
        sub: 'Better Mind',
        periodo: '2019 - 2024',
        descricao:
          'I built the foundation of my English proficiency, improving my listening, reading, writing, and communication skills.',
      },
    ],
    habilidadesTitulo: 'Skills',
    habilidades: [
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'Java + Spring Boot',
      'VS Code and IntelliJ IDEA',
      'Programming logic and algorithms',
      'Microsoft Office Suite',
      'Teamwork',
      'Software development',
      'Communication',
      'Ability to learn new technologies quickly',
      'Proactiveness',
    ],
    idiomasTitulo: 'Languages',
    idiomas: [
      { nome: 'Portuguese', nivel: 'Native' },
      { nome: 'English', nivel: 'Intermediate to Advanced' },
      { nome: 'Spanish', nivel: 'Basic' },
    ],
  },
}

export default curriculo