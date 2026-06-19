/**
 * detail-init.js — gating + SEO inyection para páginas /outfit-de-la-semana/<slug>/
 *
 * Cómo funciona:
 *  1. Se carga síncrono al inicio del <body>, después de data.js.
 *  2. Lee `body.dataset.outfitSlug` y busca el outfit en LynenWeeklyOutfits.
 *  3. Si publishAt > now: añade clase `outfit-gated` al <html>, cambia title
 *     a "Próximamente", inyecta <meta name="robots" content="noindex,nofollow">
 *     y rellena la fecha del placeholder coming-soon.
 *  4. Si publicado: inyecta dinámicamente al <head> el title específico,
 *     meta description, og:*, twitter:*, y los tres bloques JSON-LD
 *     (Article, BreadcrumbList, ItemList).
 *
 * Por qué la SEO se inyecta y no está inline:
 *  Crawlers que no ejecutan JS (Pinterest, Facebook scraper, algunos bots)
 *  no verán el JSON-LD ni og:* del outfit hasta que esté publicado, así
 *  que no pueden cachear o indexar contenido pre-launch.
 */
(function () {
  'use strict';

  var W = window.LynenWeeklyOutfits;
  if (!W || !document.body) return;

  var slug = document.body.dataset.outfitSlug;
  if (!slug) return;

  var outfit = W.bySlug(slug);
  if (!outfit) return;

  var publishDate = new Date(outfit.publishAt);
  var now = new Date();
  var published = publishDate <= now;

  if (!published) {
    gateOutfit();
  } else {
    injectOutfitSEO(outfit);
  }

  // ── Gating ──────────────────────────────────────────────────────────
  function gateOutfit() {
    document.documentElement.classList.add('outfit-gated');
    document.title = 'Próximamente · Outfit de la semana | Lynen';

    var robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);

    // Rellenar la fecha del placeholder cuando el DOM esté listo.
    document.addEventListener('DOMContentLoaded', function () {
      var dateEl = document.querySelector('[data-coming-soon-date]');
      if (!dateEl) return;
      var dateStr = publishDate.toLocaleDateString('es-ES', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
      var timeStr = publishDate.toLocaleTimeString('es-ES', {
        hour: '2-digit', minute: '2-digit'
      });
      dateEl.textContent = dateStr + ' a las ' + timeStr;
    });
  }

  // ── SEO inyection (solo si publicado) ────────────────────────────────
  function injectOutfitSEO(o) {
    setMeta('robots', 'index, follow');

    var origin = W.SITE_ORIGIN;
    var url = origin + '/outfit-de-la-semana/' + o.slug + '/';
    var imgUrl = origin + o.heroImage.src;

    var totals = o.tiers.map(function (t) {
      return t.products.reduce(function (s, p) { return s + p.price; }, 0);
    });
    var cheapestEur = W.formatEUR(Math.min.apply(null, totals));
    var expensiveEur = W.formatEUR(Math.max.apply(null, totals));
    var totalProducts = o.tiers.reduce(function (n, t) { return n + t.products.length; }, 0);

    document.title = o.title + ' · Outfit de la semana | Lynen';

    setMeta('description',
      'Recrea ' + lowerFirst(o.title) + ' con tres niveles de presupuesto: desde '
      + cheapestEur + ' hasta ' + expensiveEur + '. ' + (o.tiers[0].products.length)
      + ' piezas, look completo. Descarga Lynen para más outfits.');

    setMetaProp('og:type', 'article');
    setMetaProp('og:site_name', 'Lynen');
    setMetaProp('og:locale', 'es_ES');
    setMetaProp('og:url', url);
    setMetaProp('og:title', o.title + ' — Outfit de la semana');
    setMetaProp('og:description',
      o.subtitle + '. Recréalo en tres niveles: asequible, equilibrado o premium.');
    setMetaProp('og:image', imgUrl);
    setMetaProp('og:image:alt', o.heroImage.alt);
    setMetaProp('article:published_time', o.publishAt);
    setMetaProp('article:section', 'Outfit de la semana');
    o.vibeKeywords.forEach(function (kw) {
      appendMetaProp('article:tag', kw);
    });

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', o.title + ' — Outfit de la semana');
    setMeta('twitter:description', o.subtitle);
    setMeta('twitter:image', imgUrl);

    appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: o.title,
      description: o.subtitle + '. Tres niveles de presupuesto.',
      image: imgUrl,
      datePublished: o.publishAt,
      dateModified: o.publishAt,
      inLanguage: 'es-ES',
      author: { '@type': 'Organization', name: 'Lynen', url: origin },
      publisher: {
        '@type': 'Organization',
        name: 'Lynen',
        logo: { '@type': 'ImageObject', url: origin + '/lynen-logo.png' }
      },
      mainEntityOfPage: url,
      about: 'Outfit de la semana inspirado en ' + (o.inspiredBy && o.inspiredBy.name)
    });

    appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: origin + '/' },
        { '@type': 'ListItem', position: 2, name: 'Outfit de la semana', item: origin + '/outfit-de-la-semana/' },
        { '@type': 'ListItem', position: 3, name: o.title }
      ]
    });

    var pos = 0;
    var items = [];
    o.tiers.forEach(function (t) {
      t.products.forEach(function (p) {
        pos++;
        items.push({
          '@type': 'ListItem',
          position: pos,
          item: {
            '@type': 'Product',
            name: p.name,
            brand: { '@type': 'Brand', name: p.brand },
            image: p.imageUrl,
            offers: {
              '@type': 'Offer',
              price: p.price.toFixed(2),
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              url: p.affiliateUrl
            }
          }
        });
      });
    });
    appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: o.title + ' — productos',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: totalProducts,
      itemListElement: items
    });
  }

  function setMeta(name, content) {
    var existing = document.querySelector('meta[name="' + name + '"]');
    if (existing) { existing.content = content; return; }
    var m = document.createElement('meta');
    m.name = name;
    m.content = content;
    document.head.appendChild(m);
  }

  function setMetaProp(prop, content) {
    var existing = document.querySelector('meta[property="' + prop + '"]');
    if (existing) { existing.content = content; return; }
    var m = document.createElement('meta');
    m.setAttribute('property', prop);
    m.content = content;
    document.head.appendChild(m);
  }

  function appendMetaProp(prop, content) {
    var m = document.createElement('meta');
    m.setAttribute('property', prop);
    m.content = content;
    document.head.appendChild(m);
  }

  function appendJsonLd(obj) {
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  function lowerFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
})();
