#!/usr/bin/env node
/**
 * verify-product.js
 *
 * Marca un producto como verificado hoy: actualiza su `lastVerifiedAt` al
 * día actual en /outfit-de-la-semana/data/products.js, preservando todo
 * el resto del fichero (comentarios, orden, indentación).
 *
 * Uso:
 *   node scripts/verify-product.js <productId>
 *   node scripts/verify-product.js pikolinos-berna-negro
 */
'use strict';

const fs = require('fs');
const path = require('path');

const PRODUCTS_PATH = path.join(__dirname, '..', 'outfit-de-la-semana', 'data', 'products.js');

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function main() {
  const productId = process.argv[2];
  if (!productId) {
    console.error('Uso: node scripts/verify-product.js <productId>');
    process.exit(1);
  }

  const content = fs.readFileSync(PRODUCTS_PATH, 'utf8');

  // Busca el bloque del producto: '<id>': { ... lastVerifiedAt: '<old>', ... }
  // Preservamos todo lo de antes y después de la fecha; solo cambiamos esa
  // string.
  const re = new RegExp(
    '(\'' + escapeRegex(productId) + '\'\\s*:\\s*\\{[\\s\\S]*?lastVerifiedAt:\\s*\')([^\']+)(\')',
    'm'
  );
  const match = content.match(re);
  if (!match) {
    console.error('Producto no encontrado en el catálogo: ' + productId);
    console.error('(o el bloque no tiene lastVerifiedAt — revisa products.js)');
    process.exit(1);
  }

  const oldDate = match[2];
  const newDate = todayIso();
  if (oldDate === newDate) {
    console.log('✓ ' + productId + ' ya está verificado hoy (' + newDate + '). Sin cambios.');
    process.exit(0);
  }

  const updated = content.replace(re, '$1' + newDate + '$3');
  fs.writeFileSync(PRODUCTS_PATH, updated, 'utf8');
  console.log('✓ ' + productId + ': lastVerifiedAt ' + oldDate + ' → ' + newDate);
}

main();
