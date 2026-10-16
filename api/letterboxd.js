const USUARIO = 'daniellocs'

function pegar(trecho, tag) {
  const achou = trecho.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  return achou ? achou[1].trim() : null
}

function decodificar(texto) {
  return texto
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

export default async function handler(req, res) {
  const resposta = await fetch(`https://letterboxd.com/${USUARIO}/rss/`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (portfolio do Daniell)' },
  })

  if (!resposta.ok) {
    res.status(502).json([])
    return
  }

  const xml = await resposta.text()
  const itens = xml.split('<item>').slice(1)

  const filmes = itens
    .map((item) => ({
      titulo: decodificar(pegar(item, 'letterboxd:filmTitle') || ''),
      ano: pegar(item, 'letterboxd:filmYear'),
      nota: Number(pegar(item, 'letterboxd:memberRating')) || null,
      img: (item.match(/src=(?:"|&quot;)([^"&]+)/) || [])[1] || null,
    }))
    .filter((f) => f.titulo && f.img)

  // tira filmes repetidos (rewatch) e fica com os 4 mais recentes
  const unicos = filmes
    .filter((f, i) => filmes.findIndex((g) => g.titulo === f.titulo) === i)
    .slice(0, 4)

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
  res.status(200).json(unicos)
}