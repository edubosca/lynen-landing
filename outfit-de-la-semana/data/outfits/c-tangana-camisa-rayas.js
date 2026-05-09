// Generado a mano. Editar como JSON puro.
//
// Outfit referencia productos por `productId`. Los datos del producto
// (name, brand, price, imageUrl, affiliateUrl) viven en
// /outfit-de-la-semana/data/products.js — al cargar la página, data.js
// hidrata cada referencia con el producto completo.

window.WeeklyOutfitsRaw = window.WeeklyOutfitsRaw || {};
window.WeeklyOutfitsRaw.outfits = window.WeeklyOutfitsRaw.outfits || {};
window.WeeklyOutfitsRaw.outfits['c-tangana-camisa-rayas'] = {

  slug: 'c-tangana-camisa-rayas',
  publishAt: '2026-05-25T10:00:00+02:00',
  inspiredBy: { name: 'C. Tangana', type: 'celebrity' },
  title: 'La camisa de rayas de C. Tangana',
  subtitle: 'Sastrería relajada con un toque mediterráneo',
  description:
    'C. Tangana entendió hace tiempo lo que muchos hombres tardan toda una vida en pillar: la elegancia masculina española no necesita pretensiones. Camisa de rayas abierta sobre una camiseta de tirantes, pantalón de tela con caída, mocasines marrones gastados. Es el uniforme del que sabe vestirse para una terraza un viernes a las ocho. Funciona porque cada pieza está estudiada — la camisa lo justo de holgada, el pantalón cae sin marcar, los mocasines hacen de ancla. Verano sin esfuerzo, pero con intención.',
  vibeKeywords: ['sastrería relajada', 'verano', 'mediterráneo', 'spanish cool', 'camisa abierta'],
  season: 'Primavera 2026',
  heroImage: {
    src: '/images/weekly-outfits/c-tangana.png',
    alt: 'C. Tangana con camisa de rayas abierta sobre camiseta de tirantes, pantalón de tela y mocasines marrones',
    credit: 'Foto: vía redes sociales'
  },

  tiers: [
    {
      tier: 'asequible',
      label: 'Asequible',
      tagline: 'El uniforme de terraza por menos de 140€',
      products: [
        { productId: 'only-sons-camisa-rayas-slim',  slot: 'outerwear', slotLabel: 'Camisa de rayas' },
        { productId: 'eminence-tirantes-heritage',   slot: 'top',       slotLabel: 'Camiseta de tirantes' },
        { productId: 'lr-pantalon-lino-pinzas',      slot: 'pants',     slotLabel: 'Pantalón ancho' },
        { productId: 'lr-mocasines-signature',       slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    },
    {
      tier: 'equilibrado',
      label: 'Equilibrado',
      tagline: 'Mejor tejido en la camisa, mejor caída en el pantalón',
      products: [
        { productId: 'pepe-jeans-camisa-rayas-algodon-lino', slot: 'outerwear', slotLabel: 'Camisa de rayas' },
        { productId: 'dim-tirantes-ecodim-pack2',            slot: 'top',       slotLabel: 'Camiseta de tirantes' },
        { productId: 'jj-vaquero-chris',                     slot: 'pants',     slotLabel: 'Pantalón ancho' },
        { productId: 'tommy-mocasines-piel',                 slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    },
    {
      tier: 'premium',
      label: 'Premium',
      tagline: 'Lino verdadero y mocasines que se hacen con los años',
      products: [
        { productId: 'ck-camisa-lino-rayas',              slot: 'outerwear', slotLabel: 'Camisa de rayas' },
        { productId: 'prl-tirantes-clasicas-pack2',       slot: 'top',       slotLabel: 'Camiseta de tirantes' },
        { productId: 'lr-pantalon-plisado-pernera-ancha', slot: 'pants',     slotLabel: 'Pantalón ancho' },
        { productId: 'prl-mocasines-jett-penny',          slot: 'shoes',     slotLabel: 'Mocasines' }
      ]
    }
  ]

};
