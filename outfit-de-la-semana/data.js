/**
 * Outfit de la semana — fuente de datos.
 *
 * Para añadir un outfit nuevo:
 *   1. Crea la carpeta /outfit-de-la-semana/<slug>/index.html (copia uno existente).
 *   2. Añade un objeto al inicio de WEEKLY_OUTFITS con su `publishAt` futuro.
 *   3. Si quieres que destaque en la home antes de su `publishAt`, no hace falta:
 *      la home muestra el outfit "actual" según fecha. Si `publishAt > now`, se
 *      mantiene el anterior hasta que llegue la fecha.
 *
 * NOTA SEO: cuando se genere sitemap.xml automatizado, debe incluir
 * /outfit-de-la-semana/ y todas las URLs /outfit-de-la-semana/<slug>/.
 */
(function () {
  'use strict';

  const SITE_ORIGIN = 'https://www.lynenapp.com';

  /** @type {Array} */
  const WEEKLY_OUTFITS = [
    {
      slug: 'jacob-elordi-cardigan-azul',
      publishAt: '2026-05-11T10:00:00+02:00',
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
            {
              slot: 'outerwear',
              slotLabel: 'Cardigan azul',
              name: 'Chaqueta de algodón con cremallera, canalé inglés',
              brand: 'La Redoute Collections',
              price: 32.49,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/3/1/1/311935071d5b3b303e1189dba220ce3a.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301753729&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'top',
              slotLabel: 'Camiseta blanca',
              name: 'Camiseta de cuello redondo y manga corta',
              brand: 'La Redoute Collections',
              price: 4.54,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/7/6/e/76e9987be894f49eb274197289ed1c8b.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44500078112&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'pants',
              slotLabel: 'Pantalón claro',
              name: 'Pantalón recto de lino Signature ISAAC',
              brand: 'La Redoute Collections',
              price: 38.99,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/1/5/5/15565ad5a8ef2144bc572bfa1d9d9ae5.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301756106&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'shoes',
              slotLabel: 'Mocasines',
              name: 'Mocasines Signature de piel con morsetti',
              brand: 'La Redoute Collections',
              price: 35.99,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/1/7/d/17dde88cef1d761da35e40ee6449a4d7.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44500100306&a=2806382&m=10497',
              network: 'awin'
            }
          ]
        },
        {
          tier: 'equilibrado',
          label: 'Equilibrado',
          tagline: 'Las mismas piezas, con un par de upgrades en lo que más se nota',
          products: [
            {
              slot: 'outerwear',
              slotLabel: 'Cardigan azul',
              name: 'Chaqueta de algodón con cremallera, canalé inglés',
              brand: 'La Redoute Collections',
              price: 32.49,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/3/1/1/311935071d5b3b303e1189dba220ce3a.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301753729&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'top',
              slotLabel: 'Camiseta blanca',
              name: 'Camiseta de manga corta con logotipo',
              brand: 'Calvin Klein',
              price: 35.99,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/7/e/1/7e1def9077a29b8b4b9ee656fbd564f7.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301837117&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'pants',
              slotLabel: 'Pantalón claro',
              name: 'Pantalón recto de lino Signature ISAAC',
              brand: 'La Redoute Collections',
              price: 38.99,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/1/5/5/15565ad5a8ef2144bc572bfa1d9d9ae5.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301756106&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'shoes',
              slotLabel: 'Mocasines',
              name: 'Mocasines de piel ligera',
              brand: 'Tommy Hilfiger',
              price: 87.45,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/6/3/3/6332cb3773bab95e10d6e025b3d3473c.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301664847&a=2806382&m=10497',
              network: 'awin'
            }
          ]
        },
        {
          tier: 'premium',
          label: 'Premium',
          tagline: 'Inversión en piezas que durarán cinco temporadas o más',
          products: [
            {
              slot: 'outerwear',
              slotLabel: 'Cardigan azul',
              name: 'Jersey de canalé con cremallera, de algodón',
              brand: 'Polo Ralph Lauren',
              price: 199.75,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/b/3/6/b369bde375d2162d19161d286824a20b.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301832115&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'top',
              slotLabel: 'Camiseta blanca',
              name: 'Camiseta recta con bordes a contraste',
              brand: 'Polo Ralph Lauren',
              price: 80.74,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/5/b/9/5b91f2178a3de858cccb942c8242b526.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301796947&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'pants',
              slotLabel: 'Pantalón claro',
              name: 'Pantalones chinos slim efecto lavado Bedford',
              brand: 'Polo Ralph Lauren',
              price: 152.25,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/4/7/5/475a898139131f2aab0f68d1c80deec3.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301751000&a=2806382&m=10497',
              network: 'awin'
            },
            {
              slot: 'shoes',
              slotLabel: 'Mocasines',
              name: 'Mocasines de piel Delphes, fabricados en Europa',
              brand: 'JONAK',
              price: 155.00,
              imageUrl: 'https://cdn.laredoute.com/cdn-cgi/image/width=1200%2Cheight=1200%2Cfit=pad%2Cdpr=1/products/c/6/d/c6d30102e876baa0f7c8adc0636467b2.jpg',
              affiliateUrl: 'https://www.awin1.com/pclick.php?p=44301636418&a=2806382&m=10497',
              network: 'awin'
            }
          ]
        }
      ]
    }
  ];

  function tierTotal(tier) {
    return tier.products.reduce((sum, p) => sum + p.price, 0);
  }

  function cheapestTierTotal(outfit) {
    return Math.min(...outfit.tiers.map(tierTotal));
  }

  function mostExpensiveTierTotal(outfit) {
    return Math.max(...outfit.tiers.map(tierTotal));
  }

  function allOutfits() {
    return WEEKLY_OUTFITS.slice().sort((a, b) => (a.publishAt < b.publishAt ? 1 : -1));
  }

  // Fallback decision: si ningún outfit cumple publishAt <= now (porque hoy es
  // antes del primer publishAt), igualmente devolvemos el más antiguo para no
  // dejar la página vacía. Solo hay un outfit cargado de momento.
  function getCurrentOutfit(now) {
    now = now || new Date();
    const sorted = allOutfits();
    const live = sorted.find(o => new Date(o.publishAt) <= now);
    return live || sorted[sorted.length - 1];
  }

  function getPastOutfits(now) {
    const current = getCurrentOutfit(now);
    return allOutfits().filter(o => o.slug !== current.slug);
  }

  function getOutfitBySlug(slug) {
    return WEEKLY_OUTFITS.find(o => o.slug === slug);
  }

  function optimizeProductImage(url, width) {
    // Sustituye width=NNNN y height=NNNN en URLs de Cloudflare image resize.
    return url
      .replace(/width=\d+/, 'width=' + width)
      .replace(/height=\d+/, 'height=' + width);
  }

  const eurFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  });
  function formatEUR(n) { return eurFormatter.format(n); }

  function detailUrl(slug) { return SITE_ORIGIN + '/outfit-de-la-semana/' + slug + '/'; }
  function indexUrl() { return SITE_ORIGIN + '/outfit-de-la-semana/'; }

  window.LynenWeeklyOutfits = {
    SITE_ORIGIN: SITE_ORIGIN,
    all: allOutfits,
    current: getCurrentOutfit,
    past: getPastOutfits,
    bySlug: getOutfitBySlug,
    tierTotal: tierTotal,
    cheapestTierTotal: cheapestTierTotal,
    mostExpensiveTierTotal: mostExpensiveTierTotal,
    optimizeProductImage: optimizeProductImage,
    formatEUR: formatEUR,
    detailUrl: detailUrl,
    indexUrl: indexUrl
  };
})();
