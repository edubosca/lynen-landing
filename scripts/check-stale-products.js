#!/usr/bin/env node
/**
 * check-stale-products.js
 *
 * Revisa el catálogo de /outfit-de-la-semana/data/products.js y lista los
 * productos cuyo `lastVerifiedAt` tiene más de 30 días. Pensado para
 * recordar verificación manual de precios, imagen y URL de afiliado.
 *
 * Uso:
 *   node scripts/check-stale-products.js
 *   npm run check-stale
 */
'use strict';

const fs = require('fs');
const path = require('path');

const STALE_DAYS = 30;
const PRODUCTS_PATH = path.join(__dirname, '..', 'outfit-de-la-semana', 'data', 'products.js');

function loadProducts() {
  const code = fs.readFileSync(PRODUCTS_PATH, 'utf8');
  const ctx = { window: {} };
  // Ejecuta el script en contexto controlado (no tiene side effects más allá
  // de window.WeeklyOutfitsRaw.products).
  new Function('window', code)(ctx.window);
  return ctx.window.WeeklyOutfitsRaw && ctx.window.WeeklyOutfitsRaw.products || {};
}

function daysBetween(isoDate, now) {
  const then = new Date(isoDate + 'T00:00:00Z');
  const today = new Date(now.toISOString().slice(0, 10) + 'T00:00:00Z');
  return Math.floor((today - then) / (24 * 60 * 60 * 1000));
}

function formatEUR(n) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency', currency: 'EUR'
  }).format(n);
}

function main() {
  const now = new Date();
  const products = loadProducts();
  const ids = Object.keys(products);

  if (ids.length === 0) {
    console.log('No hay productos en el catálogo.');
    process.exit(0);
  }

  const stale = ids
    .map(function (id) {
      const p = products[id];
      const days = daysBetween(p.lastVerifiedAt, now);
      return { id: id, product: p, days: days };
    })
    .filter(function (entry) { return entry.days > STALE_DAYS; })
    .sort(function (a, b) { return b.days - a.days; });

  if (stale.length === 0) {
    console.log('✓ Todos los productos verificados en los últimos ' + STALE_DAYS + ' días.\n');
    process.exit(0);
  }

  console.log('\nProductos sin verificar en los últimos ' + STALE_DAYS + ' días:\n');
  stale.forEach(function (entry) {
    const p = entry.product;
    console.log('  ⚠️  ' + entry.id);
    console.log('      Última verificación: ' + p.lastVerifiedAt + ' (' + entry.days + ' días)');
    console.log('      ' + p.brand + ' · ' + formatEUR(p.price));
    console.log('      ' + p.affiliateUrl);
    if (p.notes) console.log('      Notas: ' + p.notes);
    console.log('');
  });
  console.log('Total: ' + stale.length + ' producto' + (stale.length === 1 ? '' : 's') + ' pendiente' + (stale.length === 1 ? '' : 's') + ' de verificar.\n');
  process.exit(0);
}

main();
