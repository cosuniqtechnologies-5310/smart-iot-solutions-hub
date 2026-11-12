const fs = require('fs');

const ts = fs.readFileSync('src/data/products.ts', 'utf-8');
const existingCodes = new Set([...ts.matchAll(/"code":\s*"([^"]+)"/g)].map(m => m[1].trim()));

console.log('Existing codes count:', existingCodes.size);

const newBoomBarriers = [
  "AZBB113/AZBTO12M",
  "AZBB115A/AZBT01A6M",
  "AZBB115A/AZBA06A",
  "AZBB115A/AZBLO7A6M",
  "AZBB115A/AZBF05A90D",
  "AZBB115A/AZBF10A180D",
  "AZBB115A/AZBFO3A4.5M",
  "AZBBL18/AZBT01A6M",
  "AZBBL18/AZBA06A",
  "AZBBL18/AZBLO7A6M",
  "AZBBL18/AZBF05A90D",
  "AZBBL18/AZBF10A180D",
  "AZBBL18/AZBFO3A4.5M",
  "AZBB115/AZBF036M",
  "AZBB119/AZBT088M",
  "AZBBA117B/AZBA09A"
];

const newAccessories = [
  "AZBLDCTX22",
  "AZBLDCTX23",
  "AZPC10A",
  "AZPCWL11A",
  "AZLPC12",
  "AZIR20",
  "AZIS4F20",
  "AZIS6F20",
  "AZRFPC41A8M",
  "AZSR519",
  "AZST518",
  "AZER141",
  "AZRFWIFI31A",
  "AZRER140",
  "AZT142",
  "AZGSM30",
  "AZPB16A",
  "AZPBIP65",
  "AZPBK16B",
  "AZPB16C",
  "AZPB16E",
  "AZPB16F",
  "AZPFAC452",
  "AZLB33",
  "AZLB34",
  "AZFL19",
  "AZFL20",
  "AZAFLAC19A",
  "AZAFLDC19B",
  "AZFLAC21",
  "AZSL12ADC",
  "AZSL12AAC",
  "AZBBVH01",
  "AZBBVH01A",
  "AZBBMVH02",
  "AZBT016M",
  "AZBT014M",
  "AZBF0590D",
  "AZBL076M",
  "AZBA04",
  "AZBF034.5M",
  "AZBF036M",
  "AZBBLDCCB730",
  "AZBBLDCCB704",
  "AZBBAI606",
  "AZBT01A6M",
  "AZBL07A6M",
  "AZBF03A4.5M",
  "AZBF05A90D",
  "AZBF10A180D",
  "AZBT088M",
  "AZBA09A",
  "AZBA06A",
  "AZBBCBNS03",
  "AZBBCBNS04",
  "AZBBCBNS05",
  "AZBBAOM01",
  "AZBBBM19",
  "AZBBPS708",
  "AZBBPS720",
  "AZBBPS709",
  "AZBBPS710",
  "AZBBLEDS20",
  "AZBTED21",
  "AZBBSSB01"
];

console.log('Boom Barriers already existing:');
newBoomBarriers.forEach(c => {
  if (existingCodes.has(c)) console.log('  ', c);
});

console.log('Accessories already existing:');
const alreadyExistingAcc = [];
const brandNewAcc = [];
newAccessories.forEach(c => {
  if (existingCodes.has(c)) alreadyExistingAcc.push(c);
  else brandNewAcc.push(c);
});
console.log('  Existing count:', alreadyExistingAcc.length, alreadyExistingAcc);
console.log('  Brand new count:', brandNewAcc.length, brandNewAcc);
