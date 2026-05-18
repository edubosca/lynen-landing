// Generado a mano. Editar como JSON puro.
//
// Outfit referencia productos por `productId`. Los datos del producto
// (name, brand, price, imageUrl, affiliateUrl) viven en
// /outfit-de-la-semana/data/products.js — al cargar la página, data.js
// hidrata cada referencia con el producto completo.

window.WeeklyOutfitsRaw = window.WeeklyOutfitsRaw || {};
window.WeeklyOutfitsRaw.outfits = window.WeeklyOutfitsRaw.outfits || {};
window.WeeklyOutfitsRaw.outfits['rauw-alejandro-polo-marino'] = {

  slug: 'rauw-alejandro-polo-marino',
  publishAt: '2026-05-18T08:00:00+02:00',
  inspiredBy: { name: 'Rauw Alejandro', type: 'celebrity' },
  title: 'El polo marino y pantalón blanco de Rauw Alejandro',
  subtitle: 'Sporty-elegant con contraste limpio',
  description:
    'Rauw Alejandro lleva años perfeccionando una fórmula que pocos hombres dominan: vestir deportivo sin parecer que vas al gimnasio. La clave de este look es el contraste — un polo de manga larga azul marino contra un pantalón blanco ancho con caída de tela. Dos colores, dos texturas, dos siluetas. El cinturón negro y los zapatos del mismo tono cierran la paleta sin gritar. Es el outfit perfecto para una cena de verano, un concierto al aire libre, o cualquier sitio donde quieras vestir cómodo sin parecer descuidado.',
  vibeKeywords: ['sporty-elegant', 'contraste', 'verano', 'concierto', 'pantalón ancho'],
  season: 'Primavera 2026',
  heroImage: {
    src: '/images/weekly-outfits/rauw-alejandro.png',
    alt: 'Rauw Alejandro con polo manga larga azul marino, pantalón blanco ancho con pinzas y zapatos negros',
    credit: 'Foto: vía redes sociales'
  },

  tiers: [
    {
      tier: 'asequible',
      label: 'Asequible',
      tagline: 'El look completo por poco más de 120€',
      products: [
        { productId: 'levis-polo-manga-larga',  slot: 'outerwear', slotLabel: 'Polo manga larga' },
        { productId: 'lr-pantalon-lino-isaac',  slot: 'pants',     slotLabel: 'Pantalón claro ancho' },
        { productId: 'pikolinos-berna-negro',   slot: 'shoes',     slotLabel: 'Zapatos negros' }
      ]
    },
    {
      tier: 'equilibrado',
      label: 'Equilibrado',
      tagline: 'Mejor tejido en el polo, mejor caída en el pantalón',
      products: [
        { productId: 'schott-polo-manga-larga',         slot: 'outerwear', slotLabel: 'Polo manga larga' },
        { productId: 'lr-pantalon-ancho-pinzas-algodon', slot: 'pants',    slotLabel: 'Pantalón blanco ancho' },
        { productId: 'clarks-tilden-plain-negro',       slot: 'shoes',     slotLabel: 'Zapatos negros' }
      ]
    },
    {
      tier: 'premium',
      label: 'Premium',
      tagline: 'Polo emblemático y mocasines que se hacen con los años',
      products: [
        { productId: 'prl-polo-pique-slim',       slot: 'outerwear', slotLabel: 'Polo manga larga' },
        { productId: 'lr-pantalon-ancho-pinzas',  slot: 'pants',     slotLabel: 'Pantalón blanco ancho' },
        { productId: 'jonak-mocasines-delphes',   slot: 'shoes',     slotLabel: 'Zapatos negros' }
      ]
    }
  ]

};
