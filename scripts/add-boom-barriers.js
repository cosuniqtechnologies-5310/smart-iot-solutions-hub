const fs = require('fs');

const tsContent = fs.readFileSync('src/data/products.ts', 'utf-8');

// Require the verified products list
const { boomBarriers, newAccessoriesList } = require('./verify-new-products-data.js');

// 1. Parse current products from products.ts
const match = tsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find products array in products.ts');
  process.exit(1);
}

let products = eval(match[1]);
console.log('Current products count:', products.length);

// Fix AZSL12AADC code to AZSL12ADC
const sl = products.find(p => p.code === 'AZSL12AADC' || p.id === 'azsl12aadc');
if (sl) {
  sl.code = 'AZSL12ADC';
  console.log('Updated AZSL12AADC code to AZSL12ADC');
}

// Find index where accessories start (first product with category === 'Accessories')
const firstAccIndex = products.findIndex(p => p.category === 'Accessories');
console.log('First accessory index:', firstAccIndex);

// We will insert boom barriers right before the accessories (after swing gate operators)
// And append the new accessories into the accessories section!
if (firstAccIndex !== -1) {
  products.splice(firstAccIndex, 0, ...boomBarriers);
} else {
  products.push(...boomBarriers);
}

// Append new accessories
products.push(...newAccessoriesList);

console.log('New total products count:', products.length);

// Generate updated products.ts content
const newProductsCode = `export interface ProductAccordion {
  title: string;
  items?: string[];
  content?: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  series?: string;
  tag?: string;
  category:
    | "Swing Gate Operators"
    | "Boom Barriers"
    | "Sliding Gate Operators"
    | "Sliding Glass Door Operators"
    | "Switches & Controls"
    | "Smart Curtains"
    | "Lighting"
    | "Smart Locks & Security"
    | "Gateways & Controllers"
    | "Accessories"
    | "Networking & Routers"
    | string;
  price?: number | string;
  priceNote?: string;
  particulars?: string | string[];
  accordions?: ProductAccordion[];
  isFeatured?: boolean;
  specs?: Record<string, Record<string, string>>;
  image?: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('src/data/products.ts', newProductsCode, 'utf-8');
console.log('Saved src/data/products.ts');

// Also update smart-home-items.json
fs.writeFileSync('smart-home-items.json', JSON.stringify(products, null, 2), 'utf-8');
console.log('Saved smart-home-items.json');
