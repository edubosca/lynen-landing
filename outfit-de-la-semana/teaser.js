/**
 * teaser.js — render dinámico del teaser "Outfit de la semana" en la home.
 *
 * Lee LynenWeeklyOutfits.current() y monta la card del outfit actual.
 * Cuando cambia el outfit (lunes a las 10:00 europe/madrid del nuevo
 * publishAt), el teaser se actualiza solo en la próxima carga.
 *
 * Layout:
 *   - Mobile/tablet (<lg): aspect-ratio + imagen full-bleed con overlay
 *     y texto al pie. Mantiene el formato editorial original.
 *   - Desktop (lg+): grid 2 columnas. Texto a la izquierda, imagen
 *     completa a la derecha (`object-contain`, sin recortes).
 *
 * Datos del outfit (title, subtitle) están solo en español en data.js.
 * El wrapper bilingüe (eyebrow, H2 superior, "Browse all") se mantiene en
 * el HTML estático con data-lang-text. Aquí solo inyectamos la card.
 */
(function () {
  'use strict';

  const container = document.getElementById('weekly-outfit-teaser');
  if (!container || !window.LynenWeeklyOutfits) return;

  const W = window.LynenWeeklyOutfits;
  const outfit = W.current();
  if (!outfit) return;

  const totals = outfit.tiers.map(W.tierTotal);
  const fmt = function (n) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency', currency: 'EUR', maximumFractionDigits: 0
    }).format(n);
  };

  const url = '/outfit-de-la-semana/' + outfit.slug + '/';
  const escapeHtml = function (s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  const altSafe = escapeHtml(outfit.heroImage.alt);
  const titleSafe = escapeHtml(outfit.title);
  const subtitleSafe = escapeHtml(outfit.subtitle);
  const seasonSafe = escapeHtml(outfit.season);

  // Bloque de contenido (eyebrow + título + subtítulo + precios + CTA).
  // Se reutiliza tal cual en el layout mobile (overlay) y desktop (columna).
  const contentBlock =
    '<p class="text-xs font-semibold tracking-[0.2em] text-lynAccent uppercase mb-3">' +
      '<span data-lang-text="en">This week · ' + seasonSafe + '</span>' +
      '<span data-lang-text="es">Esta semana · ' + seasonSafe + '</span>' +
    '</p>' +
    '<h3 class="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-3">' +
      titleSafe +
    '</h3>' +
    '<p class="text-base sm:text-lg text-white/85 mb-5 max-w-xl">' +
      subtitleSafe +
    '</p>' +
    '<div class="flex flex-wrap items-center gap-x-5 gap-y-3">' +
      '<p class="text-sm sm:text-base text-white/85">' +
        '<span data-lang-text="en">From </span><span data-lang-text="es">Desde </span>' +
        '<span class="font-bold text-white">' + fmt(totals[0]) + '</span>' +
        ' <span class="opacity-50 mx-1">·</span> ' +
        '<span class="font-bold text-white">' + fmt(totals[1]) + '</span>' +
        ' <span class="opacity-50 mx-1">·</span> ' +
        '<span class="font-bold text-white">' + fmt(totals[2]) + '</span>' +
      '</p>' +
      '<span class="inline-flex items-center gap-2 text-white text-sm font-semibold transition-all group-hover:gap-3">' +
        '<span data-lang-text="en">See the full outfit</span>' +
        '<span data-lang-text="es">Ver el outfit completo</span>' +
        '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>' +
      '</span>' +
    '</div>';

  // Mobile/tablet: aspect-ratio + imagen full-bleed con overlay (intocado).
  const mobileMarkup =
    '<div class="lg:hidden relative aspect-[16/10] sm:aspect-[16/8] overflow-hidden">' +
      '<img src="' + outfit.heroImage.src + '" alt="' + altSafe + '"' +
           ' class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"' +
           ' width="1600" height="900" loading="lazy" decoding="async" />' +
      '<div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.5) 45%, rgba(10,10,10,0.18) 100%);"></div>' +
      '<div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">' +
        '<div class="max-w-2xl">' +
          contentBlock +
        '</div>' +
      '</div>' +
    '</div>';

  // Desktop (lg+): grid 2-col, texto izquierda + imagen completa derecha.
  const desktopMarkup =
    '<div class="hidden lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:p-10 xl:p-12 lg:min-h-[460px]">' +
      '<div>' +
        contentBlock +
      '</div>' +
      '<div class="flex items-center justify-center">' +
        '<img src="' + outfit.heroImage.src + '" alt="' + altSafe + '"' +
             ' class="w-full max-h-[440px] object-contain rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:scale-[1.02]"' +
             ' width="1600" height="1000" loading="lazy" decoding="async" />' +
      '</div>' +
    '</div>';

  container.innerHTML =
    '<a href="' + url + '" class="group relative block overflow-hidden rounded-3xl bg-lynDark">' +
      mobileMarkup +
      desktopMarkup +
    '</a>';
})();
