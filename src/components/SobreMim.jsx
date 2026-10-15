

const textos = {
  pt: {
    titulo: 'Sobre Mim',
    paragrafos: [
      'Tenho 19 anos e sou apaixonado por novas tecnologias e desenvolvimento de software, com foco em back-end. Trabalho com Python, Java, JavaScript, HTML, CSS e Spring Boot, estou aprendendo React e estou sempre buscando aprender e crescer na área de tecnologia. 🚀',
      'Atualmente, busco minha primeira oportunidade profissional (estágio, primeiro emprego ou freela), para ter contato com clientes e enfrentar desafios reais.',
    ],
  },
  en: {
    titulo: 'About Me',
    paragrafos: [
      "I'm 19 and passionate about new technologies and software development, with a focus on back-end. I work with Python, Java, JavaScript, HTML, CSS and Spring Boot, I'm learning React, and I'm always looking to learn and grow in the tech industry. 🚀",
      "I'm currently looking for my first professional opportunity (an internship, a first job or freelance work), so I can work with clients and take on real challenges.",
    ],
  },
}

function SobreMim({ idioma }) {
  const t = textos[idioma]

  return (
    <section id="sobre">
      <h2>{t.titulo}</h2>
      <div className="sobre__texto">
        {t.paragrafos.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  )
}

export default SobreMim