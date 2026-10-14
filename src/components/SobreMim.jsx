import { useState } from 'react'

const textos = {
  pt: {
    titulo: 'Sobre Mim',
    botao: 'English',
    paragrafos: [
      'Me chamo Daniell, tenho 19 anos e estou no segundo período de Engenharia de Software na PUC Minas. Também tenho 5 anos de estudo de inglês.',
      'Tenho bastante interesse em back-end, que é a área que mais estou estudando na faculdade, e também me interesso por outras áreas da tecnologia, como banco de dados.',
      'Durante o curso, já realizei projetos usando diversas linguagens de programação.',
      'Atualmente, busco minha primeira oportunidade profissional (estágio, primeiro emprego ou freela) para ter contato com clientes e enfrentar desafios reais.',
    ],
  },
  en: {
    titulo: 'About Me',
    botao: 'Português',
    paragrafos: [
      "My name is Daniell, I am 19 years old, and I am in my second semester of Software Engineering at PUC Minas. I have also studied English for 5 years.",
      'I am very interested in back-end development, which is the area I am studying the most at university, and I am also interested in other areas of technology, such as databases.',
      'During my degree, I have already worked on projects using several programming languages.',
      'I am currently looking for my first professional opportunity (an internship, a first job, or freelance work) so I can work with clients and take on real challenges.',
    ],
  },
}

function SobreMim() {
  const [idioma, setIdioma] = useState('pt')
  const t = textos[idioma]

  function alternarIdioma() {
    setIdioma(idioma === 'pt' ? 'en' : 'pt')
  }

  return (
    <section id="sobre">
      <h2>{t.titulo}</h2>
      <button className="botao-idioma" onClick={alternarIdioma}>
        {t.botao}
      </button>
      <div className="sobre__texto">
        {t.paragrafos.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  )
}

export default SobreMim