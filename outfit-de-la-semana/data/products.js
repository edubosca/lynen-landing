// Generado a mano. Editar como JSON puro.
//
// Catálogo central de productos. Cada outfit en /data/outfits/ referencia
// productos por su `id` (las claves de este objeto). Si un producto aparece
// en varios outfits o tiers, vive UNA vez aquí — al cambiar precio o URL,
// se propaga a todas las páginas automáticamente.
//
// Schema:
//   {
//     name: string,
//     brand: string,
//     price: number,         // EUR
//     currency: 'EUR',
//     imageUrl: string,      // URL absoluta a imagen (CDN)
//     affiliateUrl: string,  // URL de tracking (awin pclick, etc.)
//     network: 'awin' | ...,
//     lastVerifiedAt: 'YYYY-MM-DD',  // último día que verificamos manualmente
//                                    // que precio/imagen/url siguen vivos
//     notes: string                  // apuntes internos: "stock bajo", etc.
//   }
//
// Para chequear qué productos llevan >30 días sin verificar:
//   node scripts/check-stale-products.js

window.WeeklyOutfitsRaw = window.WeeklyOutfitsRaw || {};
window.WeeklyOutfitsRaw.products = {

  // ─── La Redoute Collections ──────────────────────────────────────────

  'lr-pantalon-lino-isaac': {
    name: 'Pantalón recto de lino Signature ISAAC',
    brand: 'La Redoute Collections',
    price: 38.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/1/5/5/15565ad5a8ef2144bc572bfa1d9d9ae5.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301756106&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-cardigan-canale-ingles': {
    name: 'Chaqueta de algodón con cremallera, canalé inglés',
    brand: 'La Redoute Collections',
    price: 32.49,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/3/1/1/311935071d5b3b303e1189dba220ce3a.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301753729&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-camiseta-blanca-basica': {
    name: 'Camiseta de cuello redondo y manga corta',
    brand: 'La Redoute Collections',
    price: 4.54,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/7/6/e/76e9987be894f49eb274197289ed1c8b.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44500078112&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-mocasines-signature': {
    name: 'Mocasines Signature de piel con morsetti',
    brand: 'La Redoute Collections',
    price: 35.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/1/7/d/17dde88cef1d761da35e40ee6449a4d7.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44500100306&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-jersey-punto-ingles': {
    name: 'Jersey de punto inglés de algodón',
    brand: 'La Redoute Collections',
    price: 24.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/8/0/4/804b62ba04e09b27ce9fa41bf93249a4.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301753711&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-pantalon-lino-pinzas': {
    name: 'Pantalón ancho de lino con pinzas',
    brand: 'La Redoute Collections',
    price: 44.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/4/f/b/4fbf085e56a2d924198d7755651da1d0.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301694425&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'lr-pantalon-plisado-pernera-ancha': {
    name: 'Pantalón plisado de talle alto pernera ancha',
    brand: 'La Redoute Collections',
    price: 61.59,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/2/7/9/2796d8229123e0107a1ab56aa7afd1db.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301803901&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Calvin Klein ────────────────────────────────────────────────────

  'ck-camiseta-logotipo': {
    name: 'Camiseta de manga corta con logotipo',
    brand: 'Calvin Klein',
    price: 35.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/7/e/1/7e1def9077a29b8b4b9ee656fbd564f7.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301837117&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Tommy Hilfiger ──────────────────────────────────────────────────

  'tommy-mocasines-piel': {
    name: 'Mocasines de piel ligera',
    brand: 'Tommy Hilfiger',
    price: 87.45,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/6/3/3/6332cb3773bab95e10d6e025b3d3473c.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301664847&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Polo Ralph Lauren ───────────────────────────────────────────────

  'prl-chinos-bedford': {
    name: 'Pantalones chinos slim efecto lavado Bedford',
    brand: 'Polo Ralph Lauren',
    price: 152.25,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/4/7/5/475a898139131f2aab0f68d1c80deec3.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301751000&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'prl-jersey-canale-cremallera': {
    name: 'Jersey de canalé con cremallera, de algodón',
    brand: 'Polo Ralph Lauren',
    price: 199.75,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/b/3/6/b369bde375d2162d19161d286824a20b.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301832115&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'prl-camiseta-bordes-contraste': {
    name: 'Camiseta recta con bordes a contraste',
    brand: 'Polo Ralph Lauren',
    price: 80.74,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/5/b/9/5b91f2178a3de858cccb942c8242b526.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301796947&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'prl-jersey-cremallera-pique': {
    name: 'Jersey con media cremallera de algodón piqué',
    brand: 'Polo Ralph Lauren',
    price: 178.45,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/a/a/1/aa171b5e2b2f9b8bb2bdd42ce3d93c8f.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44616848938&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  'prl-mocasines-jett-penny': {
    name: 'Mocasines de piel Jett Penny',
    brand: 'Polo Ralph Lauren',
    price: 208.25,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/4/9/8/4989d8753fcc4a0843b9a0e030d683f4.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44330642863&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── JONAK ───────────────────────────────────────────────────────────

  'jonak-mocasines-delphes': {
    name: 'Mocasines de piel Delphes, fabricados en Europa',
    brand: 'JONAK',
    price: 155.00,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/c/6/d/c6d30102e876baa0f7c8adc0636467b2.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301636418&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Pikolinos ───────────────────────────────────────────────────────

  'pikolinos-berna-negro': {
    name: 'Zapatos Pikolinos BERNA',
    brand: 'Pikolinos',
    price: 49.99,
    currency: 'EUR',
    imageUrl: 'https://zapatosobi.com/4510503-large_default/zapatos-pikolinos-berna-m8j-4183c1-negro.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44056160673&a=2806382&m=115587',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Clarks ──────────────────────────────────────────────────────────

  'clarks-tilden-plain-negro': {
    name: 'Zapatos Tilden Plain',
    brand: 'Clarks',
    price: 89.95,
    currency: 'EUR',
    imageUrl: 'https://zapatosobi.com/3506307-large_default/zapatos-clarks-tilden-plain-negro.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44056153297&a=2806382&m=115587',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Napapijri ───────────────────────────────────────────────────────

  'napapijri-decatur': {
    name: 'Jersey de cuello redondo Decatur',
    brand: 'Napapijri',
    price: 76.49,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/4/f/7/4f754301e200e432933da315e9a828f7.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301843494&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  },

  // ─── Jack & Jones ────────────────────────────────────────────────────

  'jj-vaquero-chris': {
    name: 'Vaquero ancho Chris',
    brand: 'Jack & Jones',
    price: 47.99,
    currency: 'EUR',
    imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/9/1/e/91ef4f7c26de148f8c770ea070fc985c.jpg',
    affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301760177&a=2806382&m=10497',
    network: 'awin',
    lastVerifiedAt: '2026-05-05',
    notes: ''
  }

};
