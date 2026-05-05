/**
 * Outfit de la semana — orquestador de datos.
 *
 * Lee dos cosas que se cargan ANTES de este script en cada página:
 *   - window.WeeklyOutfitsRaw.products       (catálogo de productos por ID)
 *   - window.WeeklyOutfitsRaw.outfits[slug]  (cada outfit raw)
 *
 * Hidrata cada outfit sustituyendo `{ productId }` por el producto completo,
 * y expone la API pública en `window.LynenWeeklyOutfits`. Las páginas de
 * detalle, el teaser y el índice consumen esta API exactamente igual que
 * antes de la refactorización — desde su punto de vista, los outfits siguen
 * teniendo `tier.products[i].name`, `.brand`, `.price`, etc.
 *
 * Para añadir un outfit nuevo:
 *   1. Crea /data/outfits/<slug>.js con la estructura existente.
 *   2. Si añade productos nuevos, añádelos a /data/products.js con su ID.
 *   3. En cada HTML donde queramos cargarlo, incluir <script src> de los
 *      tres archivos antes de data.js (el orden importa).
 *
 * NOTA SEO: cuando se genere sitemap.xml automatizado, debe filtrar
 * `all().filter(isPublished)` para no incluir URLs no publicadas.
 *
 * GATING: páginas de detalle con publishAt > now se bloquean en cliente
 * vía detail-init.js.
 */
(function () {
  'use strict';

  const SITE_ORIGIN = 'https://www.lynenapp.com';

  const RAW = window.WeeklyOutfitsRaw || {};
  const PRODUCTS = RAW.products || {};
  const OUTFITS_RAW = RAW.outfits || {};

  // ── Hidratación ─────────────────────────────────────────────────────
  // Resuelve cada `{ productId, slot, slotLabel }` a producto completo.
  // Si un productId no existe en el catálogo, lo logueamos y excluimos
  // del tier (mejor que petar la página entera).
  function hydrateOutfit(rawOutfit) {
    return Object.assign({}, rawOutfit, {
      tiers: rawOutfit.tiers.map(function (tier) {
        return Object.assign({}, tier, {
          products: tier.products.map(function (ref) {
            const product = PRODUCTS[ref.productId];
            if (!product) {
              console.error('[WeeklyOutfits] Product not found in catalog: '
                + ref.productId + ' (referenced from ' + rawOutfit.slug
                + ' / ' + tier.tier + ')');
              return null;
            }
            return Object.assign({
              slot: ref.slot,
              slotLabel: ref.slotLabel
            }, product);
          }).filter(Boolean)
        });
      })
    });
  }

  const HYDRATED = Object.keys(OUTFITS_RAW).map(function (slug) {
    return hydrateOutfit(OUTFITS_RAW[slug]);
  });

  // ── Helpers de cálculo ──────────────────────────────────────────────

  function tierTotal(tier) {
    return tier.products.reduce(function (sum, p) { return sum + p.price; }, 0);
  }

  function cheapestTierTotal(outfit) {
    return Math.min.apply(null, outfit.tiers.map(tierTotal));
  }

  function mostExpensiveTierTotal(outfit) {
    return Math.max.apply(null, outfit.tiers.map(tierTotal));
  }

  // ── Listado y filtrado ──────────────────────────────────────────────

  function allOutfits() {
    return HYDRATED.slice().sort(function (a, b) {
      return a.publishAt < b.publishAt ? 1 : -1;
    });
  }

  function isPublished(outfit, now) {
    return new Date(outfit.publishAt) <= (now || new Date());
  }

  // Decisión sobre el fallback de `current`:
  // Si ningún outfit cumple publishAt <= now (estamos antes del primer
  // publishAt), devolvemos el outfit con publishAt más cercano en el
  // futuro (el más antiguo). Esto garantiza que la home y el teaser
  // siempre tienen contenido — pero la página de detalle correspondiente
  // sigue gated por detail-init.js hasta su `publishAt`. O sea: el
  // usuario ve la portada en home pero al hacer click llega a
  // "Próximamente disponible el día X".
  function getCurrentOutfit(now) {
    now = now || new Date();
    const sorted = allOutfits(); // DESC por publishAt
    const live = sorted.find(function (o) { return isPublished(o, now); });
    return live || sorted[sorted.length - 1];
  }

  // Devuelve solo outfits ya publicados, excluyendo el actual.
  // Outfits con publishAt futuro NO aparecen aquí.
  function getPastOutfits(now) {
    now = now || new Date();
    const current = getCurrentOutfit(now);
    return allOutfits().filter(function (o) {
      return isPublished(o, now) && (!current || o.slug !== current.slug);
    });
  }

  function getOutfitBySlug(slug) {
    return HYDRATED.find(function (o) { return o.slug === slug; });
  }

  // ── Helpers de presentación ─────────────────────────────────────────

  function formatPublishDate(iso, locale) {
    return new Date(iso).toLocaleDateString(locale || 'es-ES', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  function optimizeProductImage(url, width) {
    return url
      .replace(/width=\d+/, 'width=' + width)
      .replace(/height=\d+/, 'height=' + width);
  }

  const eurFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency', currency: 'EUR'
  });
  function formatEUR(n) { return eurFormatter.format(n); }

  function detailUrl(slug) { return SITE_ORIGIN + '/outfit-de-la-semana/' + slug + '/'; }
  function indexUrl() { return SITE_ORIGIN + '/outfit-de-la-semana/'; }

  // ── API pública ─────────────────────────────────────────────────────

  window.LynenWeeklyOutfits = {
    SITE_ORIGIN: SITE_ORIGIN,
    all: allOutfits,
    current: getCurrentOutfit,
    past: getPastOutfits,
    bySlug: getOutfitBySlug,
    isPublished: isPublished,
    tierTotal: tierTotal,
    cheapestTierTotal: cheapestTierTotal,
    mostExpensiveTierTotal: mostExpensiveTierTotal,
    optimizeProductImage: optimizeProductImage,
    formatEUR: formatEUR,
    formatPublishDate: formatPublishDate,
    detailUrl: detailUrl,
    indexUrl: indexUrl
  };
})();
