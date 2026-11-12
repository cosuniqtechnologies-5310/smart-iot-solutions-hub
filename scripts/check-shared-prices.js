const fs = require('fs');

const ts = fs.readFileSync('src/data/products.ts', 'utf-8');
const products = eval(ts.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/)[1]);

const priceCheck = {
  "AZPC10A": 3650,
  "AZPCWL11A": 6188,
  "AZLPC12": 10450,
  "AZIR20": 6540,
  "AZIS4F20": 11900,
  "AZIS6F20": 15900,
  "AZRFPC41A8M": 6150,
  "AZSR519": 9550,
  "AZST518": 6800,
  "AZER141": 6785,
  "AZRFWIFI31A": 7500,
  "AZRER140": 11350,
  "AZGSM30": 7515,
  "AZPB16A": 3100,
  "AZPBIP65": 5225,
  "AZPBK16B": 3900,
  "AZPB16C": 2100,
  "AZPB16E": 1400,
  "AZPB16F": 960,
  "AZPFAC452": 15100,
  "AZFL19": 4113,
  "AZFL20": 3482,
  "AZAFLAC19A": 2930,
  "AZAFLDC19B": 2930,
  "AZFLAC21": 3990,
  "AZSL12AAC": 29900
};

for (const [code, newPrice] of Object.entries(priceCheck)) {
  const p = products.find(x => x.code === code);
  if (p) {
    if (p.price !== newPrice) {
      console.log(`Mismatch in price for ${code}: old=${p.price}, new=${newPrice}`);
    }
  }
}
console.log('Price check complete.');
