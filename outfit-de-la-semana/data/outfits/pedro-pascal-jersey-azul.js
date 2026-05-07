// Generado a mano. Editar como JSON puro.
//
// Outfit referencia productos por `productId`. Los datos del producto
// (name, brand, price, imageUrl, affiliateUrl) viven en
// /outfit-de-la-semana/data/products.js — al cargar la página, data.js
// hidrata cada referencia con el producto completo.

window.WeeklyOutfitsRaw = window.WeeklyOutfitsRaw || {};
window.WeeklyOutfitsRaw.outfits = window.WeeklyOutfitsRaw.outfits || {};
window.WeeklyOutfitsRaw.outfits['pedro-pascal-jersey-azul'] = {

  slug: 'pedro-pascal-jersey-azul',
  publishAt: '2026-05-08T10:00:00+02:00',
  inspiredBy: { name: 'Pedro Pascal', type: 'celebrity' },
  title: 'El jersey azul marino de Pedro Pascal',
  subtitle: 'Monocromo nocturno con un toque de color',
  description:
    'Pedro Pascal hace lo que pocos hombres hacen bien: vestir todo oscuro sin parecer un guardia de seguridad. La clave está en romper el negro con un único punto de color — en este caso, un azul marino profundo que casi pasa por negro pero no del todo. Pantalón ancho con caída, zapatos pulidos, jersey de punto fino. Tres piezas, tres texturas, una silueta. Funciona porque cada elemento es esencial; quita cualquiera de los tres y el look se cae.',
  vibeKeywords: ['monocromo', 'elegante', 'nocturno', 'minimalista', 'sastrería relajada'],
  season: 'Primavera 2026',
  heroImage: {
    src: '/images/weekly-outfits/pedro-pascal.png',
    alt: 'Pedro Pascal con jersey azul marino, pantalón negro ancho y zapatos de vestir negros',
    credit: 'Foto: vía redes sociales'
  },

  tiers: [
    {
      tier: 'asequible',
      label: 'Asequible',
      tagline: 'El look completo por menos de 120€',
      products: [
        { productId: 'lr-jersey-punto-ingles',  slot: 'outerwear', slotLabel: 'Jersey azul' },
        { productId: 'lr-pantalon-lino-pinzas', slot: 'pants',     slotLabel: 'Pantalón negro' },
        { productId: 'pikolinos-berna-negro',   slot: 'shoes',     slotLabel: 'Zapatos de vestir' }
      ]
    },
    {
      tier: 'equilibrado',
      label: 'Equilibrado',
      tagline: 'Sube de marca en lo que más se nota: tejido, caída y zapato',
      products: [
        { productId: 'napapijri-decatur',          slot: 'outerwear', slotLabel: 'Jersey azul' },
        { productId: 'jj-vaquero-chris',           slot: 'pants',     slotLabel: 'Pantalón negro' },
        { productId: 'clarks-tilden-plain-negro',  slot: 'shoes',     slotLabel: 'Zapatos de vestir' }
      ]
    },
    {
      tier: 'premium',
      label: 'Premium',
      tagline: 'Piezas para llevar diez años, no una temporada',
      products: [
        { productId: 'prl-jersey-cremallera-pique',         slot: 'outerwear', slotLabel: 'Jersey azul' },
        { productId: 'lr-pantalon-plisado-pernera-ancha',   slot: 'pants',     slotLabel: 'Pantalón negro' },
        { productId: 'prl-mocasines-jett-penny',            slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    }
  ]

};
