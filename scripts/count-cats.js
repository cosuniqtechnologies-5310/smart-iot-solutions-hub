const fs = require('fs');
const ts = fs.readFileSync('src/data/products.ts', 'utf-8');
const cats = [...ts.matchAll(/"category":\s*"([^"]+)"/g)].map(m => m[1]);
const counts = {};
cats.forEach(c => counts[c] = (counts[c] || 0) + 1);
console.log(counts);
