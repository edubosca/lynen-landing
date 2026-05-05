// Generado a mano. Editar como JSON puro.
//
// Outfit referencia productos por `productId`. Los datos del producto
// (name, brand, price, imageUrl, affiliateUrl) viven en
// /outfit-de-la-semana/data/products.js — al cargar la página, data.js
// hidrata cada referencia con el producto completo.

window.WeeklyOutfitsRaw = window.WeeklyOutfitsRaw || {};
window.WeeklyOutfitsRaw.outfits = window.WeeklyOutfitsRaw.outfits || {};
window.WeeklyOutfitsRaw.outfits['jacob-elordi-cardigan-azul'] = {

  slug: 'jacob-elordi-cardigan-azul',
  publishAt: '2026-05-04T10:00:00+02:00',
  inspiredBy: { name: 'Jacob Elordi', type: 'celebrity' },
  title: 'El cardigan azul de Jacob Elordi',
  subtitle: 'Preppy de primavera, suave y sin esfuerzo',
  description:
    'Un look que funciona porque no intenta ser nada. Pantalón claro, camiseta blanca, cardigan azul marino, mocasines. Cuatro piezas neutras que se combinan solas y que son la base de cualquier armario que quiera durar más de una temporada. La clave está en el ajuste — todo recto, nada ceñido — y en que cada prenda esté en buen estado. La sencillez no perdona prendas viejas.',
  vibeKeywords: ['preppy', 'smart casual', 'primavera', 'minimalista', 'clásico'],
  season: 'Primavera 2026',
  heroImage: {
    src: '/images/weekly-outfits/jacob-elordi-cardigan.png',
    alt: 'Jacob Elordi con cardigan azul marino, camiseta blanca, pantalón claro y mocasines de piel',
    credit: 'Foto: vía redes sociales'
  },

  tiers: [
    {
      tier: 'asequible',
      label: 'Asequible',
      tagline: 'Recrea el look completo por menos de lo que cuesta una cena para dos',
      products: [
        { productId: 'lr-cardigan-canale-ingles',  slot: 'outerwear', slotLabel: 'Cardigan azul' },
        { productId: 'lr-camiseta-blanca-basica',  slot: 'top',       slotLabel: 'Camiseta blanca' },
        { productId: 'lr-pantalon-lino-isaac',     slot: 'pants',     slotLabel: 'Pantalón claro' },
        { productId: 'lr-mocasines-signature',     slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    },
    {
      tier: 'equilibrado',
      label: 'Equilibrado',
      tagline: 'Las mismas piezas, con un par de upgrades en lo que más se nota',
      products: [
        { productId: 'lr-cardigan-canale-ingles',  slot: 'outerwear', slotLabel: 'Cardigan azul' },
        { productId: 'ck-camiseta-logotipo',       slot: 'top',       slotLabel: 'Camiseta blanca' },
        { productId: 'lr-pantalon-lino-isaac',     slot: 'pants',     slotLabel: 'Pantalón claro' },
        { productId: 'tommy-mocasines-piel',       slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    },
    {
      tier: 'premium',
      label: 'Premium',
      tagline: 'Inversión en piezas que durarán cinco temporadas o más',
      products: [
        { productId: 'prl-jersey-canale-cremallera', slot: 'outerwear', slotLabel: 'Cardigan azul' },
        { productId: 'prl-camiseta-bordes-contraste', slot: 'top',      slotLabel: 'Camiseta blanca' },
        { productId: 'prl-chinos-bedford',           slot: 'pants',     slotLabel: 'Pantalón claro' },
        { productId: 'jonak-mocasines-delphes',      slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    }
  ]

};
